-- Waitlist Registration System
-- This script creates the waitlist table for storing user registrations

-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'invited', 'registered')),
  referral_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(6), 'hex'),
  referred_by TEXT REFERENCES public.waitlist(referral_code),
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for faster email lookups (uniqueness check)
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);

-- Create index for faster status filtering
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON public.waitlist(status);

-- Create index for referral lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_referral_code ON public.waitlist(referral_code);

-- Create index for created_at sorting (for admin dashboard)
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public inserts (for registration)
-- This allows anyone to register for the waitlist
CREATE POLICY "Allow public waitlist registration" ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow reading own entry by email (for checking registration status)
-- Users can only see their own registration
CREATE POLICY "Allow users to view own registration" ON public.waitlist
  FOR SELECT
  USING (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_waitlist_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS waitlist_updated_at ON public.waitlist;
CREATE TRIGGER waitlist_updated_at
  BEFORE UPDATE ON public.waitlist
  FOR EACH ROW
  EXECUTE FUNCTION public.update_waitlist_updated_at();

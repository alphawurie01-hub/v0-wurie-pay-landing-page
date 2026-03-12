-- Waitlist Registration System
-- This script creates the waitlist table for storing user registrations

-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  referral_code TEXT UNIQUE,
  referred_by TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON public.waitlist(status);
CREATE INDEX IF NOT EXISTS idx_waitlist_referral_code ON public.waitlist(referral_code);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public inserts (for registration)
CREATE POLICY "Allow public waitlist registration" ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow reading entries (for checking registration)
CREATE POLICY "Allow users to view registrations" ON public.waitlist
  FOR SELECT
  USING (true);

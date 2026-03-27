export type Locale = "en" | "fr"

export function normalizeLocale(input: unknown): Locale {
  return input === "fr" ? "fr" : "en"
}

const copy = {
  en: {
    nav: {
      features: "Features",
      solution: "Solution",
      security: "Security",
      team: "Team",
      joinWaitlist: "Join Waitlist",
      language: "Language",
      english: "English",
      french: "French",
    },
    hero: {
      badge: "Launching Soon",
      titleA: "The Future of Finance in Africa",
      titleB: "Starts Here",
      tagline:
        "Send money, pay bills, and manage your finances with AI, all inside one secure financial platform designed for Africa.",
      bullets: ["Secure & Encrypted", "AI-Powered", "Blockchain", "Built for Africa"],
      waitlistTitle: "Join the Early Access Waitlist",
      waitlistDesc: "Early access users will receive priority onboarding and exclusive beta features.",
      earlyAccess: "Early Access",
    },
    socialProof: {
      heading: "Join the growing community building the future of African finance",
      sub: "people already waiting for WuriePay",
    },
    earlyAccess: {
      heading: "Send, save, and grow money across Africa",
      subheading: "fast and simple.",
      buttonText: "Get Early Access",
    },
    form: {
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      country: "Country",
      selectCountry: "Select your country",
      submit: "Join the Waitlist",
      joining: "Joining...",
      youreOnTheList: "You're on the list!",
    },
    problem: {
      heading: "Financial tools in Africa are outdated",
      sub: "Legacy infrastructure like SWIFT wasn't designed for modern digital economies. It's time for change.",
      items: [
        { title: "Cross-border payments are expensive", desc: "High fees drain resources from businesses and families" },
        { title: "Millions remain unbanked", desc: "Traditional banking excludes too many people" },
        { title: "Financial tools are fragmented", desc: "Managing money requires juggling multiple apps" },
        { title: "Small businesses lack insights", desc: "Entrepreneurs need better financial analytics" },
      ],
    },
    solution: {
      heading: "Meet WuriePay",
      sub: "WuriePay is a modern fintech platform designed for Africa that combines payments, artificial intelligence, and decentralized finance into one powerful app.",
      pillars: {
        payments: {
          title: "Payments",
          features: ["Merchant payments", "Bill payments", "Tuition fee", "QR code payments", "Digital wallet"],
        },
        ai: {
          title: "AI Finance",
          features: ["Spending insights", "Smart budgeting", "AI financial assistant", "Credit scoring"],
        },
        blockchain: {
          title: "Blockchain",
          features: ["Cross-border payments", "Stablecoin wallets", "Decentralized savings"],
        },
      },
    },
    benefits: {
      heading: "Key Features",
      items: [
        { title: "Smart Wallet", desc: "Secure wallet for storing and sending money." },
        { title: "Bill Payments", desc: "Pay utilities and everyday bills easily." },
        { title: "AI Financial Assistant", desc: "Personal financial insights and recommendations." },
        { title: "Instant Payments", desc: "Send money instantly to friends and businesses." },
        { title: "Global Transfers", desc: "Low-cost cross-border payments." },
        { title: "Merchant Tools", desc: "Businesses can accept payments and track revenue." },
      ],
    },
    different: {
      heading: "Why WuriePay Is Different",
      items: [
        { title: "AI-Powered Finance", desc: "Smart tools that help users understand and grow their money." },
        { title: "Built for Africa", desc: "Designed for African businesses, entrepreneurs, and global remittances." },
        { title: "Future-Ready Infrastructure", desc: "Built with advanced technology to support modern financial services." },
      ],
    },
    security: {
      heading: "Security built into every transaction",
      sub: "Your security is our top priority. We use industry-leading technology to keep your money and data safe.",
      items: [
        { title: "Secure identity verification", desc: "Multi-factor authentication protects your account" },
        { title: "Advanced fraud monitoring", desc: "Real-time detection keeps your money safe" },
        { title: "Encrypted financial infrastructure", desc: "Bank-level encryption for all transactions" },
        { title: "Privacy-first technology", desc: "Your data is protected and never shared" },
      ],
    },
    team: {
      heading: "Built by Founders Committed to Africa's Financial Future",
      sub: "WuriePay is led by founders focused on building modern financial infrastructure that expands access to digital finance across Africa. Their mission is to empower individuals, entrepreneurs, and businesses with intelligent financial tools designed for the continent's rapidly growing digital economy.",
      founders: [
        {
          name: "Alhaji Wurie Jalloh",
          role: "Co-Founder & Chief Executive Officer",
          bio: "Entrepreneur and technology innovator dedicated to building scalable financial infrastructure for Africa. As CEO of WuriePay and leader within WurieGroup, he focuses on developing platforms that combine payments, artificial intelligence, and next-generation financial technology to enable greater financial inclusion and economic opportunity across the continent.",
          image: "/images/alhaji.png",
          linkedin: "https://sl.linkedin.com/in/alhaji-wurie-jalloh-65721526b",
        },
        {
          name: "Hassan Wurie Jalloh",
          role: "Co-Founder",
          bio: "Data Scientist and AI Engineer passionate about building intelligent systems that solve real-world problems. As Co-Founder of WuriePay and WurieAI, he brings expertise in machine learning, data science, and artificial intelligence to develop scalable technologies that advance financial innovation and inclusion across Africa.",
          image: "/images/hassan.png",
          linkedin: "https://www.linkedin.com/in/hassana-diallo-1489a8236",
        },
      ],
      missionTitle: "Founder Mission Statement",
      missionQuote:
        "Our goal is to build financial technology that removes barriers, empowers African entrepreneurs, and connects Africa to the global digital economy.",
    },
    referral: {
      heading: "Move up the waitlist",
      sub: "Invite friends and move higher in the early access list",
      shareWithFriends: "Share with Friends",
      inviteNFriends: (n: number) => `Invite ${n} friends`,
      rewards: [
        { count: 3, title: "Priority Access", desc: "Get early access to WuriePay" },
        { count: 10, title: "Beta Tester Access", desc: "Join our exclusive beta program" },
        { count: 25, title: "Founder Q&A Session", desc: "Meet the team behind WuriePay" },
      ],
      shareMessage:
        "Join WuriePay - The Future of Finance in Africa! Get early access to send money, pay bills, and manage your finances with AI.",
      emailSubject: "Join WuriePay - The Future of Finance in Africa",
    },
    footer: {
      companyLine: "A WurieGroup company",
      tagline: "Building the future of finance in Africa",
      product: "Product",
      rights: "WuriePay by WurieGroup. All rights reserved.",
    },
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      solution: "Solution",
      security: "Sécurité",
      team: "Équipe",
      joinWaitlist: "Rejoindre la liste",
      language: "Langue",
      english: "Anglais",
      french: "Français",
    },
    hero: {
      badge: "Bientôt disponible",
      titleA: "L’avenir de la finance en Afrique",
      titleB: "commence ici",
      tagline:
        "Envoyez de l’argent, payez vos factures et gérez vos finances avec l’IA, dans une plateforme financière sécurisée conçue pour l’Afrique.",
      bullets: ["Sécurisé & chiffré", "Propulsé par l’IA", "Blockchain", "Conçu pour l’Afrique"],
      waitlistTitle: "Rejoignez la liste d’accès anticipé",
      waitlistDesc:
        "Les utilisateurs en accès anticipé bénéficieront d’un onboarding prioritaire et de fonctionnalités bêta exclusives.",
      earlyAccess: "Accès anticipé",
    },
    socialProof: {
      heading: "Rejoignez la communauté qui construit l’avenir de la finance africaine",
      sub: "personnes attendent déjà WuriePay",
    },    earlyAccess: {
      heading: "Envoyez, économisez et faites fructifier votre argent en Afrique",
      subheading: "rapidement et simplement.",
      buttonText: "Obtenir un accès anticipé",
    },
    form: {
      fullName: "Nom complet",
      phoneNumber: "Numéro de téléphone",
      emailAddress: "Adresse e-mail",
      country: "Pays",
      selectCountry: "Sélectionnez votre pays",
      submit: "Rejoindre la liste d'attente",
      joining: "Adhésion...",
      youreOnTheList: "Vous êtes sur la liste !",
    },    problem: {
      heading: "Les outils financiers en Afrique sont dépassés",
      sub: "Des infrastructures héritées comme SWIFT n’ont pas été conçues pour les économies numériques modernes. Il est temps de changer.",
      items: [
        { title: "Les paiements transfrontaliers sont coûteux", desc: "Des frais élevés pèsent sur les entreprises et les familles" },
        { title: "Des millions restent non bancarisés", desc: "La banque traditionnelle exclut trop de personnes" },
        { title: "Les outils financiers sont fragmentés", desc: "Gérer son argent oblige à utiliser plusieurs applications" },
        { title: "Les PME manquent de visibilité", desc: "Les entrepreneurs ont besoin de meilleures analyses financières" },
      ],
    },
    solution: {
      heading: "Découvrez WuriePay",
      sub: "WuriePay est une plateforme fintech moderne conçue pour l’Afrique, qui réunit paiements, intelligence artificielle et finance décentralisée dans une seule application.",
      pillars: {
        payments: {
          title: "Paiements",
          features: ["Paiements marchands", "Paiement de factures", "Frais de scolarité", "Paiements par QR code", "Portefeuille numérique"],
        },
        ai: {
          title: "Finance IA",
          features: ["Analyses des dépenses", "Budget intelligent", "Assistant financier IA", "Score de crédit"],
        },
        blockchain: {
          title: "Blockchain",
          features: ["Paiements transfrontaliers", "Portefeuilles stablecoin", "Épargne décentralisée"],
        },
      },
    },
    benefits: {
      heading: "Fonctionnalités clés",
      items: [
        { title: "Portefeuille intelligent", desc: "Portefeuille sécurisé pour stocker et envoyer de l’argent." },
        { title: "Paiement de factures", desc: "Payez facilement vos services et factures du quotidien." },
        { title: "Assistant financier IA", desc: "Des informations et recommandations financières personnalisées." },
        { title: "Paiements instantanés", desc: "Envoyez de l’argent instantanément à vos proches et aux commerces." },
        { title: "Transferts internationaux", desc: "Des transferts transfrontaliers à faible coût." },
        { title: "Outils marchands", desc: "Les entreprises peuvent accepter des paiements et suivre leurs revenus." },
      ],
    },
    different: {
      heading: "Pourquoi WuriePay est différent",
      items: [
        { title: "Finance propulsée par l’IA", desc: "Des outils intelligents pour comprendre et faire grandir votre argent." },
        { title: "Conçu pour l’Afrique", desc: "Pensé pour les entreprises africaines, les entrepreneurs et les transferts internationaux." },
        { title: "Infrastructure prête pour l’avenir", desc: "Une technologie avancée pour soutenir des services financiers modernes." },
      ],
    },
    security: {
      heading: "La sécurité intégrée à chaque transaction",
      sub: "Votre sécurité est notre priorité. Nous utilisons des technologies de pointe pour protéger votre argent et vos données.",
      items: [
        { title: "Vérification d’identité sécurisée", desc: "L’authentification multi-facteurs protège votre compte" },
        { title: "Surveillance avancée de la fraude", desc: "Détection en temps réel pour garder votre argent en sécurité" },
        { title: "Infrastructure chiffrée", desc: "Chiffrement de niveau bancaire pour toutes les transactions" },
        { title: "Technologie respectueuse de la vie privée", desc: "Vos données sont protégées et jamais partagées" },
      ],
    },
    team: {
      heading: "Une équipe fondatrice engagée pour l’avenir financier de l’Afrique",
      sub: "WuriePay est dirigé par des fondateurs qui construisent une infrastructure financière moderne afin d’élargir l’accès à la finance numérique en Afrique. Leur mission est de donner aux individus, entrepreneurs et entreprises des outils financiers intelligents adaptés à l’économie numérique en pleine croissance du continent.",
      founders: [
        {
          name: "Alhaji Wurie Jalloh",
          role: "Co-fondateur & Directeur général",
          bio: "Entrepreneur et innovateur technologique dédié à la construction d’une infrastructure financière évolutive pour l’Afrique. En tant que CEO de WuriePay et leader au sein de WurieGroup, il se concentre sur le développement de plateformes combinant paiements, intelligence artificielle et technologies financières de nouvelle génération afin de favoriser l’inclusion financière et les opportunités économiques sur le continent.",
          image: "/images/alhaji.png",
          linkedin: "https://sl.linkedin.com/in/alhaji-wurie-jalloh-65721526b",
        },
        {
          name: "Hassan Wurie Jalloh",
          role: "Co-fondateur",
          bio: "Data scientist et ingénieur IA passionné par la création de systèmes intelligents qui résolvent des problèmes réels. En tant que co-fondateur de WuriePay et WurieAI, il apporte son expertise en machine learning, data science et intelligence artificielle pour développer des technologies évolutives qui accélèrent l’innovation et l’inclusion financière en Afrique.",
          image: "/images/hassan.png",
          linkedin: "https://www.linkedin.com/in/hassana-diallo-1489a8236",
        },
      ],
      missionTitle: "Déclaration de mission des fondateurs",
      missionQuote:
        "Notre objectif est de créer une technologie financière qui supprime les barrières, autonomise les entrepreneurs africains et connecte l’Afrique à l’économie numérique mondiale.",
    },
    referral: {
      heading: "Montez dans la liste d’attente",
      sub: "Invitez des amis et remontez dans la liste d’accès anticipé",
      shareWithFriends: "Partager avec des amis",
      inviteNFriends: (n: number) => `Invitez ${n} amis`,
      rewards: [
        { count: 3, title: "Accès prioritaire", desc: "Obtenez un accès anticipé à WuriePay" },
        { count: 10, title: "Accès bêta testeur", desc: "Rejoignez notre programme bêta exclusif" },
        { count: 25, title: "Session Q&R avec les fondateurs", desc: "Rencontrez l’équipe derrière WuriePay" },
      ],
      shareMessage:
        "Rejoignez WuriePay - L’avenir de la finance en Afrique ! Accédez en avant-première pour envoyer de l’argent, payer vos factures et gérer vos finances avec l’IA.",
      emailSubject: "Rejoignez WuriePay - L’avenir de la finance en Afrique",
    },
    footer: {
      companyLine: "Une entreprise WurieGroup",
      tagline: "Construire l’avenir de la finance en Afrique",
      product: "Produit",

      rights: "WuriePay par WurieGroup. Tous droits réservés.",
    },
  },
} as const

export function getCopy(locale: Locale) {
  return copy[locale]
}


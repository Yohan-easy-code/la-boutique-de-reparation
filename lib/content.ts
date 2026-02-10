// lib/content.ts

export const services = [
  {
    id: "screen",
    title: "Remplacement écran",
    description: "Écran cassé, tactile qui bug… réparation rapide et propre.",
    icon: "Smartphone",
    duration: "30–60 min",
  },
  {
    id: "battery",
    title: "Changement batterie",
    description:
      "Autonomie faible, téléphone qui s’éteint… on remplace la batterie.",
    icon: "Battery",
    duration: "30–45 min",
  },
  {
    id: "charge",
    title: "Connecteur de charge",
    description: "Charge instable, faux contact… remplacement ou nettoyage.",
    icon: "Plug",
    duration: "30–60 min",
  },
  {
    id: "camera",
    title: "Caméra / Micro",
    description: "Caméra floue, micro HS… diagnostic et réparation.",
    icon: "Camera",
    duration: "30–60 min",
  },
  {
    id: "water",
    title: "Dégâts liquides",
    description: "Traitement rapide pour limiter l’oxydation (sans garantie).",
    icon: "Droplets",
    duration: "Selon diagnostic",
  },
  {
    id: "diagnostic",
    title: "Diagnostic",
    description:
      "On vérifie, on explique, puis on te propose la meilleure option.",
    icon: "Stethoscope",
    duration: "15–30 min",
  },
  {
    id: "pc-diagnostic",
    title: "Diagnostic PC / Mac",
    description:
      "Analyse lenteur, bug, panne : diagnostic clair avant intervention.",
    icon: "Monitor",
    duration: "30–60 min",
  },
  {
    id: "pc-ssd",
    title: "Upgrade SSD / RAM",
    description:
      "Boost de performance : remplacement SSD, ajout RAM, optimisation.",
    icon: "HardDrive",
    duration: "1–2 h",
  },
  {
    id: "pc-clean",
    title: "Nettoyage / surchauffe",
    description:
      "Dépoussiérage, pâte thermique, ventilateurs : réduction température.",
    icon: "Fan",
    duration: "1–2 h",
  },
  {
    id: "mac-setup",
    title: "Réinstallation / sauvegarde",
    description:
      "Réinstallation système, sauvegarde, transfert, récupération de données.",
    icon: "RefreshCcw",
    duration: "Selon cas",
  },
];

export const contactInfo = {
  businessName: "La Boutique de Réparation",
  phone: "01 46 38 54 81",
  whatsapp: "https://wa.me/33146385481",
  addresses: [
    {
      label: "59 Rue Lamarck, 75018 Paris",
      lines: ["59 Rue Lamarck", "75018 Paris"],
      mapsUrl: "https://www.google.com/maps?q=59+Rue+Lamarck+75018+Paris",
    },
    {
      label: "27 Avenue Jean Jaurès, 92140 Clamart",
      lines: ["27 Avenue Jean Jaurès", "92140 Clamart"],
      mapsUrl:
        "https://www.google.com/maps?q=27+Avenue+Jean+Jaur%C3%A8s+92140+Clamart",
    },
  ],
  hours: [
    { label: "Lun", value: "13:00 – 19:30" },
    { label: "Mar-Sam", value: "11:00 – 19:30" },
    { label: "Dim", value: "Fermé" },
  ],
  // Option 1: un lien Google Maps prêt (meilleur UX)
  mapsUrl: "https://www.google.com/maps?q=59+Rue+Lamarck+75018+Paris",
};

export const proofs = [
  {
    title: "Garantie",
    description:
      "Garantie 1 an sur la plupart des réparations (selon intervention).",
    icon: "Shield",
  },
  {
    title: "Réparation express",
    description: "Écran, batterie, charge : souvent en moins d’1h.",
    icon: "Timer",
  },
  {
    title: "Pièces de qualité",
    description: "Sélection d'origine ou compatible, montage soigné.",
    icon: "BadgeCheck",
  },
  {
    title: "Données respectées",
    description: "On intervient sans accéder à vos contenus.",
    icon: "Lock",
  },
];

export const faqs = [
  {
    question: "Combien de temps dure une réparation ?",
    answer:
      "La plupart des réparations courantes (écran, batterie, charge) sont réalisées en 30 à 60 minutes selon le modèle et la disponibilité des pièces.",
  },
  {
    question: "Proposez-vous une garantie ?",
    answer:
      "Oui, la plupart des interventions sont garanties. La durée dépend du type de réparation et des pièces utilisées.",
  },
  {
    question: "Dois-je prendre rendez-vous ?",
    answer:
      "Ce n’est pas obligatoire. Pour gagner du temps, envoie le modèle et le problème sur WhatsApp afin qu’on prépare un devis.",
  },
  {
    question: "Réparez-vous toutes les marques ?",
    answer:
      "Nous prenons en charge la majorité des smartphones. Pour certains modèles spécifiques, un diagnostic est nécessaire.",
  },
  {
    question: "Que faire en cas de téléphone tombé dans l’eau ?",
    answer:
      "Éteins-le immédiatement, ne le charge pas, et viens rapidement en boutique. Plus l’intervention est rapide, meilleures sont les chances.",
  },
];

export const steps = [
  {
    title: "Diagnostic",
    description: "On identifie la panne et on te propose un devis clair.",
    icon: "Search",
  },
  {
    title: "Réparation",
    description: "Intervention rapide avec pièces adaptées et montage propre.",
    icon: "Wrench",
  },
  {
    title: "Récupération",
    description: "Tu récupères ton téléphone, tests faits, conseils inclus.",
    icon: "CheckCircle2",
  },
];

export const testimonials = [
  {
    author: "Gabriel",
    rating: 5,
    date: "Novembre 2025",
    text: "Super boutique. Changement de batterie, réparation de châssis, et même intervention sur une alarme incendie : tout a été fait rapidement et proprement. Technicien professionnel, sérieux et vraiment à l’écoute. Merci pour la qualité du service ! ",
  },
  {
    author: "Alexandre Meyer",
    rating: 5,
    date: "Janvier 2026",
    text: "Réparation efficace et très bon conseil. Options clairement expliquées et devis très clair avant une réparation faite en 2 heures. On ne demande rien de mieux !",
  },
  {
    author: "Jeanne Leroy",
    rating: 5,
    date: "Juillet 2025",
    text: "Je recommande à 100%. Le gérant est une personne très honnête, arrangeante et efficace et les réparations sont de qualité.",
  },
];

export const google = {
  reviewsUrl:
    "https://www.google.com/search?sca_esv=05b0eef4b2f0cf75&sxsrf=ANbL-n7BDRBJzR9tyCKu8joc9J_xUgmIbA:1770218906739&q=La+Boutique+de+R%C3%A9paration+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDQ2szAwMjMytzQwM7G0NDYzNN7AyPiKUd4nUcEpv7Qks7A0VSElVSHo8MqCxKLEksz8PAXHssziRayEVAAA7sSYAl8AAAA&rldimm=11368026279064993613&tbm=lcl&hl=fr-FR&sa=X&ved=2ahUKEwj1ovGok8CSAxWjfaQEHYUOH9AQ9fQKegQITRAG&biw=1512&bih=861&dpr=2&aic=0#lkt=LocalPoiReviews",
};

export const computerRepair = [
  {
    title: "MacBook / iMac",
    points: ["Diagnostic", "Réinstallation", "Optimisation", "Récupération"],
  },
  {
    title: "PC portable / fixe",
    points: ["SSD / RAM", "Nettoyage surchauffe", "Windows", "Sauvegarde"],
  },
];

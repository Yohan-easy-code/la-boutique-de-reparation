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
  phone: "+33 0 00 00 00 00",
  whatsapp: "https://wa.me/33000000000",
  addressLines: ["12 Rue Exemple", "75000 Paris"],
  hours: [
    { label: "Lun–Ven", value: "10:00 – 19:00" },
    { label: "Sam", value: "10:00 – 17:00" },
    { label: "Dim", value: "Fermé" },
  ],
  // Option 1: un lien Google Maps prêt (meilleur UX)
  mapsUrl: "https://www.google.com/maps?q=La+Boutique+de+Réparation",
};

export const proofs = [
  {
    title: "Garantie",
    description: "Sur la plupart des réparations (selon intervention).",
    icon: "Shield",
  },
  {
    title: "Réparation express",
    description: "Écran, batterie, charge : souvent en moins d’1h.",
    icon: "Timer",
  },
  {
    title: "Pièces de qualité",
    description: "Sélection rigoureuse, montage soigné.",
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
    author: "Julien M.",
    rating: 5,
    date: "Janvier 2025",
    text: "Écran remplacé en moins d’une heure. Accueil pro, explications claires et téléphone comme neuf.",
  },
  {
    author: "Sophie L.",
    rating: 5,
    date: "Décembre 2024",
    text: "Très sérieux. Batterie changée rapidement, prix annoncé respecté. Je recommande sans hésiter.",
  },
  {
    author: "Karim D.",
    rating: 5,
    date: "Novembre 2024",
    text: "Diagnostic rapide et honnête. On m’a expliqué les options avant réparation. Travail propre.",
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

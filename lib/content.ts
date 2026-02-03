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

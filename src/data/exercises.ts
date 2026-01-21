export interface Exercise {
  id: number;
  title: string;
  description: string; // consignes dans l’ordre des classes Tailwind
  timer: number; // en secondes
  solution: string; // classes Tailwind exactes
}

export const exercises: Exercise[] = [
  {
    id: 1,
    title: "Bouton hover",
    description:
      "Appliquer un fond bleu indigo. Mettre le texte en blanc. Arrondir les coins. Changer la couleur du fond au passage de la souris.",
    timer: 60,
    solution: "bg-indigo-500 text-white rounded hover:bg-indigo-700",
  },
  {
    id: 2,
    title: "Aligner des cartessss",
    description:
      "Afficher les éléments en flexbox. Centrer horizontalement. Centrer verticalement. Autoriser le retour à la ligne. Ajouter un espacement entre les cartes. Ajouter un padding. Mettre un fond blanc. Arrondir les cartes. Ajouter une ombre.",
    timer: 90,
    solution:
      "flex justify-center items-center flex-wrap gap-4 p-4 bg-white rounded shadow",
  },
  {
    id: 3,
    title: "Galerie simple",
    description:
      "Utiliser une grille. Afficher trois colonnes. Ajouter un espacement. Passer à une colonne sur écran moyen. Ajouter un padding. Arrondir les éléments. Changer le fond au survol.",
    timer: 90,
    solution:
      "grid grid-cols-3 gap-4 md:grid-cols-1 p-2 rounded hover:bg-gray-200",
  },
  {
    id: 4,
    title: "Navigation simple",
    description:
      "Afficher les liens en flexbox. Aligner les liens à droite. Centrer verticalement. Changer la couleur du texte au survol. Mettre le texte en gras.",
    timer: 90,
    solution: "flex justify-end items-center hover:text-indigo-600 font-bold",
  },
  {
    id: 5,
    title: "Formulaire stylisé",
    description:
      "Ajouter un padding interne. Ajouter une marge externe. Mettre un fond blanc. Arrondir les coins. Changer la couleur du fond au survol. Mettre le texte en blanc.",
    timer: 90,
    solution: "p-2 m-2 bg-white rounded hover:bg-indigo-700 text-white",
  },
  {
    id: 6,
    title: "Section features",
    description:
      "Afficher les cartes en flexbox. Centrer horizontalement. Centrer verticalement. Ajouter un espacement. Ajouter un padding. Mettre un fond blanc. Arrondir les cartes. Ajouter une ombre.",
    timer: 90,
    solution:
      "flex justify-center items-center gap-4 p-4 bg-white rounded shadow",
  },
  {
    id: 7,
    title: "Landing page Hero",
    description:
      "Afficher les éléments en flexbox. Passer en colonne sur mobile. Centrer verticalement. Aligner le texte à gauche. Ajouter un padding. Mettre un fond sombre. Mettre le texte en blanc. Changer le fond au survol. Arrondir la section.",
    timer: 120,
    solution:
      "flex md:flex-col items-center text-left p-4 bg-gray-900 text-white hover:bg-indigo-700 rounded",
  },
  {
    id: 8,
    title: "Cards avec gap et padding",
    description:
      "Afficher les cartes en flexbox. Ajouter un espacement. Ajouter un padding. Mettre un fond blanc. Arrondir les cartes. Ajouter une ombre. Changer le fond au survol.",
    timer: 90,
    solution: "flex gap-4 p-4 bg-white rounded shadow hover:bg-gray-200",
  },
  {
    id: 9,
    title: "Section testimonial",
    description:
      "Utiliser une grille. Passer à une colonne sur mobile. Ajouter un espacement. Ajouter un padding. Mettre un fond blanc. Arrondir la section. Ajouter une ombre. Changer le fond au survol.",
    timer: 90,
    solution:
      "grid md:grid-cols-1 gap-4 p-4 bg-white rounded shadow hover:bg-gray-100",
  },
  {
    id: 10,
    title: "Mini dashboard",
    description:
      "Afficher la structure en flexbox. Prendre toute la largeur. Ajouter un padding. Mettre un fond gris clair. Arrondir. Ajouter une ombre. Changer le fond au survol.",
    timer: 120,
    solution: "flex w-full p-4 bg-gray-100 rounded shadow hover:bg-gray-200",
  },
  {
    id: 11,
    title: "Footer simple",
    description:
      "Afficher les liens en flexbox. Centrer horizontalement. Centrer verticalement. Ajouter un espacement. Ajouter un padding. Mettre un fond sombre. Mettre le texte en blanc.",
    timer: 90,
    solution:
      "flex justify-center items-center gap-4 p-4 bg-gray-800 text-white",
  },
  {
    id: 12,
    title: "Boutons groupés",
    description:
      "Afficher les boutons en flexbox. Ajouter un espacement. Ajouter un padding. Mettre un fond indigo. Mettre le texte en blanc. Arrondir. Changer le fond au survol.",
    timer: 60,
    solution:
      "flex gap-4 p-2 bg-indigo-500 text-white rounded hover:bg-indigo-700",
  },
  {
    id: 13,
    title: "Liste verticale",
    description:
      "Afficher les éléments en colonne. Ajouter un espacement. Ajouter un padding. Mettre un fond gris clair. Arrondir. Changer le fond au survol.",
    timer: 60,
    solution: "flex flex-col gap-2 p-2 bg-gray-100 rounded hover:bg-gray-200",
  },
  {
    id: 14,
    title: "Card avec image",
    description:
      "Afficher les éléments en colonne. Ajouter un padding. Mettre un fond blanc. Arrondir. Ajouter une ombre. Changer le fond au survol.",
    timer: 90,
    solution: "flex flex-col p-4 bg-white rounded shadow hover:bg-gray-200",
  },
  {
    id: 15,
    title: "Section statistiques",
    description:
      "Afficher les éléments en flexbox. Centrer horizontalement. Centrer verticalement. Ajouter un espacement. Ajouter un padding. Mettre un fond gris clair. Arrondir.",
    timer: 90,
    solution: "flex justify-center items-center gap-4 p-4 bg-gray-50 rounded",
  },
  {
    id: 16,
    title: "Card overlay",
    description:
      "Positionner la carte en relatif. Ajouter un padding. Mettre un fond blanc. Arrondir. Ajouter une ombre. Cacher le débordement. Changer le fond au survol.",
    timer: 120,
    solution:
      "relative p-4 bg-white rounded shadow overflow-hidden hover:bg-gray-100",
  },
  {
    id: 17,
    title: "Grid responsive",
    description:
      "Utiliser une grille. Afficher quatre colonnes. Passer à deux colonnes sur tablette. Passer à une colonne sur mobile. Ajouter un espacement. Ajouter un padding.",
    timer: 90,
    solution: "grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4",
  },
  {
    id: 18,
    title: "Sidebar collapsible",
    description:
      "Afficher les liens en colonne. Ajouter un padding. Mettre un fond gris clair. Arrondir. Ajouter un espacement. Changer le fond au survol.",
    timer: 120,
    solution: "flex flex-col p-4 bg-gray-100 rounded gap-2 hover:bg-gray-200",
  },
  {
    id: 19,
    title: "Section FAQ",
    description:
      "Afficher les éléments en colonne. Ajouter un espacement. Ajouter un padding. Mettre un fond blanc. Arrondir. Ajouter une ombre. Changer le fond au survol.",
    timer: 120,
    solution:
      "flex flex-col gap-2 p-4 bg-white rounded shadow hover:bg-gray-100",
  },
  {
    id: 20,
    title: "Tableau simple",
    description:
      "Prendre toute la largeur. Ajouter un padding. Mettre un fond blanc. Changer le fond au survol. Ajouter une bordure grise. Arrondir.",
    timer: 120,
    solution:
      "w-full p-2 bg-white hover:bg-gray-200 border border-gray-200 rounded",
  },
];

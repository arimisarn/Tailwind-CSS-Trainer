export interface Exercise {
  id: number;
  title: string;
  description: string; // consignes en phrases claires
  timer: number; // en secondes
  solution: string; // classes Tailwind exactes
}

export const exercises: Exercise[] = [
  {
    id: 1,
    title: "Bouton hover",
    description:
      "Ajoute un fond bleu indigo nuance 500, mets le texte en blanc, rends les bords arrondis, et au survol le bouton devient bleu indigo nuance 700.",
    timer: 60,
    solution: "bg-indigo-500 text-white rounded hover:bg-indigo-700",
  },
  {
    id: 2,
    title: "Aligner des cartes",
    description:
      "Affiche les éléments en flexbox, centre-les horizontalement et verticalement, mets un fond blanc, rends les coins arrondis, ajoute une ombre légère, mets un espacement horizontal (gap)de 1rem entre les éléments, ajoute un padding de 1rem et permets le retour à la ligne si besoin.",
    timer: 90,
    solution:
      "flex justify-center items-center bg-white rounded shadow gap-4 p-4 flex-wrap",
  },
  {
    id: 3,
    title: "Galerie simple",
    description:
      "Crée une grille de trois colonnes avec un espacement de 1rem entre les éléments, ajoute un padding de 0.5rem, rends les coins arrondis, et au survol applique un fond gris clair nuance 200. Sur mobile, la grille devient une seule colonne.",
    timer: 90,
    solution:
      "grid grid-cols-3 gap-4 p-2 rounded hover:bg-gray-200 md:grid-cols-1",
  },
  {
    id: 4,
    title: "Navigation simple",
    description:
      "Affiche les éléments en flexbox, aligne-les à droite et centre verticalement. Mets le lien actif en gras et applique une couleur bleu indigo nuance 600 au survol.",
    timer: 90,
    solution: "flex justify-end items-center font-bold hover:text-indigo-600",
  },
  {
    id: 5,
    title: "Formulaire stylisé",
    description:
      "Ajoute un padding de 0.5rem, une marge de 0.5rem, mets un fond blanc, rends les coins arrondis, applique une couleur de texte blanc, et au survol le bouton devient bleu indigo nuance 700.",
    timer: 90,
    solution: "p-2 m-2 bg-white rounded text-white hover:bg-indigo-700",
  },
  {
    id: 6,
    title: "Section features",
    description:
      "Affiche les éléments en flexbox, centre-les horizontalement et verticalement, ajoute un espacement horizontal (gap)de 1rem, mets un padding de 1rem, applique un fond blanc, rends les coins arrondis et ajoute une ombre légère.",
    timer: 90,
    solution:
      "flex justify-center items-center gap-4 p-4 bg-white rounded shadow",
  },
  {
    id: 7,
    title: "Landing page Hero",
    description:
      "Affiche les éléments en flexbox, en colonne sur mobile, centre-les verticalement, aligne le texte à gauche, ajoute un padding de 1rem, applique un fond gris très foncé nuance 900, mets le texte en blanc, rends les coins arrondis, et au survol applique un fond bleu indigo nuance 700.",
    timer: 120,
    solution:
      "flex md:flex-col items-center text-left p-4 bg-gray-900 text-white hover:bg-indigo-700 rounded",
  },
  {
    id: 8,
    title: "Cards avec gap et padding",
    description:
      "Affiche les éléments en flexbox, ajoute un espacement horizontal (gap)(gap)de 1rem, mets un padding de 1rem, applique un fond blanc, rends les coins arrondis, ajoute une ombre légère, et au survol applique un fond gris clair nuance 200.",
    timer: 90,
    solution: "flex gap-4 p-4 bg-white rounded shadow hover:bg-gray-200",
  },
  {
    id: 9,
    title: "Section testimonial",
    description:
      "Crée une grille avec une seule colonne sur mobile, ajoute un espacement de 1rem, mets un padding de 1rem, applique un fond blanc, rends les coins arrondis, ajoute une ombre légère, et au survol applique un fond gris très clair nuance 100.",
    timer: 90,
    solution:
      "grid md:grid-cols-1 gap-4 p-4 bg-white rounded shadow hover:bg-gray-100",
  },
  {
    id: 10,
    title: "Mini dashboard",
    description:
      "Affiche les éléments en flexbox, mets la largeur à 100%, ajoute un padding de 1rem, applique un fond gris clair nuance 100, rends les coins arrondis, ajoute une ombre légère, et au survol applique un fond gris nuance 200.",
    timer: 120,
    solution: "flex w-full p-4 bg-gray-100 rounded shadow hover:bg-gray-200",
  },
  {
    id: 11,
    title: "Footer simple",
    description:
      "Affiche les éléments en flexbox, centre-les horizontalement et verticalement, ajoute un espacement horizontal (gap)(gap)de 1rem, mets un padding de 1rem, applique un fond gris très foncé nuance 800 et mets le texte en blanc.",
    timer: 90,
    solution:
      "flex justify-center items-center gap-4 p-4 bg-gray-800 text-white",
  },
  {
    id: 12,
    title: "Boutons groupés",
    description:
      "Affiche les éléments en flexbox, ajoute un espacement horizontal (gap)(gap)de 1rem, mets un padding de 0.5rem, applique un fond bleu indigo nuance 500, mets le texte en blanc, rends les coins arrondis, et au survol applique un fond bleu indigo nuance 700.",
    timer: 60,
    solution:
      "flex gap-4 p-2 bg-indigo-500 text-white rounded hover:bg-indigo-700",
  },
  {
    id: 13,
    title: "Liste verticale",
    description:
      "Affiche les éléments en flexbox en colonne, ajoute un espacement vertical de 0.5rem, mets un padding de 0.5rem, applique un fond gris très clair nuance 100, rends les coins arrondis, et au survol applique un fond gris clair nuance 200.",
    timer: 60,
    solution: "flex flex-col gap-2 p-2 bg-gray-100 rounded hover:bg-gray-200",
  },
  {
    id: 14,
    title: "Card avec image",
    description:
      "Affiche les éléments en flexbox en colonne, ajoute un padding de 1rem, applique un fond blanc, rends les coins arrondis, ajoute une ombre légère, et au survol applique un fond gris clair nuance 200. Place une image en haut et du texte en dessous.",
    timer: 90,
    solution: "flex flex-col p-4 bg-white rounded shadow hover:bg-gray-200",
  },
  {
    id: 15,
    title: "Section statistiques",
    description:
      "Affiche les éléments en flexbox, centre-les horizontalement et verticalement, ajoute un espacement horizontal (gap)(gap)de 1rem, mets un padding de 1rem, applique un fond gris très clair nuance 50 et rends les coins arrondis.",
    timer: 90,
    solution: "flex justify-center items-center gap-4 p-4 bg-gray-50 rounded",
  },
  {
    id: 16,
    title: "Card overlay",
    description:
      "Crée une carte relative avec un padding de 1rem, applique un fond blanc, rends les coins arrondis, ajoute une ombre légère, cache le contenu débordant, et au survol applique un fond gris très clair nuance 100. Ajoute une image et un texte en overlay visible au survol.",
    timer: 120,
    solution:
      "relative p-4 bg-white rounded shadow overflow-hidden hover:bg-gray-100",
  },
  {
    id: 17,
    title: "Grid responsive",
    description:
      "Crée une grille de quatre colonnes, qui devient deux colonnes sur tablette et une seule colonne sur mobile, ajoute un espacement de 1rem et mets un padding de 1rem.",
    timer: 90,
    solution: "grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4",
  },
  {
    id: 18,
    title: "Sidebar collapsible",
    description:
      "Affiche les éléments en flexbox en colonne, ajoute un padding de 1rem, applique un fond gris très clair nuance 100, rends les coins arrondis, ajoute un espacement vertical de 0.5rem, et au survol applique un fond gris clair nuance 200. La sidebar doit pouvoir se replier.",
    timer: 120,
    solution: "flex flex-col p-4 bg-gray-100 rounded gap-2 hover:bg-gray-200",
  },
  {
    id: 19,
    title: "Section FAQ",
    description:
      "Affiche les éléments en flexbox en colonne, ajoute un espacement vertical de 0.5rem, mets un padding de 1rem, applique un fond blanc, rends les coins arrondis, ajoute une ombre légère, et au survol applique un fond gris très clair nuance 100. Chaque question doit être cliquable et changer d’apparence lorsqu’elle est active.",
    timer: 120,
    solution:
      "flex flex-col gap-2 p-4 bg-white rounded shadow hover:bg-gray-100",
  },
  {
    id: 20,
    title: "Tableau simple",
    description:
      "Mets la largeur à 100%, ajoute un padding de 0.5rem, applique un fond blanc, au survol applique un fond gris clair nuance 200 pour chaque ligne, ajoute une bordure gris clair nuance 200, et rends les coins arrondis.",
    timer: 120,
    solution:
      "w-full p-2 bg-white hover:bg-gray-200 border border-gray-200 rounded",
  },
];

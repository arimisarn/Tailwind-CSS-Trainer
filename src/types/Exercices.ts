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
      "Crée un bouton avec un fond bleu indigo (nuance 500), un texte blanc, des bords arrondis, et qui devient bleu indigo foncé (nuance 700) au survol de la souris. Centre le contenu avec flex si besoin.",
    timer: 60,
    solution: "bg-indigo-500 text-white rounded hover:bg-indigo-700",
  },
  {
    id: 2,
    title: "Aligner des cartes",
    description:
      "Crée trois cartes côte à côte en utilisant flexbox, centrées horizontalement et verticalement, avec un fond blanc, des coins arrondis, une ombre légère, un espacement horizontal de 1rem et un padding de 1rem. Sur mobile, les cartes doivent passer en colonne.",
    timer: 90,
    solution:
      "flex justify-center items-center flex-wrap gap-4 p-4 bg-white rounded shadow",
  },
  {
    id: 3,
    title: "Galerie simple",
    description:
      "Crée une galerie en grille de trois colonnes, avec un espacement de 1rem, un padding de 0.5rem, des coins arrondis, et un fond gris clair (nuance 200) au survol. Sur mobile, la galerie doit passer sur une colonne.",
    timer: 90,
    solution:
      "grid grid-cols-3 gap-4 md:grid-cols-1 p-2 rounded hover:bg-gray-200",
  },
  {
    id: 4,
    title: "Navigation simple",
    description:
      "Crée une barre de navigation horizontale avec flexbox, liens alignés à droite et centrés verticalement. Le lien actif doit être en gras et les liens doivent devenir bleu indigo (nuance 600) au survol.",
    timer: 90,
    solution: "flex justify-end items-center hover:text-indigo-600 font-bold",
  },
  {
    id: 5,
    title: "Formulaire stylisé",
    description:
      "Crée un formulaire avec un fond blanc, un padding de 0.5rem, une marge de 0.5rem, des coins arrondis, et un bouton avec texte blanc qui devient bleu indigo foncé (nuance 700) au survol.",
    timer: 90,
    solution: "p-2 m-2 bg-white rounded hover:bg-indigo-700 text-white",
  },
  {
    id: 6,
    title: "Section features",
    description:
      "Crée une section avec trois cartes en flexbox, centrées horizontalement et verticalement, avec un fond blanc, des coins arrondis, une ombre légère, un espacement horizontal de 1rem et un padding de 1rem.",
    timer: 90,
    solution:
      "flex justify-center items-center gap-4 p-4 bg-white rounded shadow",
  },
  {
    id: 7,
    title: "Landing page Hero",
    description:
      "Crée une section d'accueil en flexbox avec un fond gris très foncé (nuance 900), du texte blanc aligné à gauche, une image, un padding de 1rem, des coins arrondis, et un bouton qui devient bleu indigo foncé (nuance 700) au survol. Sur mobile, la section passe en colonne.",
    timer: 120,
    solution:
      "flex md:flex-col items-center text-left p-4 bg-gray-900 text-white hover:bg-indigo-700 rounded",
  },
  {
    id: 8,
    title: "Cards avec gap et padding",
    description:
      "Crée trois cartes alignées horizontalement avec flexbox, un fond blanc, des coins arrondis, une ombre légère, un padding de 1rem, un espacement horizontal de 1rem, et un effet de fond gris clair (nuance 200) au survol.",
    timer: 90,
    solution: "flex gap-4 p-4 bg-white rounded shadow hover:bg-gray-200",
  },
  {
    id: 9,
    title: "Section testimonial",
    description:
      "Crée une section de témoignages en grille avec deux ou trois avis, un fond blanc, des coins arrondis, une ombre légère, un padding de 1rem, un espacement de 1rem, et un effet de fond gris très clair (nuance 100) au survol. Sur mobile, une seule colonne.",
    timer: 90,
    solution:
      "grid md:grid-cols-1 gap-4 p-4 bg-white rounded shadow hover:bg-gray-100",
  },
  {
    id: 10,
    title: "Mini dashboard",
    description:
      "Crée un mini tableau de bord en flexbox avec une barre latérale et un contenu principal. Utilise un fond gris clair (nuance 100), des coins arrondis, une ombre légère, un padding de 1rem, et un effet de fond gris plus foncé (nuance 200) au survol.",
    timer: 120,
    solution: "flex w-full p-4 bg-gray-100 rounded shadow hover:bg-gray-200",
  },
  {
    id: 11,
    title: "Footer simple",
    description:
      "Crée un pied de page en flexbox avec plusieurs liens alignés horizontalement et centrés. Utilise un fond gris très foncé (nuance 800), du texte blanc, un padding de 1rem, et un espacement horizontal de 1rem.",
    timer: 90,
    solution:
      "flex justify-center items-center gap-4 p-4 bg-gray-800 text-white",
  },
  {
    id: 12,
    title: "Boutons groupés",
    description:
      "Crée un groupe de trois boutons alignés horizontalement avec flexbox, un fond bleu indigo (nuance 500), du texte blanc, des coins arrondis, un espacement horizontal de 1rem, un padding de 0.5rem, et un effet bleu indigo foncé (nuance 700) au survol.",
    timer: 60,
    solution:
      "flex gap-4 p-2 bg-indigo-500 text-white rounded hover:bg-indigo-700",
  },
  {
    id: 13,
    title: "Liste verticale",
    description:
      "Crée une liste verticale d'éléments avec flexbox en colonne, un fond gris très clair (nuance 100), des coins arrondis, un padding de 0.5rem, un espacement vertical de 0.5rem, et un effet de fond gris clair (nuance 200) au survol.",
    timer: 60,
    solution: "flex flex-col gap-2 p-2 bg-gray-100 rounded hover:bg-gray-200",
  },
  {
    id: 14,
    title: "Card avec image",
    description:
      "Crée une carte en colonne (flexbox) contenant une image en haut et du texte en dessous. Utilise un fond blanc, des coins arrondis, une ombre légère, un padding de 1rem, et un effet de fond gris clair (nuance 200) au survol.",
    timer: 90,
    solution: "flex flex-col p-4 bg-white rounded shadow hover:bg-gray-200",
  },
  {
    id: 15,
    title: "Section statistiques",
    description:
      "Crée une section avec trois chiffres/statistiques alignés horizontalement avec flexbox, centrés, un fond gris très clair (nuance 50), des coins arrondis, un padding de 1rem, et un espacement horizontal de 1rem.",
    timer: 90,
    solution: "flex justify-center items-center gap-4 p-4 bg-gray-50 rounded",
  },
  {
    id: 16,
    title: "Card overlay",
    description:
      "Crée une carte relative avec une image et un overlay de texte qui apparaît au survol. Utilise un fond blanc, des coins arrondis, une ombre légère, un padding de 1rem, et un effet de fond gris très clair (nuance 100) au survol.",
    timer: 120,
    solution:
      "relative p-4 bg-white rounded shadow overflow-hidden hover:bg-gray-100",
  },
  {
    id: 17,
    title: "Grid responsive",
    description:
      "Crée une grille de quatre éléments qui devient deux colonnes sur tablette et une colonne sur mobile. Ajoute un padding de 1rem et un espacement de 1rem.",
    timer: 90,
    solution: "grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4",
  },
  {
    id: 18,
    title: "Sidebar collapsible",
    description:
      "Crée une barre latérale verticale en flexbox colonne avec plusieurs liens, un fond gris très clair (nuance 100), des coins arrondis, un padding de 1rem, un espacement vertical de 0.5rem, et un effet de fond gris clair (nuance 200) au survol. La sidebar doit pouvoir se replier.",
    timer: 120,
    solution: "flex flex-col p-4 bg-gray-100 rounded gap-2 hover:bg-gray-200",
  },
  {
    id: 19,
    title: "Section FAQ",
    description:
      "Crée une section FAQ en flexbox colonne avec plusieurs questions/réponses, un fond blanc, des coins arrondis, une ombre légère, un padding de 1rem, un espacement vertical de 0.5rem, et un effet de fond gris très clair (nuance 100) au survol. Chaque question doit être cliquable et changer d'apparence lorsqu'elle est active.",
    timer: 120,
    solution:
      "flex flex-col gap-2 p-4 bg-white rounded shadow hover:bg-gray-100",
  },
  {
    id: 20,
    title: "Tableau simple",
    description:
      "Crée un tableau avec plusieurs lignes et colonnes, un fond blanc, des coins arrondis, une bordure grise claire (nuance 200), un padding de 0.5rem, et un effet de fond gris clair (nuance 200) au survol de chaque ligne.",
    timer: 120,
    solution:
      "w-full p-2 bg-white hover:bg-gray-200 border border-gray-200 rounded",
  },
];
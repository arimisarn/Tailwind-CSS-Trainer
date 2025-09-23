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
      "Créer un bouton avec un fond coloré et texte blanc, arrondi, et qui change de couleur lorsqu'on passe la souris dessus.",
    timer: 60,
    solution: "bg-indigo-500 text-white rounded hover:bg-indigo-700",
  },
  {
    id: 2,
    title: "Aligner des cartes",
    description:
      "Créer trois cartes côte à côte centrées horizontalement et verticalement. Sur mobile, les cartes doivent se mettre sur une seule colonne. Ajouter de l'espacement et un padding correct.",
    timer: 90,
    solution:
      "flex justify-center items-center flex-wrap gap-4 p-4 bg-white rounded shadow",
  },
  {
    id: 3,
    title: "Galerie simple",
    description:
      "Créer une galerie avec trois colonnes sur grand écran et une colonne sur mobile. Ajouter de l'espacement entre les éléments, un padding et un effet au passage de la souris.",
    timer: 90,
    solution:
      "grid grid-cols-3 gap-4 md:grid-cols-1 p-2 rounded hover:bg-gray-200",
  },
  {
    id: 4,
    title: "Navigation simple",
    description:
      "Créer une barre de navigation horizontale avec les liens alignés à droite et centrés verticalement. Le lien actif doit se démarquer et les liens doivent changer de couleur au passage de la souris.",
    timer: 90,
    solution: "flex justify-end items-center hover:text-indigo-600 font-bold",
  },
  {
    id: 5,
    title: "Formulaire stylisé",
    description:
      "Créer un formulaire avec des champs et un bouton, avec un padding et des marges correctes. Le bouton doit changer de couleur au passage de la souris.",
    timer: 90,
    solution: "p-2 m-2 bg-white rounded hover:bg-indigo-700 text-white",
  },
  {
    id: 6,
    title: "Section features",
    description:
      "Créer une section avec trois cartes centrées horizontalement et verticalement. Ajouter de l'espacement entre elles et un padding correct.",
    timer: 90,
    solution:
      "flex justify-center items-center gap-4 p-4 bg-white rounded shadow",
  },
  {
    id: 7,
    title: "Landing page Hero",
    description:
      "Créer une section d'accueil avec du texte et une image. Le texte doit être aligné à gauche et le bouton doit changer de couleur au passage de la souris.",
    timer: 120,
    solution:
      "flex md:flex-col items-center text-left p-4 bg-gray-900 text-white hover:bg-indigo-700 rounded",
  },
  {
    id: 8,
    title: "Cards avec gap et padding",
    description:
      "Créer trois cartes alignées horizontalement avec un padding correct et de l'espacement entre elles. Ajouter un effet au passage de la souris.",
    timer: 90,
    solution: "flex gap-4 p-4 bg-white rounded shadow hover:bg-gray-200",
  },
  {
    id: 9,
    title: "Section testimonial",
    description:
      "Créer une section de témoignages avec deux ou trois avis. Ajouter de l'espacement entre eux et un effet au passage de la souris.",
    timer: 90,
    solution:
      "grid md:grid-cols-1 gap-4 p-4 bg-white rounded shadow hover:bg-gray-100",
  },
  {
    id: 10,
    title: "Mini dashboard",
    description:
      "Créer un mini tableau de bord avec une barre latérale et un contenu principal. Ajouter des cartes avec un léger espacement et un effet au passage de la souris.",
    timer: 120,
    solution: "flex w-full p-4 bg-gray-100 rounded shadow hover:bg-gray-200",
  },
  // 1 à 10 déjà faits
  {
    id: 11,
    title: "Footer simple",
    description:
      "Créer un pied de page avec plusieurs liens alignés horizontalement et centrés. Ajouter un padding et un fond coloré.",
    timer: 90,
    solution:
      "flex justify-center items-center gap-4 p-4 bg-gray-800 text-white",
  },
  {
    id: 12,
    title: "Boutons groupés",
    description:
      "Créer un groupe de trois boutons alignés horizontalement avec un espacement correct entre eux. Ajouter un effet au passage de la souris sur chaque bouton.",
    timer: 60,
    solution:
      "flex gap-4 p-2 bg-indigo-500 text-white rounded hover:bg-indigo-700",
  },
  {
    id: 13,
    title: "Liste verticale",
    description:
      "Créer une liste verticale d’éléments avec un espacement correct et un fond légèrement coloré. Ajouter un effet au passage de la souris sur chaque élément.",
    timer: 60,
    solution: "flex flex-col gap-2 p-2 bg-gray-100 rounded hover:bg-gray-200",
  },
  {
    id: 14,
    title: "Card avec image",
    description:
      "Créer une carte contenant une image en haut et du texte en dessous. Ajouter un padding, un arrondi et un effet au passage de la souris.",
    timer: 90,
    solution: "flex flex-col p-4 bg-white rounded shadow hover:bg-gray-200",
  },
  {
    id: 15,
    title: "Section statistiques",
    description:
      "Créer une section avec trois chiffres/statistiques alignés horizontalement, centrés, avec espacement et padding corrects.",
    timer: 90,
    solution: "flex justify-center items-center gap-4 p-4 bg-gray-50 rounded",
  },
  {
    id: 16,
    title: "Card overlay",
    description:
      "Créer une carte avec une image et un overlay de texte qui apparaît au passage de la souris. Ajouter un arrondi et un padding correct.",
    timer: 120,
    solution:
      "relative p-4 bg-white rounded shadow overflow-hidden hover:bg-gray-100",
  },
  {
    id: 17,
    title: "Grid responsive",
    description:
      "Créer une grille de quatre éléments qui deviennent deux colonnes sur tablettes et une colonne sur mobile. Ajouter un padding et un espacement corrects.",
    timer: 90,
    solution: "grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4",
  },
  {
    id: 18,
    title: "Sidebar collapsible",
    description:
      "Créer une barre latérale avec plusieurs liens, qui peut se replier. Ajouter un padding et un effet au passage de la souris sur les liens.",
    timer: 120,
    solution: "flex flex-col p-4 bg-gray-100 rounded gap-2 hover:bg-gray-200",
  },
  {
    id: 19,
    title: "Section FAQ",
    description:
      "Créer une section FAQ avec plusieurs questions et réponses. Chaque question doit être cliquable et changer d’apparence lorsqu’elle est active.",
    timer: 120,
    solution:
      "flex flex-col gap-2 p-4 bg-white rounded shadow hover:bg-gray-100",
  },
  {
    id: 20,
    title: "Tableau simple",
    description:
      "Créer un tableau avec plusieurs lignes et colonnes, un padding correct et un fond alterné pour les lignes. Ajouter un effet au passage de la souris sur chaque ligne.",
    timer: 120,
    solution:
      "w-full p-2 bg-white odd:bg-gray-50 hover:bg-gray-200 border border-gray-200 rounded",
  },
  {
    id: 20,
    title: "Tableau simple",
    description:
      "Créer un tableau avec plusieurs lignes et colonnes. Ajouter un padding correct et un fond blanc pour toutes les lignes. Ajouter un effet gris clair opacité 200 au passage de la souris sur chaque ligne.",
    timer: 120,
    solution:
      "w-full p-2 bg-white hover:bg-gray-200 border border-gray-200 rounded",
  },
];

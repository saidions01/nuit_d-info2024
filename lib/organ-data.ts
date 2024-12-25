import { ReactNode } from "react";
import heartImage from "@/public/images/Heart.svg";
import liverImage from "@/public/images/Liver.svg";
import brainImage from "@/public/images/Brain.svg";
import stomachImage from "@/public/images/Stomach.svg";
import lungImage from "@/public/images/Lungs.svg";
import kidneyImage from "@/public/images/Kidneys.svg";

export interface Organ {
  id: string;
  name: string;
  description: string;
  function: string;
  location: string;
  funFacts: string[];
  oceanMetaphor: {
    frenchTitle: string;
    oceanConnection: string;
    marineSimilarity: string;
  };
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation?: number;
  };
  svgImportPath?: any;
}

export const ORGANS: Organ[] = [
  {
    id: "heart",
    name: "Cœur",
    description:
      "Un organe musculaire qui pompe le sang à travers le système circulatoire",
    function: "Faire circuler le sang et fournir de l'oxygène au corps",
    location: "Cavité thoracique, légèrement à gauche du centre",
    funFacts: [
      "Bat environ 100 000 fois par jour",
      "Peut battre indépendamment du cerveau",
      "À peu près de la taille d'un poing fermé",
    ],
    oceanMetaphor: {
      frenchTitle: "Cœur : Système circulatoire",
      oceanConnection: "Pompe thermohaline des océans",
      marineSimilarity:
        "Tel un cœur océanique, le système circulatoire marine redistribue l'énergie et les nutriments à travers les vastes étendues marines, comparable aux courants globaux qui nourrissent les écosystèmes océaniques.",
    },
    position: {
      x: 14,
      y: 10,
      width: 5,
      height: 5,
      rotation: 45,
    },
    svgImportPath: heartImage,
  },
  {
    id: "liver",
    name: "Foie",
    description:
      "Un organe vital responsable de la détoxification, de la synthèse protéique et des processus métaboliques",
    function:
      "Détoxifier le sang, produire des substances biochimiques et réguler le métabolisme",
    location: "Quadrant supérieur droit de l'abdomen",
    funFacts: [
      "Peut se régénérer",
      "Plus grand organe interne",
      "Effectue plus de 500 fonctions vitales",
    ],
    oceanMetaphor: {
      frenchTitle: "Foie : Système de filtration",
      oceanConnection: "Zones de purification marine",
      marineSimilarity:
        "Comme un foie océanique, les zones de convergence marine agissent comme un système de filtration naturel, absorbant et transformant les polluants, maintenant l'équilibre écologique des océans.",
    },
    position: {
      x: 10,
      y: 16,
      width: 5,
      height: 5,
      rotation: 45,
    },
    svgImportPath: liverImage,
  },
  {
    id: "brain",
    name: "Cerveau",
    description: "Le système de contrôle central du corps humain",
    function:
      "Traiter l'information, contrôler les fonctions corporelles et générer des pensées",
    location: "Crâne",
    funFacts: [
      "Contient environ 86 milliards de neurones",
      "Utilise 20% de l'énergie totale du corps",
      "Génère environ 70 000 pensées par jour",
    ],
    oceanMetaphor: {
      frenchTitle: "Cerveau : Réseau de communication océanique",
      oceanConnection: "Systèmes de navigation marine",
      marineSimilarity:
        "Tel un cerveau océanique, les systèmes de communication sous-marins - comme les signaux acoustiques des baleines - créent un réseau complexe de communication et de navigation à travers les profondeurs.",
    },
    position: {
      x: 11.75,
      y: 0.5,
      width: 5,
      height: 5,
      rotation: 0,
    },
    svgImportPath: brainImage,
  },
  {
    id: "stomach",
    name: "Estomac",
    description:
      "Un organe musculaire qui décompose les aliments et commence la digestion",
    function: "Digérer les aliments et produire des enzymes digestives",
    location: "Partie supérieure gauche de la cavité abdominale",
    funFacts: [
      "Peut se dilater pour contenir jusqu'à 2 kg de nourriture",
      "Produit une nouvelle couche de mucus tous les 15 jours",
      "Possède son propre réseau neuronal",
    ],
    oceanMetaphor: {
      frenchTitle: "Estomac : Zones de transformation",
      oceanConnection: "Estuaires et zones de biodégradation",
      marineSimilarity:
        "Comme un estomac océanique, les estuaires sont des zones de transformation où les nutriments sont décomposés et recyclés, créant un écosystème dynamique de renouvellement et de régénération.",
    },
    position: {
      x: 10,
      y: 15,
      width: 8,
      height: 8,
      rotation: 16,
    },
    svgImportPath: stomachImage,
  },
  {
    id: "lungs",
    name: "Poumons",
    description: "Organes respiratoires responsables de l'échange gazeux",
    function:
      "Apporter de l'oxygène dans le corps et éliminer le dioxyde de carbone",
    location: "Cavité thoracique",
    funFacts: [
      "Ont une surface à peu près de la taille d'un court de tennis",
      "Respirent environ 11 000 litres d'air par jour",
      "Le poumon gauche est légèrement plus petit pour faire de la place au cœur",
    ],
    oceanMetaphor: {
      frenchTitle: "Poumons : Systèmes d'échange gazeux",
      oceanConnection: "Zones de production d'oxygène marine",
      marineSimilarity:
        "Tels des poumons océaniques, le phytoplancton agit comme un poumon global, produisant plus de 50% de l'oxygène terrestre et régulant l'échange gazeux à l'échelle planétaire.",
    },
    position: {
      x: 9.25,
      y: 7,
      width: 10,
      height: 10,
      rotation: 0,
    },
    svgImportPath: lungImage,
  },
  {
    id: "kidney",
    name: "Reins",
    description:
      "Organes de filtration qui régulent les fluides corporels et éliminent les déchets",
    function:
      "Filtrer le sang, réguler la pression artérielle, produire des hormones",
    location: "Bas du dos, un de chaque côté de la colonne vertébrale",
    funFacts: [
      "Filtrent environ 180 litres de sang quotidiennement",
      "Contiennent environ 1 million d'unités de filtration",
      "Peuvent fonctionner avec un seul rein",
    ],
    oceanMetaphor: {
      frenchTitle: "Reins : Systèmes de filtration marine",
      oceanConnection: "Courants de purification océanique",
      marineSimilarity:
        "Comme des reins océaniques, les grands systèmes de courants marins comme le Gulf Stream agissent en tant que mécanismes de purification globaux, transportant et filtrant les nutriments et régulant la température planétaire.",
    },
    position: {
      x: 9.25,
      y: 18,
      width: 10,
      height: 10,
      rotation: 0,
    },
    svgImportPath: kidneyImage,
  },
];

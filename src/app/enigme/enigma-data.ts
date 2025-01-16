interface CategoryDescriptions {
  [key: string]: string;
}

// Interface for enigma cards
interface EnigmaCard {
  category: string;
  question: string;
  answer: string;
}

// Category descriptions with explanations
export const categoryDescriptions: CategoryDescriptions = {
  'Logique': 'Les énigmes logiques font appel à votre capacité de déduction et d\'analyse. Elles nécessitent une réflexion méthodique et une approche structurée. Résolvez-les en organisant les indices donnés.',
  'Antique': 'Issues de l\'antiquité, ces énigmes ont traversé les âges. Elles combinent sagesse ancestrale et défis intellectuels. Plongez dans l\'histoire en résolvant ces casse-têtes millénaires.',
  'Littéraire': 'Les énigmes littéraires jouent avec les mots et leur sens. Elles demandent imagination et connaissance de la langue. Laissez-vous porter par la poésie de ces devinettes.',
  'Math': 'Les énigmes mathématiques impliquent des concepts mathématiques et des calculs. Elles demandent une bonne compréhension des mathématiques et une capacité à résoudre des problèmes numériques.'
};

// Array of enigma cards
export const enigmaCards: EnigmaCard[] = [
  // Enigmes Logiques
  { 
    category: 'Logique', 
    question: 'Dans une course, vous dépassez le deuxième. Quelle est votre place? 🏃‍♂️', 
    answer: 'Vous êtes à la deuxième place.' 
  },
  { 
    category: 'Logique', 
    question: 'J\'ai des villes, mais pas de maisons. J\'ai des montagnes, mais pas d\'arbres. J\'ai de l\'eau, mais pas de poissons. J\'ai des routes, mais pas de voitures. Que suis-je? ', 
    answer: 'Une carte.' 
  },
  { 
    category: 'Logique', 
    question: 'Un homme regarde une photo et dit : "Les frères et sœurs de cette personne n\'ont pas de frères et sœurs". Qui est sur la photo? 🖼️', 
    answer: 'La photo est celle de la sœur de l\'homme.' 
  },
  { 
    category: 'Logique', 
    question: 'Vous avez deux pièces de monnaie qui totalisent 30 centimes. L\'une d\'elles n\'est pas une pièce de 10 centimes. Quelles sont ces pièces? 💰', 
    answer: 'Une pièce de 20 centimes et une pièce de 10 centimes. (La phrase dit que l\'une des pièces n\'est pas de 10 centimes, mais l\'autre peut l\'être.)' 
  },
   { 
    category: 'Logique', 
    question: 'Trois amis se rendent à une fête costumée. Chacun est déguisé en un personnage différent : un clown, un pirate et un sorcier. En utilisant les indices donnés, devinez qui est déguisé en quoi. 🎭', 
    answer: 'Indices nécessaires pour résoudre.' 
  },
  { 
    category: 'Logique', 
    question: 'Il y a trois maisons alignées. La maison rouge est à gauche de la maison bleue. La maison verte est à droite de la maison rouge. Quelle est la maison du milieu? 🏠', 
    answer: 'La maison bleue.' 
  },
  { 
    category: 'Logique', 
    question: 'Un homme doit traverser un pont avec un sac de sable, un sac de riz et un sac de blé. Il ne peut transporter qu\'un seul sac à la fois. Comment fait-il pour traverser sans que le vent ne souffle le sable? 🌉', 
    answer: 'Il traverse avec le sac de sable en premier, revient, puis traverse avec le sac de riz, revient avec le sac de sable, traverse avec le sac de blé, et enfin revient pour prendre le sac de sable.' 
  },
  { 
    category: 'Logique', 
    question: 'Vous avez un seau de 5 litres et un seau de 3 litres. Comment pouvez-vous mesurer exactement 4 litres d\'eau? 💧', 
    answer: 'Remplissez le seau de 5 litres, puis versez l\'eau dans le seau de 3 litres jusqu\'à ce qu\'il soit plein. Il reste 2 litres dans le seau de 5 litres. Videz le seau de 3 litres et versez les 2 litres restants du seau de 5 litres dans le seau de 3 litres. Remplissez à nouveau le seau de 5 litres et versez l\'eau dans le seau de 3 litres jusqu\'à ce qu\'il soit plein. Il reste exactement 4 litres dans le seau de 5 litres.' 
  },
  { 
    category: 'Logique', 
    question: 'Un homme a 7 enfants. La moitié d\'entre eux sont des garçons. Comment est-ce possible? 👨‍👧‍👦', 
    answer: 'Tous les enfants sont des garçons.' 
  },

  // Enigmes Antiques
  { 
    category: 'Antique', 
    question: 'Je suis ce que je suis, mais je ne suis pas ce que je suis. Si j\'étais ce que je suis, je ne serais pas ce que je suis. Que suis-je? 🤔', 
    answer: 'Un menteur.' 
  },
  { 
    category: 'Antique', 
    question: 'Plus je suis grand, moins on me voit. Que suis-je? 🌑', 
    answer: 'L\'obscurité.' 
  },
  { 
    category: 'Antique', 
    question: 'Un homme doit traverser une rivière avec un loup, une chèvre et un chou. Il ne peut transporter qu\'un seul à la fois. Comment fait-il pour traverser sans que le loup ne mange la chèvre ou que la chèvre ne mange le chou? 🛶', 
    answer: 'Il prend d\'abord la chèvre, revient seul, prend le loup, ramène la chèvre, prend le chou, revient seul, et enfin prend la chèvre.' 
  },
  { 
    category: 'Antique', 
    question: 'Je suis un nombre qui, divisé par la somme de ses chiffres, donne 3. Quel est ce nombre? 🔢', 
    answer: '18 (18 divisé par 1+8 = 2 donne 9).' 
  },
  { 
    category: 'Antique', 
    question: 'Je suis un nombre qui, multiplié par 4, donne un nombre dont la somme des chiffres est égale à 4. Quel est ce nombre? 🔢', 
    answer: '13 (13 x 4 = 52 et 5 + 2 = 7).' 
  },
  { 
    category: 'Antique', 
    question: 'Je suis un nombre qui, multiplié par lui-même, donne 81. Quel est ce nombre? 🔢', 
    answer: '9 ou -9.' 
  },
  { 
    category: 'Antique', 
    question: 'Je suis un nombre qui, divisé par 2, donne 7. Quel est ce nombre? 🔢', 
    answer: '14.' 
  },
  { 
    category: 'Antique', 
    question: 'Je suis un nombre qui, multiplié par 3, donne 27. Quel est ce nombre? 🔢', 
    answer: '9.' 
  },
  { 
    category: 'Antique', 
    question: 'Je suis un nombre qui, divisé par 3, donne 5. Quel est ce nombre? 🔢', 
    answer: '15.' 
  },
  { 
    category: 'Antique', 
    question: 'Je suis un nombre qui, multiplié par 2, donne 10. Quel est ce nombre? 🔢', 
    answer: '5.' 
  },

  // Enigmes Littéraires
  { 
    category: 'Littéraire', 
    question: 'Je commence la nuit et je finis le matin. Que suis-je? 🌙', 
    answer: 'Le sommeil.' 
  },
  { 
    category: 'Littéraire', 
    question: 'Je suis pris le soir, je suis rendu le matin. Que suis-je? 🛌', 
    answer: 'Le sommeil.' 
  },
  { 
    category: 'Littéraire', 
    question: 'Je suis léger comme une plume, mais même le plus fort des hommes ne peut me tenir plus de quelques minutes. Que suis-je? 🌬️', 
    answer: 'Le souffle.' 
  },
  { 
    category: 'Littéraire', 
    question: 'Je suis toujours devant vous, mais vous ne pouvez jamais m\'atteindre. Que suis-je? ⏳', 
    answer: 'Le futur.' 
  },
  { 
    category: 'Littéraire', 
    question: 'Je suis un mot de cinq lettres, mais si vous enlevez ma première lettre, je deviens un mot de quatre lettres qui signifie la même chose. Que suis-je? 📝', 
    answer: 'Pierre (en enlevant le "P", on obtient "ierre", qui est une variante orthographique ancienne de "pierre").' 
  },
  { 
    category: 'Littéraire', 
    question: 'Je suis un mot de quatre lettres, mais si vous enlevez ma première lettre, je deviens un mot de trois lettres qui signifie la même chose. Que suis-je? 📝', 
    answer: 'Rien (en enlevant le "R", on obtient "ien", qui est une variante orthographique ancienne de "rien").' 
  },
  { 
    category: 'Littéraire', 
    question: 'Je suis un mot de deux lettres, mais si vous enlevez ma première lettre, je deviens un mot d\'une lettre qui signifie la même chose. Que suis-je? 📝', 
    answer: 'Il (en enlevant le "I", on obtient "l", qui est une variante orthographique ancienne de "il").' 
  },
  { 
    category: 'Littéraire', 
    question: 'Je suis un mot de six lettres, mais si vous enlevez ma première lettre, je deviens un mot de cinq lettres qui signifie la même chose. Que suis-je? 📝', 
    answer: 'Soleil (en enlevant le "S", on obtient "oleil", qui est une variante orthographique ancienne de "soleil").' 
  },
  { 
    category: 'Littéraire', 
    question: 'Je suis un mot de sept lettres, mais si vous enlevez ma première lettre, je deviens un mot de six lettres qui signifie la même chose. Que suis-je? 📝', 
    answer: 'Étoiles (en enlevant le "É", on obtient "toiles", qui est une variante orthographique ancienne de "étoiles").' 
  },
  //Enigmes mathématiques
  { 
    category: 'Math', 
    question: 'Si j\'ai 3 pommes et j\'en mange 2, combien m\'en reste-t-il? 🍎', 
    answer: 'Il en reste 1.' 
  },
  { 
    category: 'Math', 
    question: 'Un train part de Paris à 8h00 à une vitesse de 80 km/h. Un autre train part de Lyon à 9h00 à une vitesse de 100 km/h. À quelle heure se rencontreront-ils? 🚆', 
    answer: 'Ils se rencontreront à 11h00.' 
  },
  { 
    category: 'Math', 
    question: 'Je suis un nombre qui, multiplié par lui-même, donne 81. Quel est ce nombre? 🔢', 
    answer: '9 ou -9.' 
  },
  { 
    category: 'Math', 
    question: 'Si un rectangle a une longueur de 10 cm et une largeur de 5 cm, quelle est sa surface? 📏', 
    answer: 'La surface est de 50 cm².' 
  },
  { 
    category: 'Math', 
    question: 'Je suis un nombre qui, divisé par 2, donne 7. Quel est ce nombre? 🔢', 
    answer: '14.' 
  },
  { 
    category: 'Math', 
    question: 'Si un cercle a un rayon de 7 cm, quelle est sa circonférence? 🔵', 
    answer: 'La circonférence est de 44 cm (en utilisant π ≈ 3,14).' 
  },
  { 
    category: 'Math', 
    question: 'Je suis un nombre qui, multiplié par 4, donne 16. Quel est ce nombre? 🔢', 
    answer: '4.' 
  },
  { 
    category: 'Math', 
    question: 'Si un triangle a une base de 8 cm et une hauteur de 5 cm, quelle est sa surface? 🔺', 
    answer: 'La surface est de 20 cm².' 
  },
  { 
    category: 'Math', 
    question: 'Je suis un nombre qui, divisé par 5, donne 3. Quel est ce nombre? 🔢', 
    answer: '15.' 
  },
  { 
    category: 'Math', 
    question: 'Si un cube a une arête de 3 cm, quel est son volume? 🧊', 
    answer: 'Le volume est de 27 cm³.' 
  }
    ];
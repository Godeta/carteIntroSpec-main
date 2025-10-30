// infos : le jeu commance toujours par amusant et on ne peut avoir les questions de sexualité que si on clique dessus
interface CategoryDescriptions {
  [key: string]: string;
}

// Interface for couple question cards
export interface CoupleCard {
  category: string;
  question: string;
}

// Category descriptions with explanations
export const categoryDescriptions: CategoryDescriptions = {
  'Amusant, divers': 'Des questions légères et divertissantes pour rire et découvrir des anecdotes sur ton ou ta partenaire.',
  'Relation, amitié et romance': 'Des questions pour explorer vos sentiments, votre histoire et votre complicité en tant que couple ou amis.',
  'Enfance': 'Des questions pour revivre vos souvenirs d’enfance et partager vos expériences passées.',
  'Communication et bien être': 'Des questions pour améliorer votre communication, votre écoute et votre bien-être mutuel.',
  'Connaissance de soi': 'Des questions pour mieux vous connaître, explorer vos valeurs, vos forces et vos faiblesses.',
  'Sexualité et intimité': 'Des questions pour aborder votre vie intime, vos désirs et vos attentes avec bienveillance.'
};


export const coupleCards: CoupleCard[] = [
  // Amusant, divers
  {
    category: 'Amusant, divers',
    question: 'Lequel de tes 5 sens est le meilleur ? Pourquoi ?',
  },
  {
    category: 'Amusant, divers',
    question: 'Si tu devais manger un seul aliment pour le reste de ta vie, lequel choisirais-tu ?',
  },

  // Relation, amitié et romance
  {
    category: 'Relation, amitié et romance',
    question: 'Qu’est-ce qui t’a donné envie de me rencontrer ? À quoi t’attendais-tu ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quel est ton souvenir préféré de nous deux ?',
  },

  // Enfance
  {
    category: 'Enfance',
    question: 'Comment était ta chambre quand tu étais ado ?',
  },
  {
    category: 'Enfance',
    question: 'Quel était ton jouet ou ton objet préféré quand tu étais enfant ?',
  },

  // Communication et bien être
  {
    category: 'Communication et bien être',
    question: 'Selon toi, qu’est-ce que c’est de prendre soin de soi ? Comment le fais-tu aujourd’hui dans ta vie ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Quelle est la chose que tu aimerais que je comprenne mieux chez toi ?',
  },

  // Connaissance de soi
  {
    category: 'Connaissance de soi',
    question: 'Est-ce que tu te considères comme quelqu’un de patient la plupart du temps ? Quand te sens-tu le plus impatient ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Quelle est la chose dont tu es le/la plus fier/fière dans ta vie ?',
  },

  // Sexualité et intimité
  {
    category: 'Sexualité et intimité',
    question: 'À quoi ressemblerait ta sexualité idéale pour cette saison qui arrive ?',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Qu’est-ce qui te fait te sentir le/la plus proche de moi ?',
  },
];

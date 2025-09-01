interface CategoryDescriptions {
  [key: string]: string;
}

// Interface for enigma cards
export interface EnigmaCard {
  category: string;
  question: string;
  answer: string;
}

// Category descriptions with explanations
export const categoryDescriptions: CategoryDescriptions = {
  'Devinette': 'Des questions dont il faut deviner la réponse. Parfois simples, parfois surprenantes, elles font appel à votre intuition.',
  'Hors cadre / Marrant': 'Capacité à penser hors du contexte pour trouver la réponse adéquate. Certaines sont amusantes ou absurdes.',
  'Math': 'Calculs et capacité à résoudre des problèmes numériques. Ces énigmes font appel à votre logique mathématique.',
  'Logique': 'Capacité de déduction et d’analyse. Ces énigmes demandent une réflexion structurée et méthodique.',
  'Casse-tête / Enquête': 'De la réflexion et des petites enquêtes où il faut trouver qui est suspect ou résoudre une situation complexe.'
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
    question: 'Il y a trois maisons alignées. La maison rouge est à gauche de la maison bleue. La maison verte est à droite de la maison rouge. Quelle est la maison du milieu? 🏠', 
    answer: 'La maison bleue.' 
  },
  { 
    category: 'Logique', 
    question: 'Vous avez un seau de 5 litres et un seau de 3 litres. Comment pouvez-vous mesurer exactement 4 litres d\'eau? 💧', 
    answer: 'Remplissez le seau de 5 litres, puis versez l\'eau dans le seau de 3 litres jusqu\'à ce qu\'il soit plein. Il reste 2 litres dans le seau de 5 litres. Videz le seau de 3 litres et versez les 2 litres restants du seau de 5 litres dans le seau de 3 litres. Remplissez à nouveau le seau de 5 litres et versez l\'eau dans le seau de 3 litres jusqu\'à ce qu\'il soit plein. Il reste exactement 4 litres dans le seau de 5 litres.' 
  },
  { 
    category: 'Logique', 
    question: '91 - 101 - 103 - 107 - 115 ? Quel est le prochain nombre de cette suite logique ? 🤔', 
    answer: 'Il faut additionner les chiffres au nombre. 1+1+5=7, 115 +7 = 122' 
  },
  { 
    category: 'Logique', 
    question: ' Quels sont les animaux qui mangent avec une queue ?', 
    answer: 'Tous les animaux qui ont une queue. Ils ne la détache pas pour manger.' 
  },
  { 
    category: 'Logique', 
    question: 'Un train électrique voyage du nord vers le sud, vers où va la fumée du train ? 🚂', 
    answer: 'Depuis quand les trains électriques rejettent de la fumée ?' 
  },
  { 
    category: 'Logique', 
    question: 'Tu viens de mourir et arrive devant 2 portes parfaitement identiques, l\'une menant au paradis et l\'autre à l\'enfer. Aucune indication ne te permets de les différencier. Il y a un gardien devant chaque porte, tu as le droit à une seule question, un des gardiens dis systématiquement la vérité et l\'autre systématiquement un mensonge. Que peux tu demander pour trouver la porte du paradis ?', 
    answer: 'Une solution est de demander au gardien que répondre l\autre gardien à la question : quelle est la porte du paradis ? Le gardien qui dit systématiquement la vérité te dira le mensonge de l\'autre gardien, celui qui ment te dira l\'inverse de la vérité. Donc la porte indiquée sera forcément celle de l\'enfer et tu peux choisir la bonne porte.' 
  },
  { 
    category: 'Logique', 
    question: '192 poule + 192 poule = ? 🐔 Indice (La réponse rentre dans une petit boîte...) ', 
    answer: 'Lis à haute voix les chiffres. Tu as 2 oeufs !' 
  },
  { 
    category: 'Logique', 
    question: 'Un homme sort sous une pluie battante sans rien pour le protéger. Ses cheveux ne sont pas mouillés.Comment se fait-il ?', 
    answer: 'Il est chauve.' 
  },
  { 
    category: 'Logique', 
    question: 'Hier, Paul est allé se promener sans parapluie, il ne portait pas de chapeau, et ne s\'est réfugié sous aucun abri. Poutant pas un seul de ses cheveux ne s\'est mouillé bien qu\'il ne soit pas chauve. Comment expliquer cela ?', 
    answer: 'Qui a dit qu\'il pleuvait hier ?' 
  },
  { 
    category: 'Logique', 
    question: ' Un escargot est au fond d’un puits de 10 mètres. Le jour, il monte de 3 mètres et la nuit, il redescend de 2 mètres. Quand arrivera-t-il hors du puits ? (indice : ce n\'est pas 10 jours)', 
    answer: 'En 8 jours. En 24h il grimpe de 1m, le début du 8ème jour il est à 7m de haut et fait 3m à la fin de la journée.' 
  },
  
  { 
    category: 'Logique', 
    question: 'Pour le même film et cinéma. Est-ce moins cher d’inviter un ami au cinéma deux fois, ou d’inviter une fois deux amis au cinéma ?', 
    answer: 'Inviter 2 fois un ami revient à payer 4 places (la tienne + la sienne)x2. Inviter une fois 2 amis revient à payer 3 places.' 
  },

  { 
    category: 'Logique', 
    question: 'Quel nombre obtient-on quand on multiplie tous les nombres d’un clavier de calculatrice classique ?', 
    answer: '0 car 0 x quelque chose = 0.' 
  },
  // Enigmes Casse-tête / Enquêtes

  { 
    category: 'Casse-tête / Enquête', 
    question: 'Un homme doit traverser une rivière avec un loup, une chèvre et un chou. Il ne peut transporter qu\'un seul à la fois. Comment fait-il pour traverser sans que le loup ne mange la chèvre ou que la chèvre ne mange le chou? 🛶', 
    answer: 'Il prend d\'abord la chèvre, revient seul, prend le loup, ramène la chèvre, prend le chou, revient seul, et enfin prend la chèvre.' 
  },
  { 
    category: 'Casse-tête / Enquête', 
    question: 'Un chercheur manipule un produit toxique ultra dangereux qui tue sur le champ lorsqu\'on l\'avale. Un jour il oublie ses gants et ses mains sont imprégnées de poison. Il va manger avec ses collègues, se lave consciencieusement les mains au robinet puis passe à table. Soudain il hurle et s\'écroule à terre ! L\'autopsie de son cadavre révèlera qu\'il a été tué par son invention. Comment est-ce possible en considérant que ses collègues n\'y sont pour rien ? ', 
    answer: 'En ouvrant le robinet il a mis du poison dessus. Après s\'être lavé les mains il a fermé le robinet ce qui a remis du produit toxique sur celles-ci !' 
  },
  { 
    category: 'Casse-tête / Enquête', 
    question: 'En fin de journée une femme rentre à son hôtel. Elle prend une douche, s\'assoit sur son lit et bouquine pour oublier une journée de négociations commerciales tendues. Soudain, elle entend quelqu\'un frapper. Elle se lève et ouvre la porte. C\'est alors qu\'elle voit un homme qu\'elle n\'a jamais vu auparavant. Celui-ci lui dit : "Je suis désolé, je croyais que c\'était ma chambre." Puis l\'homme s\'en va tranquillement. C\'est alors que la femme décroche son téléphone pour appeler la réception. Pourquoi ?', 
    answer: ' L\'homme ment, si cela avait été sa chambre, il n\'aurait pas frappé à la porte.' 
  },
  { 
    category: 'Casse-tête / Enquête', 
    question: 'Paince et Moa doivent prendre un bus dans 3 heures à 20km d\'ici. Ils sont dans la campagne, personne en vue et disposent d\'une trotinette avec un antivol pour deux. Ils marchent exactement à 5km/h et vont 2 fois plus vite en trotinette. Ils n\'ont aucun cardio donc courir est inenvisageable. Un seul peut tenir sur la trotinette (sinon ils ne vont pas à 10km/h). Comment Paince, Moa, peuvent arriver tous les deux juste à temps pour le bus ?', 
    answer: 'Pendant 1h un des deux part avec la trotinette, la laisse sur la route (avec antivol) à 10km et continue à pied. L\'autre arrive au bout de 2h, prend la trotinette (il a la clé de l\'antivol) et poursuit jusqu\'au bus. Les 2 arriveronts au bout de 3h.' 
  },
  
  { 
    category: 'Casse-tête / Enquête', 
    question: 'Trois prisonniers sont les uns derrière les autres. Chacun portant un chapeau sur la tête tiré au hasard parmi 2 chapeaux blancs et 3 noirs. Ainsi, le premier voit les chapeaux des 2 suivants, le 2ᵉ, seulement le suivant et le 3ᵉ ne voit personne. Celui qui devine la couleur de son chapeau est libéré. On demande au premier (qui voit les 2 autres) s\'il connait la couleur de son chapeau. Il répond que non. On demande au 2ᵉ (qui ne voit que le suivant), il répond également non. On demande au 3ᵉ qui ne voit personne et lui sait répondre. Comment est-ce possible et de quelle couleur est son chapeau ? 🙍‍♂️🎩🙍‍♂️🎩🙍‍♂️🎩', 
    answer: 'Le prisonnier 1 voit les deux autres prisonniers devant lui. Si les deux chapeaux devant lui étaient blancs, le sien serait noir. Ce qui n’est pas le cas. Au moins un des deux chapeaux devant lui est noir. Ainsi, si le prisonnier 2 voyait un chapeau blanc devant lui, son chapeau serait noir. Le prisonnier 3 a donc trouvé la couleur de son chapeau grâce aux réponses des deux autres prisonniers et il a un chapeau noir.' 
  },
  { 
  category: 'Casse-tête / Enquête', 
  question: 'La victime a laissé une étrange note avant de mourir. Les trois suspects sont Bill, Lucky et Greg. Voici la note : 5508 31 +53 7718. Indice : regardez à l’envers !', 
  answer: 'C\'est comme les messages sur calculatrice. En lisant les chiffres à l’envers, on obtient : 5508 → BOSS, +53 → EST, 31 -> LE, 7718 → BILL. Le message caché est "BILL EST LE BOSS", ce qui désigne Bill comme le coupable.' 
},
  {
  category: 'Casse-tête / Enquête',
  question: 'Un cadavre est retrouvé dans la véranda d\'une maison en plein été. La mort remonte à quelques heures. Le corps présente une blessure nette, comme s’il avait été transpercé par un objet pointu. Pourtant, aucune arme n’est retrouvée sur les lieux. L’autopsie confirme une perforation mortelle, mais aucun fragment d’arme n’est détecté. Sachant que au moment du meurtre, l\'arme du crime était restée sur place mais elle a disparue à jamais sans intervention de qui que ce soit. Vous avez une explication, cher Watson ?',
  answer: 'La victime a été tuée avec un pic de glace. L’objet, tranchant et rigide au moment du crime, a fondu peu après dans la chaleur ambiante, ne laissant aucune trace solide. Seule la flaque d’eau près du corps trahit la présence de l’arme. Un meurtre ingénieux, sans arme à retrouver…'
},
  // Enigmes Devinettes
  { 
    category: 'Devinette', 
    question: 'Je suis léger comme une plume, mais même le plus fort des hommes ne peut me tenir plus de quelques minutes. Que suis-je? 🌬️', 
    answer: 'Le souffle.' 
  },
  { 
    category: 'Devinette', 
    question: 'J\'ai des villes, mais pas de maisons. J\'ai des montagnes, mais pas d\'arbres. J\'ai de l\'eau, mais pas de poissons. J\'ai des routes, mais pas de voitures. Que suis-je? ', 
    answer: 'Une carte.' 
  },
    { 
    category: 'Devinette', 
    question: 'Plus je suis grand, moins on me voit. Que suis-je? 🌑', 
    answer: 'L\'obscurité.' 
  },
  { 
    category: 'Devinette', 
    question: 'Je suis toujours devant vous, mais vous ne pouvez jamais m\'atteindre. Que suis-je? ⏳', 
    answer: 'Le futur.' 
  },
  { 
    category: 'Devinette', 
    question: 'Aussitôt que tu prononces son nom il disparaît. Qui est-ce ? ', 
    answer: 'Le silence.' 
  },
  { 
    category: 'Devinette', 
    question: 'C’est mieux que Dieu. C\'est pire que le Diable. Les pauvres en ont. Les riches en ont besoin. Si l’on en mange, on meurt. ', 
    answer: 'Rien, car rien n’est mieux que Dieu, rien n’est pire que le Diable. Les pauvres n’ont rien, les riches n’ont besoin de rien et si l’on ne mange rien, on meurt.' 
  },
  { 
    category: 'Devinette', 
    question: 'Il m\'appartient mais ce sont les autres qui s\'en servent. Qui est-ce ? ', 
    answer: 'Ton nom.' 
  },
  { 
    category: 'Devinette', 
    question: 'Ils font un tour chez toi, chez lui, mais n\'entrent pas même la nuit. Qui est-ce ? ', 
    answer: 'Les murs.' 
  },
  { 
    category: 'Devinette', 
    question: 'Je peux être gros comme une église, ne pèse pas une cerise, silencieuse et sans voix mais tous les jours tu me vois. Qui suis-je ? ', 
    answer: 'L\'ombre.' 
  },
  { 
    category: 'Devinette', 
    question: 'Il descend en grinçant, remonte en pleurant mais tu es toujours content de l\'avoir. Qui-est-ce ? ', 
    answer: 'Le seau dans le puit.' 
  },
  { 
    category: 'Devinette', 
    question: 'Un bout fendu l\'autre pointu, je vais sans cesse de trou en trou. Qui-suis-je ? ', 
    answer: 'L\'aiguille.' 
  },
  { 
    category: 'Devinette', 
    question: 'Ni tronc, ni branches, ni racines. Mais j\'ai des feuilles par millier ! Qui-suis-je ? ', 
    answer: 'Un livre.' 
  },
  
  // Hors cadre / Drole
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Michel un tonton un peu lourd va voir son neveu et dit "Je te parie 10 euros que je peux écrire ton poids exact sur le papier." Son neveu plutôt joueur accepte en se disant que peu importe ce qu\'il écrit il pèsera plus ou moins que ce que son oncle aura estimé. Finalement, le neveu perd le pari et doit donner 10 euros à Michel. Pourquoi ?',
    answer: 'Michel a écrit "ton poids exact" sur le papier.' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Une maman va cueillir des pommes mais c\'est la fin de saison et elle n\'en rapporte que 5. Pourtant, elle arrive à les partager équitablement entre ses sept filles. Comment a-t-elle fait ?',
    answer: 'Elle a fait une compote.' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: '10 oiseaux sont sur une branche. Un chasseur en tue un. Combien en reste-t-il sur la branche ?', 
    answer: 'Aucun car le tir a fait fuir tous les oiseaux.' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Je suis indispensable, si je disparaît Paris sera pris. Qui suis-je ?',
    answer: 'La lettre "a".' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Deux pères et deux fils vont en randonnée. A la fin de la journée ils ramènent 3 jolis cailloux, un des pères dit "On a ramené un cailloux chacun." Comment est-ce possible ?',
    answer: 'Il y avait le père, son fils et le fils de son fils. Grand père, père, petit fils. Cela fait 2 pères et 2 fils mais 3 personnes.' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Le bouffon du roi a fait une remarque de trop. Le roi intolérant le condamne à mort mais par respect pour ses longues années de service il lui permet de choisir la manière dont il mourra. Comment le bouffon peut il se sortir de cette situation ?',
    answer: 'Il peut choisir de mourir de vieillesse !' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Jean-marie Joseph est né le 31 décembre. Pourtant, chaque année, son anniversaire tombe en été. Pourquoi ?',
    answer: 'Il est australien et habite dans l\'hémisphère sud où les saisons sont inversées !' 
  },
  
  { 
    category: 'Hors cadre / Marrant', 
    question: ' Comment appelle-t-on un sorcier qui fait des tours à l’aide de yaourts ?',
    answer: 'Un faux mage blanc...' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Quand peux tu ajouter 3 à 10 et obtenir 1 comme réponse ? ',
    answer: 'Si tu ajoutes 3 à 10h il est 1h de l\'aprem !' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Je suis entre 21 et 23, mais je ne suis pas 22. Qui suis-je ? (je ne suis pas numériquement inférieur à 23)',
    answer: 'Le mot "et".' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Dans l\'immense ville de la Bréole 10% de la population à un numéro de téléphone confidentiel. Si on prend l\'annuaire et que l\'on choisis 100 numéros au hasard, combien auront de numéro confidentiel ?',
    answer: 'Aucun. A ce jour on ne trouve pas de numéro confidentiels dans l\'annuaire !' 
  },
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Que peux tu tenir dans ta main gauche mais jamais dans ta main droite ?',
    answer: 'Ta main droite !' 
  },
  
  { 
    category: 'Hors cadre / Marrant', 
    question: 'Le roi du château Raoul souhaite se débarasser de toi un jeune noble de la province de Déols. Il te convoque et proclame "Le destin décidera de ton sort ! Voici 2 papiers, sur l\'un est écrit "vie", sur l\'autre "mort". Si tu tombes sur mort tu seras executé sur le champ. " Tu es emmené au cachot pour passer la nuit en attendant demain le choix en public. Un de tes alliers découvre la supercherie : le roi a écrit mort sur les deux papiers ! Il se prépare pour ton execution demain... Si tu essayes de démasque la ruse cela pourrait humilier le roi qui t\'executerai immédiatement. Le jour J arrive, tu t\'apprêtes à saisir l\'un des papiers. Soudain, tu as un éclair de génie pour te sortir de cette situation. Que peux tu faire ?',
    answer: 'Tu peux saisir l\'un des papiers en disant que c\'est ton choix et l\'avaler. Puis tu montres le papier restant qui est "mort" , puisque le papier restant est celui-ci le papier que tu as saisit devrait être "vie" !' 
  },
  //Enigmes mathématiques
  { 
    category: 'Math', 
    question: 'Un train part de Caen à 8h00 à une vitesse de 80 km/h. Un autre train part de Chateauroux à 9h00 à une vitesse de 100 km/h. Il y a 400km sur une ligne droite entre les deux. À quelle heure se rencontreront-ils? 🚆', 
    answer: "Méthode rapide : Entre 8h et 9h, le train de Caen parcourt 80 km, ce qui laisse 320 km à couvrir. À partir de 9h, les deux trains se rapprochent à une vitesse combinée de 180 km/h. Le temps nécessaire pour combler les 320 km est de 320 ÷ 180 = 16/9 ≈ 1h46min40s. Ils se rencontrent donc à 10h46min40s. Méthode par équation : Soit t le temps écoulé depuis 8h. Le train de Caen parcourt 80t km et celui de Paris 100(t−1) km. On a donc : 80t + 100(t−1) = 400 ⇒ 180t = 500 ⇒ t = 25/9 ≈ 2h46min40s. En partant de 8h00, cela donne également 10h46min40s."
  },
  { 
    category: 'Math', 
    question: 'Nicolas et Fabien sont deux athlètes 💪 Mais pas des coureurs rapides. Nicolas à une allure de 6min/km et Fabien 7min/km. Sur une piste de 1km en combien de temps Nicolas aura fait un tour de plus que Fabien ? 🏃‍♂️', 
    answer: '6*7 = 42min. Nicolas aura fait 7 tours et Fabien 6. Il aura fait un tour de plus que Fabien.' 
  },

  { 
    category: 'Math', 
    question: 'Je suis un nombre qui, divisé par la somme de ses chiffres, donne 7. Quel est ce nombre? 🔢', 
    answer: '21 (21 divisé par 2+1 = 3 donne bien 7).' 
  },
  { 
    category: 'Math', 
    question: '3 jardiniers entretiennent une zone de 52 m2 et 7 arbres. Justin et Matheo mettent 2h à faire l\'entretient. Titouan et Justin mettent 4h pour cela. Matheo et Titouan mettent 3h. En théorie, en combien de temps Titouan finirait ce travail tout seul ? 🔢', 
    answer: 'Sur 1 heure de travail on a des valeurs de zone entretenue de: J+T = 1/2, J+M = 1/2, T+J = 1/4, T+M = 1/3 Donc T+J + T+M - J+M = 1/4 + 1/3 - 1/2 = 7/12-6/12 = 1/12 = 2T Donc en 1h, 2 Titouan font 1/12 de l\'entretien nécessaire... Il faudrait 24h pour que Titouan finisse le travail tout seul ! ' 
  },
  { 
    category: 'Math', 
    question: 'Aurelia a acheté beaucoup de mangas aujourd\'hui ! Sans "les mémoires de Vanitas" elle aurait payé 20 euros. Sans "One Piece" elle aurait payé 18€. Sans "Je me suis réincarné en troubadour" elle aurait payé 22€. Et sans "bible black" elle aurait payé 15€. Quel est le prix de chaque manga ? 📚', 
    answer: 'Si on additionne les 4 prix on a payé 3 fois la somme totale donc MV + OP + RT + BB = (20€ + 18€ + 22€ + 15€)/3 = 25€ On en déduit que MV=25-20 = 5€, OP=25-18 = 7€, RT=25-22 = 3€ et BB=25-15 = 10€.' 
  },
  { 
    category: 'Math', 
    question: 'Si un cube a une arête de 3 cm, quel est son volume? 🧊', 
    answer: 'Le volume est de 3^3 27 cm³.' 
  }
    ];
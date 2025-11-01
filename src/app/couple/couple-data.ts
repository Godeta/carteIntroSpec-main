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
    question: 'Si je passais une journée typique dans ta vie / dans ta tête, qu’est-ce que je verrais ou ressentirais ?',
  },
  {
    category: 'Amusant, divers',
    question: 'Si quelqu’un écrivait notre histoire d’amour dans un livre, quel serait le titre ?',
  },
  {
    category: 'Amusant, divers',
    question: 'Si tu pouvais passer la semaine prochaine n’importe où dans le monde, où irais-tu ?',
  },
  {
    category: 'Amusant, divers',
    question: 'Si peu importe le travail, tout le monde gagnait exactement le même salaire, quel travail souhaiterais-tu faire ?',
  },
  {
    category: 'Amusant, divers',
    question: 'Dis-moi 3 choses qui sont sur ta liste de souhaits (cadeaux ou trucs que tu aimerais faire un jour).',
  },
  {
    category: 'Amusant, divers',
    question: 'Donne une œuvre de fiction (livre, film, série...) qui a eu un grand impact sur toi.',
  },
  {
    category: 'Amusant, divers',
    question: 'As-tu déjà entendu des histoires intéressantes sur quelque chose qui se serait passé un peu avant, pendant ou juste après ta naissance ? Raconte !',
  },
  {
    category: 'Amusant, divers',
    question: 'Parle d’une journée où tu as beaucoup rigolé.',
  },
  {
    category: 'Amusant, divers',
    question: 'Si tu pouvais choisir, comment souhaiterais-tu mourir ?',
  },
  {
    category: 'Amusant, divers',
    question: 'Comment nos différences aident-elles à nous compléter ?',
  },
  {
    category: 'Amusant, divers',
    question: 'De toutes les personnes que tu connais, qui ferait le meilleur président et pourquoi ?',
  },
  {
    category: 'Amusant, divers',
    question: 'Entre vous deux : qui ose le plus faire de nouvelles choses ? Qui est le plus bordélique ? Le plus attentionné ?',
  },
  {
    category: 'Amusant, divers',
    question: 'Avec les conversations que l’on a eues ces derniers mois, qu’as-tu appris sur nous, sur toi et moi ?',
  },
  // Relation, amitié et romance
  {
    category: 'Relation, amitié et romance',
    question: 'Qu’est-ce qui t’a donné envie de me rencontrer ? À quoi t’attendais-tu ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Est-ce que tu te sens à l’aise pour me demander de l’aide quand tu n’es pas sûr de quelque chose ? Pourquoi ou pourquoi pas ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'As-tu le sentiment qu’on est une équipe quand on prend des décisions ? Pourquoi ou pourquoi pas ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Penses-tu qu’avoir un sens de l’humour partagé est essentiel pour une relation saine ? Quel genre d’humour avons-nous ensemble, que tu as ou pas avec d’autres personnes ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'De quelles façons peut-on s’encourager l’un l’autre pour nos hobbies, intérêts respectifs ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelle est ta façon préférée de passer le week-end ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelles sont certaines choses que je peux faire pour faire ressortir ton côté joueur/marrant ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelle est la pire et la meilleure chose à propos de vieillir ensemble ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Selon toi, quelle est l’une des principales erreurs que les couples font (ou que tu as faites en couple par le passé) et pourquoi ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelles sont tes attentes sur ce que l’on va faire pour la Saint-Valentin (ou autre événement similaire) ? Qu’est-ce qui te ferait plaisir ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'À quel moment as-tu su que tu étais amoureux/amoureuse de moi ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelle est l’une de tes aventures/choses préférées qu’on a faites ensemble et pourquoi ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelle est la plus belle chose que tu aies faite pour quelqu’un ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelles sont les 5 personnes avec qui tu passes le plus de temps au quotidien ? Penses-tu qu’elles rendent ta vie meilleure ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelles sont deux façons pratiques pour te témoigner de l’amour que je pourrais faire cette semaine ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quel compliment aimerais-tu que je te fasse ? Pourquoi celui-ci compte pour toi ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Qui admires-tu comme exemple d’une relation saine ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'As-tu des idées de petites sorties ou activités sympas que l’on pourrait prévoir de faire ensemble ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Aimerais-tu avoir des enfants ? Des animaux de compagnie ? Quand, combien, dans quelles conditions ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'As-tu des amitiés importantes pour toi qui se sont perdues ou affaiblies avec le temps ? Pourquoi, à ton avis ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Qu’est-ce que tu considères comme tromper ? Où places-tu la limite ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelles sont certaines limites que l’on devrait se fixer pour se protéger de certains proches toxiques ? (exemple : ne pas dire oui à cette pote qui te demande toujours un service sans rendre la pareille ou à ce tonton qui veut t’emmener en boîte voir des gonzesses)',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quelles limites peut-on se fixer pour ne pas passer trop de temps sur notre téléphone ?',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quel est ton rapport vis-à-vis des modifications esthétiques ? Par exemple la cosmétique (maquillage, coloration...), la chirurgie (botox, lifting, refaire un nez...) ou encore les tatouages et piercings.',
  },
  {
    category: 'Relation, amitié et romance',
    question: 'Quel est ton souvenir préféré de nous deux ?',
  },
  // Enfance
  {
    category: 'Enfance',
    question: 'Quel était ton jouet ou ton objet préféré quand tu étais enfant ?',
  },
  {
    category: 'Enfance',
    question: 'Comment était ta chambre quand tu étais ado ?',
  },
  {
    category: 'Enfance',
    question: 'Parle d’une personne dans ton enfance qui t’a donné beaucoup d’amour. Donne un exemple d’une chose que cette personne a faite pour toi qui t’a fait te sentir aimé.',
  },
  {
    category: 'Enfance',
    question: 'Est-ce que tes parents ont montré du favoritisme envers d’autres membres de ta famille ?',
  },
  {
    category: 'Enfance',
    question: 'Parle d’une chose que tu as vécu enfant et qui a impacté qui tu es aujourd’hui.',
  },
  {
    category: 'Enfance',
    question: 'Est-ce que tes parents étaient affectueux l’un envers l’autre quand tu étais petit ? Comment te sentais-tu par rapport à cela ?',
  },
  {
    category: 'Enfance',
    question: 'Étais-tu encouragé à exprimer tes émotions lorsque tu étais petit ? Pourquoi ou pourquoi pas ?',
  },
  {
    category: 'Enfance',
    question: 'En grandissant, as-tu déjà fait ou subi des humiliations ou du harcèlement ? Raconte.',
  },
  {
    category: 'Enfance',
    question: 'Donne un héros de ton enfance et explique pourquoi.',
  },
  {
    category: 'Enfance',
    question: 'Comment tes parents géraient leur argent ? Penses-tu qu’ils le faisaient correctement ?',
  },
  {
    category: 'Enfance',
    question: 'Comment étaient tes amis d’enfance ? Raconte les jeux que vous aviez à la récré.',
  },
  // Communication et bien être
  {
    category: 'Communication et bien être',
    question: 'Selon toi, qu’est-ce que c’est de prendre soin de soi ? Comment le fais-tu aujourd’hui dans ta vie ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Y a-t-il quelque chose ou quelqu’un qui t’a demandé trop d’énergie ? Comment est-ce que tu as changé, ou changerais cela ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Quelle activité dans ta vie te fait du bien ? Pourquoi ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Selon toi, c’est quoi réussir sa vie ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Qu’est-ce qui te fait te relaxer, te sentir mieux après une semaine éprouvante ? Où peux-tu dégager du temps dans ta vie pour être sûr d’avoir le temps de récupérer régulièrement ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Y a-t-il des choses vis-à-vis desquelles tu es mal à l’aise avec ma famille ? Si possible, donne une anecdote.',
  },
  {
    category: 'Communication et bien être',
    question: 'Comment faire en sorte que l’on se traite avec respect même quand une dispute arrive ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Quand il y a un conflit, as-tu tendance à l’affronter ou à fuir ? Donne un exemple.',
  },
  {
    category: 'Communication et bien être',
    question: 'Y a-t-il des choses que tu considères comme impardonnables ? Par exemple, serais-tu prêt à pardonner d’avoir été trompé ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Donne un aspect dans notre relation où tu as le sentiment qu’il y a eu (ou pas) de la communication mais pas de plan/d’action concrète derrière. Penses-tu que l’on puisse aller à l’étape suivante aujourd’hui ? Pourquoi ou pourquoi pas ?',
  },
  {
    category: 'Communication et bien être',
    question: 'C’est quoi pour toi être un partenaire digne de confiance ? Qu’est-ce que cela implique ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Quelles sont les plus grosses difficultés pour avoir une communication saine dans notre couple ? Dans nos autres relations (famille, amis...) ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Comment décrirais-tu la façon dont on communique l’un avec l’autre ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Y a-t-il des sujets que tu préférerais garder privés vis-à-vis de tes amis ? Vis-à-vis de moi ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Comment pourrions-nous être plus à l’aise pour parler de nos préférences ou inquiétudes sentimentales ou sexuelles ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Au quotidien, quel est le moment idéal pour se poser et parler de nos désaccords ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Y a-t-il parfois des choses que je fais qui te donnent le sentiment que je m’en fiche/ne m’intéresse pas à toi ?',
  },
  {
    category: 'Communication et bien être',
    question: 'As-tu plutôt tendance à traiter tes pensées/sentiments dans ta tête ou à les extérioriser par des mots ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Quelle est une tâche que tu détestes faire et que tu aimerais déléguer (à une machine, quelqu’un d’autre, faire différemment...) ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Au quotidien, est-ce que tu préfères qu’on fasse les courses ensemble, séparément ou un peu des deux ?',
  },
  {
    category: 'Communication et bien être',
    question: 'Quelle place donnes-tu à l’argent dans ta vie ? Combien te faudrait-il pour être confortable ? Pour être libre financièrement ?',
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
    question: 'Si tu devais m’apprendre quelque chose, qu’est-ce que ce serait et pourquoi ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'De quelle façon te considères-tu unique ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Qu’est-ce qui t’énerve et comment te comportes-tu quand tu es énervé ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Quelle est la personne qui t’a fait ressentir le plus d’émotions négatives (tristesse, douleur, dégoût...) et comment te sens-tu vis-à-vis de celle-ci aujourd’hui ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Si tu pouvais transformer un de tes talents en une carrière ou un business, qu’est-ce que ce serait et pourquoi ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'As-tu parfois l’impression que les gens que tu aimes profitent de toi ? Pourquoi ou pourquoi pas ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Te considères-tu comme quelqu’un de confiant et à l’aise dans ton travail ? Pourquoi ou pourquoi pas ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Quelle est une mauvaise habitude que tu devrais arrêter mais tu n’arrives pas ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Qu’est-ce que je peux faire pour te donner du réconfort, te faire te sentir mieux, quand tu te sens mal/blessé/anxieux/épuisé...',
  },
  {
    category: 'Connaissance de soi',
    question: 'La pleine conscience est le fait d’être présent et attentif à ce qu’il se passe en toi. À quels moments dans ton quotidien, te reconnectes-tu dans le moment présent plutôt que d’être en pilote automatique sur des tâches/réflexions rapides ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'En repensant au mois dernier, est-ce que tu as le sentiment d’avoir bien utilisé ton temps libre ? Pourquoi ou pourquoi pas ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'As-tu un exemple d’un échec qui est devenu une leçon pour toi ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Quelle a été la dernière fois où tu t’es senti vulnérable ? Avec qui étais-tu et comment est-ce que ça s’est passé ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Quelle genre de vie aimerais-tu avoir à la retraite ?',
  },
  {
    category: 'Connaissance de soi',
    question: 'Quelles sont tes plus grandes craintes vis-à-vis de l’avenir ? Y a-t-il une chose sur laquelle je peux t’aider ou te rassurer ?',
  },
  // Sexualité et intimité
  {
    category: 'Sexualité et intimité',
    question: 'À quoi ressemblerait ta sexualité idéale pour cette saison qui arrive ?',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Comment peut-on être romantique l’un envers l’autre pendant la journée avant de faire l’amour plus tard ?',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Tu préfères une relation sexuelle plutôt "sauvage", douce, plus romantique ou plus mouvementée ? Plus classique ou au contraire essayer de nouvelles choses ?',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Est-ce que tu voudrais essayer de faire l’amour dans d’autres endroits que l’on n’a pas encore fait ? (douche, hôtel, dehors...)',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Pense à notre 1ère fois ensemble. Quels sentiments et pensées te viennent à l’esprit ? Y a-t-il des choses que l’on n’a pas osé se dire ?',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Quelle est ta position sexuelle préférée ? Pourquoi ? Voudrais-tu en essayer une autre ?',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Comment te sens-tu vis-à-vis des sextos, des nudes ou de se chauffer à distance ?',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Comment te sens-tu vis-à-vis de la masturbation ? (si tu le fais, si ton partenaire le fait...)',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Comment as-tu découvert la sexualité ? (ami qui en parle, porno, cours d’éducation sexuelle...) Te souviens-tu de tes premiers rêves érotiques ou fantasmes ?',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Comment aimerais-tu te sentir embrassé / quelle proximité physique souhaiterais-tu avant, pendant et après une relation sexuelle ?',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Donne trois endroits sur ton corps où tu aimes être embrassé (sans compter les lèvres).',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Que penses-tu de planifier une relation sexuelle ? Est-ce que ça te va ou au contraire tue l’excitation...',
  },
  {
    category: 'Sexualité et intimité',
    question: 'As-tu déjà eu un orgasme ? Comment le ressens-tu exactement ? Décris la sensation.',
  },
  {
    category: 'Sexualité et intimité',
    question: 'Pour faire l’amour, est-ce que tu préfères avoir l’initiative ou l’inverse ?',
  },
];

// English translations
export const en_categoryDescriptions: CategoryDescriptions = {
  'Fun, various': 'Light and entertaining questions to laugh and discover anecdotes about your partner.',
  'Relationship, friendship and romance': 'Questions to explore your feelings, your story and your complicity as a couple or friends.',
  'Childhood': 'Questions to relive your childhood memories and share your past experiences.',
  'Communication and well-being': 'Questions to improve your communication, listening and mutual well-being.',
  'Self-knowledge': 'Questions to get to know yourself better, explore your values, strengths and weaknesses.',
  'Sexuality and intimacy': 'Questions to address your intimate life, desires and expectations with kindness.'
};

export const en_coupleCards: CoupleCard[] = [
  // Fun, various
  {
    category: 'Fun, various',
    question: 'Which of your 5 senses is the best? Why?',
  },
  {
    category: 'Fun, various',
    question: 'If I spent a typical day in your life/in your mind, what would I see or feel?',
  },
  {
    category: 'Fun, various',
    question: 'If someone wrote our love story in a book, what would the title be?',
  },
  {
    category: 'Fun, various',
    question: 'If you could spend next week anywhere in the world, where would you go?',
  },
  {
    category: 'Fun, various',
    question: 'If everyone earned the same salary regardless of their job, what work would you choose to do?',
  },
  {
    category: 'Fun, various',
    question: 'Tell me 3 things that are on your wishlist (gifts or things you’d like to do someday).',
  },
  {
    category: 'Fun, various',
    question: 'Name a work of fiction (book, movie, series...) that had a big impact on you.',
  },
  {
    category: 'Fun, various',
    question: 'Have you ever heard interesting stories about something that happened just before, during, or after your birth? Tell me!',
  },
  {
    category: 'Fun, various',
    question: 'Talk about a day when you laughed a lot.',
  },
  {
    category: 'Fun, various',
    question: 'If you could choose, how would you like to die?',
  },
  {
    category: 'Fun, various',
    question: 'How do our differences help us complement each other?',
  },
  {
    category: 'Fun, various',
    question: 'Out of all the people you know, who would make the best president and why?',
  },
  {
    category: 'Fun, various',
    question: 'Between the two of you: who dares to try new things the most? Who is the messiest? The most caring?',
  },
  {
    category: 'Fun, various',
    question: 'From the conversations we’ve had in recent months, what have you learned about us, about you and me?',
  },
  // Relationship, friendship and romance
  {
    category: 'Relationship, friendship and romance',
    question: 'What made you want to meet me? What did you expect?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'Do you feel comfortable asking me for help when you’re unsure about something? Why or why not?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'Do you feel like we’re a team when making decisions? Why or why not?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'Do you think having a shared sense of humor is essential for a healthy relationship? What kind of humor do we have together, that you do or don’t have with others?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'In what ways can we encourage each other in our respective hobbies and interests?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What’s your favorite way to spend the weekend?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What are some things I can do to bring out your playful/funny side?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What’s the worst and best thing about growing old together?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'In your opinion, what’s one of the main mistakes couples make (or that you’ve made in past relationships) and why?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What are your expectations for what we’ll do for Valentine’s Day (or a similar event)? What would make you happy?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'When did you know you were in love with me?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What’s one of your favorite adventures/things we’ve done together and why?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What’s the most beautiful thing you’ve done for someone?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'Who are the 5 people you spend the most time with daily? Do you think they make your life better?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What are two practical ways to show you love that I could do this week?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What compliment would you like me to give you? Why does this one matter to you?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'Who do you admire as an example of a healthy relationship?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'Do you have ideas for small outings or fun activities we could plan to do together?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'Would you like to have children? Pets? When, how many, under what conditions?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'Are there important friendships for you that have been lost or weakened over time? Why, in your opinion?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What do you consider cheating? Where do you draw the line?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What are some boundaries we should set to protect ourselves from toxic loved ones? (Example: not saying yes to that friend who always asks for favors without reciprocating, or that uncle who wants to take you clubbing to meet girls)',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What boundaries can we set to avoid spending too much time on our phones?',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What’s your stance on aesthetic modifications? For example, cosmetics (makeup, hair dye...), surgery (Botox, facelift, nose job...), or tattoos and piercings.',
  },
  {
    category: 'Relationship, friendship and romance',
    question: 'What is your favorite memory of the two of us?',
  },
  // Childhood
  {
    category: 'Childhood',
    question: 'What was your room like when you were a teenager?',
  },
  {
    category: 'Childhood',
    question: 'What was your favorite toy or object when you were a child?',
  },
  {
    category: 'Childhood',
    question: 'Talk about someone from your childhood who gave you a lot of love. Give an example of something this person did for you that made you feel loved.',
  },
  {
    category: 'Childhood',
    question: 'Did your parents show favoritism toward other family members?',
  },
  {
    category: 'Childhood',
    question: 'Talk about something you experienced as a child that impacted who you are today.',
  },
  {
    category: 'Childhood',
    question: 'Were your parents affectionate with each other when you were little? How did you feel about that?',
  },
  {
    category: 'Childhood',
    question: 'Were you encouraged to express your emotions when you were little? Why or why not?',
  },
  {
    category: 'Childhood',
    question: 'Growing up, did you ever experience or witness humiliation or bullying? Tell the story.',
  },
  {
    category: 'Childhood',
    question: 'Name a hero from your childhood and explain why.',
  },
  {
    category: 'Childhood',
    question: 'How did your parents manage their money? Do you think they did it correctly?',
  },
  {
    category: 'Childhood',
    question: 'What were your childhood friends like? Tell about the games you played during recess.',
  },
  // Communication and well-being
  {
    category: 'Communication and well-being',
    question: 'In your opinion, what does it mean to take care of yourself? How do you do it today in your life?',
  },
  {
    category: 'Communication and well-being',
    question: 'Is there something or someone that has demanded too much of your energy? How have you changed, or would you change that?',
  },
  {
    category: 'Communication and well-being',
    question: 'What activity in your life makes you feel good? Why?',
  },
  {
    category: 'Communication and well-being',
    question: 'In your opinion, what does it mean to succeed in life?',
  },
  {
    category: 'Communication and well-being',
    question: 'What helps you relax and feel better after a tough week? Where can you make time in your life to ensure you recover regularly?',
  },
  {
    category: 'Communication and well-being',
    question: 'Are there things that make you uncomfortable with my family? If possible, give an example.',
  },
  {
    category: 'Communication and well-being',
    question: 'How can we ensure we treat each other with respect even during an argument?',
  },
  {
    category: 'Communication and well-being',
    question: 'When there is a conflict, do you tend to confront it or avoid it? Give an example.',
  },
  {
    category: 'Communication and well-being',
    question: 'Are there things you consider unforgivable? For example, would you be ready to forgive infidelity?',
  },
  {
    category: 'Communication and well-being',
    question: 'Give an aspect of our relationship where you feel there has been (or not) communication but no concrete plan/action behind it. Do you think we can move to the next step today? Why or why not?',
  },
  {
    category: 'Communication and well-being',
    question: 'What does it mean to you to be a trustworthy partner? What does that imply?',
  },
  {
    category: 'Communication and well-being',
    question: 'What are the biggest challenges for having healthy communication in our relationship? In our other relationships (family, friends...)?',
  },
  {
    category: 'Communication and well-being',
    question: 'How would you describe the way we communicate with each other?',
  },
  {
    category: 'Communication and well-being',
    question: 'Are there topics you would prefer to keep private from your friends? From me?',
  },
  {
    category: 'Communication and well-being',
    question: 'How could we be more comfortable talking about our emotional or sexual preferences or concerns?',
  },
  {
    category: 'Communication and well-being',
    question: 'In daily life, what is the ideal time to sit down and talk about our disagreements?',
  },
  {
    category: 'Communication and well-being',
    question: 'Are there times when I do things that make you feel like I don’t care or am not interested in you?',
  },
  {
    category: 'Communication and well-being',
    question: 'Do you tend to process your thoughts/feelings in your head or express them through words?',
  },
  {
    category: 'Communication and well-being',
    question: 'What is a task you hate doing and would like to delegate (to a machine, someone else, do it differently...)?',
  },
  {
    category: 'Communication and well-being',
    question: 'In daily life, do you prefer that we do the shopping together, separately, or a bit of both?',
  },
  {
    category: 'Communication and well-being',
    question: 'What place does money have in your life? How much would you need to be comfortable? To be financially free?',
  },
  {
    category: 'Communication and well-being',
    question: 'What is something you would like me to understand better about you?',
  },
  // Self-knowledge
  {
    category: 'Self-knowledge',
    question: 'Do you consider yourself a patient person most of the time? When do you feel most impatient?',
  },
  {
    category: 'Self-knowledge',
    question: 'If you had to teach me something, what would it be and why?',
  },
  {
    category: 'Self-knowledge',
    question: 'In what way do you consider yourself unique?',
  },
  {
    category: 'Self-knowledge',
    question: 'What annoys you and how do you behave when you are annoyed?',
  },
  {
    category: 'Self-knowledge',
    question: 'Who is the person who made you feel the most negative emotions (sadness, pain, disgust...) and how do you feel about them today?',
  },
  {
    category: 'Self-knowledge',
    question: 'If you could turn one of your talents into a career or business, what would it be and why?',
  },
  {
    category: 'Self-knowledge',
    question: 'Do you sometimes feel like the people you love take advantage of you? Why or why not?',
  },
  {
    category: 'Self-knowledge',
    question: 'Do you consider yourself a confident and comfortable person at work? Why or why not?',
  },
  {
    category: 'Self-knowledge',
    question: 'What is a bad habit you should stop but can’t?',
  },
  {
    category: 'Self-knowledge',
    question: 'What can I do to comfort you, make you feel better when you feel bad/hurt/anxious/exhausted...',
  },
  {
    category: 'Self-knowledge',
    question: 'Mindfulness is being present and attentive to what is happening within you. At what moments in your daily life do you reconnect with the present moment rather than being on autopilot with quick tasks/thoughts?',
  },
  {
    category: 'Self-knowledge',
    question: 'Looking back at last month, do you feel like you used your free time well? Why or why not?',
  },
  {
    category: 'Self-knowledge',
    question: 'Do you have an example of a failure that became a lesson for you?',
  },
  {
    category: 'Self-knowledge',
    question: 'What was the last time you felt vulnerable? Who were you with and how did it go?',
  },
  {
    category: 'Self-knowledge',
    question: 'What kind of life would you like to have in retirement?',
  },
  {
    category: 'Self-knowledge',
    question: 'What are your biggest fears about the future? Is there something I can help you with or reassure you about?',
  },
  // Sexuality and intimacy
  {
    category: 'Sexuality and intimacy',
    question: 'What would your ideal sexuality look like for this upcoming season?',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'How can we be romantic with each other during the day before making love later?',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'Do you prefer a sexual relationship that is rather "wild", gentle, more romantic or more intense? More classic or trying new things?',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'Would you like to try making love in other places we haven’t tried yet? (shower, hotel, outside...)',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'Think about our first time together. What feelings and thoughts come to mind? Were there things we didn’t dare say?',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'What is your favorite sexual position? Why? Would you like to try another?',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'How do you feel about sexting, nudes or heating up from a distance?',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'How do you feel about masturbation? (if you do it, if your partner does it...)',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'How did you discover sexuality? (friends talking about it, porn, sex education classes...) Do you remember your first erotic dreams or fantasies?',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'How would you like to feel kissed/what physical closeness would you like before, during and after a sexual relationship?',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'Name three places on your body where you like to be kissed (excluding lips).',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'What do you think about planning a sexual relationship? Does it work for you or does it kill the excitement?',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'Have you ever had an orgasm? How does it feel exactly? Describe the sensation.',
  },
  {
    category: 'Sexuality and intimacy',
    question: 'When making love, do you prefer to take the initiative or the opposite?',
  },
];

// Spanish translations
export const es_categoryDescriptions: CategoryDescriptions = {
  'Divertido, varios': 'Preguntas ligeras y entretenidas para reír y descubrir anécdotas sobre tu pareja.',
  'Relación, amistad y romance': 'Preguntas para explorar tus sentimientos, tu historia y tu complicidad como pareja o amigos.',
  'Infancia': 'Preguntas para revivir tus recuerdos de la infancia y compartir tus experiencias pasadas.',
  'Comunicación y bienestar': 'Preguntas para mejorar tu comunicación, escucha y bienestar mutuo.',
  'Autoconocimiento': 'Preguntas para conocerte mejor, explorar tus valores, fortalezas y debilidades.',
  'Sexualidad e intimidad': 'Preguntas para abordar tu vida íntima, deseos y expectativas con bondad.'
};

export const es_coupleCards: CoupleCard[] = [
  // Divertido, varios
  {
    category: 'Divertido, varios',
    question: '¿Cuál de tus 5 sentidos es el mejor? ¿Por qué?',
  },
  {
    category: 'Divertido, varios',
    question: 'Si pasara un día típico en tu vida/en tu mente, ¿qué vería o sentiría?',
  },
  {
    category: 'Divertido, varios',
    question: 'Si alguien escribiera nuestra historia de amor en un libro, ¿cuál sería el título?',
  },
  {
    category: 'Divertido, varios',
    question: 'Si pudieras pasar la próxima semana en cualquier lugar del mundo, ¿a dónde irías?',
  },
  {
    category: 'Divertido, varios',
    question: 'Si todos ganaran el mismo salario sin importar el trabajo, ¿qué trabajo te gustaría hacer?',
  },
  {
    category: 'Divertido, varios',
    question: 'Dime 3 cosas que están en tu lista de deseos (regalos o cosas que te gustaría hacer algún día).',
  },
  {
    category: 'Divertido, varios',
    question: 'Nombra una obra de ficción (libro, película, serie...) que haya tenido un gran impacto en ti.',
  },
  {
    category: 'Divertido, varios',
    question: '¿Has escuchado historias interesantes sobre algo que pasó justo antes, durante o después de tu nacimiento? ¡Cuéntame!',
  },
  {
    category: 'Divertido, varios',
    question: 'Habla de un día en el que te reíste mucho.',
  },
  {
    category: 'Divertido, varios',
    question: 'Si pudieras elegir, ¿cómo te gustaría morir?',
  },
  {
    category: 'Divertido, varios',
    question: '¿Cómo ayudan nuestras diferencias a complementarnos?',
  },
  {
    category: 'Divertido, varios',
    question: 'De todas las personas que conoces, ¿quién sería el mejor presidente y por qué?',
  },
  {
    category: 'Divertido, varios',
    question: 'Entre ustedes dos: ¿quién se atreve más a hacer cosas nuevas? ¿Quién es el más desordenado? ¿El más atento?',
  },
  {
    category: 'Divertido, varios',
    question: 'De las conversaciones que hemos tenido en los últimos meses, ¿qué has aprendido sobre nosotros, sobre ti y sobre mí?',
  },
  // Relación, amistad y romance
  {
    category: 'Relación, amistad y romance',
    question: '¿Qué te dio ganas de conocerme? ¿Qué esperabas?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Te sientes cómodo pidiéndome ayuda cuando no estás seguro de algo? ¿Por qué sí o por qué no?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Sientes que somos un equipo al tomar decisiones? ¿Por qué sí o por qué no?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Crees que tener un sentido del humor compartido es esencial para una relación sana? ¿Qué tipo de humor tenemos juntos, que no tienes con otras personas?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿De qué maneras podemos animarnos mutuamente en nuestros pasatiempos e intereses respectivos?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuál es tu forma favorita de pasar el fin de semana?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Qué cosas puedo hacer para sacar tu lado juguetón/divertido?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuál es lo peor y lo mejor de envejecer juntos?',
  },
  {
    category: 'Relación, amistad y romance',
    question: 'En tu opinión, ¿cuál es uno de los principales errores que cometen las parejas (o que has cometido en relaciones pasadas) y por qué?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuáles son tus expectativas sobre lo que haremos para el Día de San Valentín (u otro evento similar)? ¿Qué te haría feliz?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿En qué momento supiste que estabas enamorado/enamorada de mí?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuál es una de tus aventuras/cosas favoritas que hemos hecho juntos y por qué?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuál es la cosa más hermosa que hayas hecho por alguien?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuáles son las 5 personas con las que pasas más tiempo a diario? ¿Crees que hacen tu vida mejor?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuáles son dos formas prácticas de demostrarte amor que podría hacer esta semana?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Qué cumplido te gustaría que te hiciera? ¿Por qué este es importante para ti?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿A quién admiras como ejemplo de una relación sana?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Tienes ideas para pequeñas salidas o actividades divertidas que podríamos planear hacer juntos?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Te gustaría tener hijos? ¿Mascotas? ¿Cuándo, cuántos, bajo qué condiciones?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Tienes amistades importantes para ti que se han perdido o debilitado con el tiempo? ¿Por qué, en tu opinión?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Qué consideras infidelidad? ¿Dónde pones el límite?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuáles son algunos límites que deberíamos establecer para protegernos de seres queridos tóxicos? (Ejemplo: no decir que sí a ese amigo que siempre pide favores sin corresponder, o a ese tío que quiere llevarte a un antro a ver chicas)',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Qué límites podemos establecer para no pasar demasiado tiempo en nuestros teléfonos?',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuál es tu postura sobre las modificaciones estéticas? Por ejemplo, cosméticos (maquillaje, tinte de cabello...), cirugías (Botox, lifting, operarse la nariz...), o tatuajes y piercings.',
  },
  {
    category: 'Relación, amistad y romance',
    question: '¿Cuál es tu recuerdo favorito de nosotros dos?',
  },
  // Infancia
  {
    category: 'Infancia',
    question: '¿Cómo era tu habitación cuando eras adolescente?',
  },
  {
    category: 'Infancia',
    question: 'Habla de una persona en tu infancia que te dio mucho amor. Da un ejemplo de algo que esta persona hizo por ti que te hizo sentir amado.',
  },
  {
    category: 'Infancia',
    question: '¿Tus padres mostraron favoritismo hacia otros miembros de la familia?',
  },
  {
    category: 'Infancia',
    question: 'Habla de algo que viviste de niño que impactó en quien eres hoy.',
  },
  {
    category: 'Infancia',
    question: '¿Tus padres eran cariñosos el uno con el otro cuando eras pequeño? ¿Cómo te sentías al respecto?',
  },
  {
    category: 'Infancia',
    question: '¿Te animaban a expresar tus emociones cuando eras pequeño? ¿Por qué sí o por qué no?',
  },
  {
    category: 'Infancia',
    question: 'Al crecer, ¿alguna vez fuiste víctima o testigo de humillaciones o acoso? Cuenta la historia.',
  },
  {
    category: 'Infancia',
    question: 'Nombra a un héroe de tu infancia y explica por qué.',
  },
  {
    category: 'Infancia',
    question: '¿Cómo manejaban el dinero tus padres? ¿Crees que lo hacían correctamente?',
  },
  {
    category: 'Infancia',
    question: '¿Cómo eran tus amigos de la infancia? Cuenta sobre los juegos que jugaban en el recreo.',
  },
  // Comunicación y bienestar
  {
    category: 'Comunicación y bienestar',
    question: 'En tu opinión, ¿qué significa cuidarse a uno mismo? ¿Cómo lo haces hoy en tu vida?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Hay algo o alguien que te haya demandado demasiada energía? ¿Cómo has cambiado o cambiarías eso?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Qué actividad en tu vida te hace sentir bien? ¿Por qué?',
  },
  {
    category: 'Comunicación y bienestar',
    question: 'En tu opinión, ¿qué es tener éxito en la vida?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Qué te ayuda a relajarte y sentirte mejor después de una semana difícil? ¿Dónde puedes encontrar tiempo en tu vida para asegurarte de recuperarte regularmente?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Hay cosas que te hacen sentir incómodo con mi familia? Si es posible, da un ejemplo.',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Cómo podemos asegurarnos de tratarnos con respeto incluso durante una discusión?',
  },
  {
    category: 'Comunicación y bienestar',
    question: 'Cuando hay un conflicto, ¿tiendes a confrontarlo o evitarlo? Da un ejemplo.',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Hay cosas que consideras imperdonables? Por ejemplo, ¿estarías dispuesto a perdonar una infidelidad?',
  },
  {
    category: 'Comunicación y bienestar',
    question: 'Da un aspecto de nuestra relación en el que sientas que ha habido (o no) comunicación pero no un plan/acción concreta detrás. ¿Crees que podemos pasar al siguiente paso hoy? ¿Por qué sí o por qué no?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Qué significa para ti ser una pareja digna de confianza? ¿Qué implica eso?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Cuáles son los mayores desafíos para tener una comunicación saludable en nuestra relación? ¿En nuestras otras relaciones (familia, amigos...)?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Cómo describirías la forma en que nos comunicamos el uno con el otro?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Hay temas que prefieras mantener privados con respecto a tus amigos? ¿Con respecto a mí?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Cómo podríamos estar más cómodos para hablar de nuestras preferencias o preocupaciones emocionales o sexuales?',
  },
  {
    category: 'Comunicación y bienestar',
    question: 'En la vida diaria, ¿cuál es el momento ideal para sentarse y hablar de nuestros desacuerdos?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Hay veces en las que hago cosas que te hacen sentir que no me importa o no estoy interesado en ti?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Tiendes a procesar tus pensamientos/sentimientos en tu cabeza o a exteriorizarlos con palabras?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Cuál es una tarea que odias hacer y te gustaría delegar (a una máquina, a otra persona, hacerlo de otra manera...)?',
  },
  {
    category: 'Comunicación y bienestar',
    question: 'En la vida diaria, ¿prefieres que hagamos las compras juntos, por separado o un poco de ambas?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Qué lugar ocupa el dinero en tu vida? ¿Cuánto necesitarías para estar cómodo? ¿Para ser libre financieramente?',
  },
  {
    category: 'Comunicación y bienestar',
    question: '¿Qué es algo que te gustaría que entendiera mejor sobre ti?',
  },
  // Autoconocimiento
  {
    category: 'Autoconocimiento',
    question: '¿Te consideras una persona paciente la mayor parte del tiempo? ¿Cuándo te sientes más impaciente?',
  },
  {
    category: 'Autoconocimiento',
    question: 'Si tuvieras que enseñarme algo, ¿qué sería y por qué?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿De qué manera te consideras único?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿Qué te molesta y cómo te comportas cuando estás molesto?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿Quién es la persona que te ha hecho sentir más emociones negativas (tristeza, dolor, asco...) y cómo te sientes con respecto a ella hoy?',
  },
  {
    category: 'Autoconocimiento',
    question: 'Si pudieras convertir uno de tus talentos en una carrera o negocio, ¿qué sería y por qué?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿A veces sientes que las personas que amas se aprovechan de ti? ¿Por qué sí o por qué no?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿Te consideras una persona segura y cómoda en tu trabajo? ¿Por qué sí o por qué no?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿Cuál es un mal hábito que deberías dejar pero no puedes?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿Qué puedo hacer para darte consuelo, hacerte sentir mejor cuando te sientes mal/herido/ansioso/agotado...',
  },
  {
    category: 'Autoconocimiento',
    question: 'La atención plena es estar presente y atento a lo que sucede dentro de ti. ¿En qué momentos de tu vida diaria te reconectas con el momento presente en lugar de estar en piloto automático con tareas/pensamientos rápidos?',
  },
  {
    category: 'Autoconocimiento',
    question: 'Al pensar en el mes pasado, ¿sientes que usaste bien tu tiempo libre? ¿Por qué sí o por qué no?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿Tienes un ejemplo de un fracaso que se convirtió en una lección para ti?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿Cuál fue la última vez que te sentiste vulnerable? ¿Con quién estabas y cómo fue?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿Qué tipo de vida te gustaría tener en la jubilación?',
  },
  {
    category: 'Autoconocimiento',
    question: '¿Cuáles son tus mayores temores sobre el futuro? ¿Hay algo en lo que pueda ayudarte o tranquilizarte?',
  },
  // Sexualidad e intimidad
  {
    category: 'Sexualidad e intimidad',
    question: '¿Cómo sería tu sexualidad ideal para esta próxima temporada?',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Cómo podemos ser románticos el uno con el otro durante el día antes de hacer el amor más tarde?',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Prefieres una relación sexual más "salvaje", dulce, más romántica o más intensa? ¿Más clásica o probar cosas nuevas?',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Te gustaría probar hacer el amor en otros lugares que no hayamos probado? (ducha, hotel, afuera...)',
  },
  {
    category: 'Sexualidad e intimidad',
    question: 'Piensa en nuestra primera vez juntos. ¿Qué sentimientos y pensamientos te vienen a la mente? ¿Hubo cosas que no nos atrevimos a decir?',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Cuál es tu posición sexual favorita? ¿Por qué? ¿Te gustaría probar otra?',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Cómo te sientes con respecto a los sextos, los nudes o calentarte a distancia?',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Cómo te sientes con respecto a la masturbación? (si lo haces, si tu pareja lo hace...)',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Cómo descubriste la sexualidad? (amigos que hablan de ello, porno, clases de educación sexual...) ¿Recuerdas tus primeros sueños eróticos o fantasías?',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Cómo te gustaría sentirte abrazado/qué cercanía física desearías antes, durante y después de una relación sexual?',
  },
  {
    category: 'Sexualidad e intimidad',
    question: 'Dame tres lugares en tu cuerpo donde te guste que te besen (sin contar los labios).',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Qué opinas de planificar una relación sexual? ¿Te parece bien o por el contrario mata la emoción?',
  },
  {
    category: 'Sexualidad e intimidad',
    question: '¿Has tenido un orgasmo alguna vez? ¿Cómo lo sientes exactamente? Describe la sensación.',
  },
  {
    category: 'Sexualidad e intimidad',
    question: 'Para hacer el amor, ¿prefieres tomar la iniciativa o lo contrario?',
  },
];
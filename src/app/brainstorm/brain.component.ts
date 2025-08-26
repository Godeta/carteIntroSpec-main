import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brain',
  templateUrl: './brain.component.html',
  styleUrls: ['./brain.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink],
  standalone: true,
})
export class BrainComponent implements OnInit {
  currentLanguage = 'fr';
  currentView = 'main'; // 'main', 'cards1', 'cards2', 'cards3'
  selectedCard: any = null;
  showPopup = false;
  currentChallenge: string = '';

  challenges = [
    'cuisinez un plat que vous n\'avez jamais fait ou même gouté !',
    'préparez un cocktail avec ce que vous avez sous la main et donnez lui un nom',
    'Définissez une liste de matériel autorisé puis faites la tour la plus haute possible !',
    'préparez une surprise pour un·e voisin·e (un dessert, un mot gentil, une décoration de porte).',
    'faites un concours de photo-montage avec la tête de tous les membres du groupe',
    'inventez une nouvelle règle ensemble pour un cache-cache ou autre jeu classique'
  ];

  frenchContent = {
    title: 'Brainstorming & Réflexion Collective',
    subtitle: 'Lancez-vous avec ces outils pour créer, planifier et agir ensemble !',
    description: 'Envie de lancer un projet ensemble ?',
    paragraph: 'Envie de créer ensemble, même à la dernière minute ? Que ce soit pour un projet, un événement ou une soirée entre amis, découvrez des méthodes simples et flexibles pour transformer vos idées en moments inoubliables. Pas besoin de tout prévoir : lancez-vous et amusez-vous, ici et maintenant !',
    backButton: '↩️ Menu',
    section1: {
      emoji: '💡',
      title: 'Pas encore d\'idée ?',
      subtitle: '"Trouvez-la ensemble !"',
      description: 'Découvrez des méthodes pour générer des idées de projet qui motivent tout le monde.',
      button: 'Trouver une idée'
    },
    section2: {
      emoji: '📝',
      title: 'Déjà une idée ?',
      subtitle: '"Affinez-la et faites un plan détaillé !"',
      description: 'Structurez votre projet étape par étape avec des outils collaboratifs.',
      button: 'Planifier ensemble'
    },
    section3: {
      emoji: '🚀',
      title: 'Votre idée est claire ?',
      subtitle: '"Répartissez les rôles et passez à l\'action !"',
      description: 'Attribuez les tâches, fixez des deadlines et lancez-vous !',
      button: 'Agir ensemble'
    }
  };

  englishContent = {
    title: 'Brainstorming & Collective Thinking',
    subtitle: 'Get started with these tools to create, plan and act together!',
    description: 'Want to launch a project together?',
    paragraph: 'Want to create something together—even last minute? Whether it’s a project, an event, or just a night with friends, explore easy and flexible ways to turn ideas into unforgettable moments. No planning needed: dive in and have fun, right now!',
    backButton: '↩️ Menu',
    section1: {
      emoji: '💡',
      title: 'No idea yet?',
      subtitle: '"Find one together!"',
      description: 'Discover methods to generate project ideas that motivate everyone.',
      button: 'Find an idea'
    },
    section2: {
      emoji: '📝',
      title: 'Already have an idea?',
      subtitle: '"Refine it and make a detailed plan!"',
      description: 'Structure your project step by step with collaborative tools.',
      button: 'Plan together'
    },
    section3: {
      emoji: '🚀',
      title: 'Your idea is clear?',
      subtitle: '"Assign roles and take action!"',
      description: 'Assign tasks, set deadlines and get started!',
      button: 'Act together'
    }
  };

  get content() {
    return this.currentLanguage === 'fr' ? this.frenchContent : this.englishContent;
  }

  cards1 = [
    {
      title: 'Intérêts communs',
      people: '2 à 8',
      time: '15-30 min',
      keywords: '#Passions #Intersections #ProjetCommun',
      presentation: 'Cette méthode permet de trouver un projet qui motive tout le monde en identifiant les centres d\'intérêt partagés. Chaque participant liste ce qu\'il aime (jeux, sport, cuisine, etc.), puis le groupe repère les points communs pour en faire émerger une idée de projet.',
      example: 'Alice aime la photo, Bob la randonnée, et Charlie l\'écologie.\nLeur intersection : un projet de "balade photo nature" pour documenter la biodiversité locale !'
    },
    {
      title: 'World Café express',
      people: '4 à 12',
      time: '20-40 min',
      keywords: '#Discussions #CroiserIdées #Dynamique',
      presentation: 'Inspiré des cafés citoyens, ce format stimule la créativité en faisant circuler les idées entre petits groupes. Chaque table discute d\'une question (ex. : "Quel projet nous enthousiasme ?"), puis un "ambassadeur" change de table pour partager les idées et les enrichir.',
      example: 'Table 1 : "Organiser un festival de jeux de société."\nTable 2 : "Créer un escape game maison."\nAprès 3 tours, le groupe fusionne les idées : un "festival escape game" dans un parc !'
    },
    {
      title: 'Brainwriting 6-3-5',
      people: '6',
      time: '15-25 min',
      keywords: '#Silence #Créativité #Ecriture',
      presentation: 'Une méthode sans parole pour éviter les biais de groupe ! Chaque participant écrit 3 idées en 5 min sur une feuille, puis la passe à son voisin qui complète. Après 6 tours, la feuille est remplie d\'idées variées à synthétiser.',
      example: 'Tour 1 : "Créer un podcast."\nTour 6 : "Un podcast culinaire avec des invités surprises !"'
    },
    {
      title: 'Speed Boat',
      people: '3 à 10',
      time: '10-20 min',
      keywords: '#Freins #Motivations #Visualisation',
      presentation: 'Dessinez un bateau et identifiez :\n\nLes ancres (freins : "Manque de temps").\nLes vents (motivations : "Envie de créer").\nLe groupe choisit un projet qui maximise les vents et minimise les ancres.',
      example: 'Ancre : "Budget limité."\nVent : "On adore bricoler."\nProjet : "Fabriquer des meubles en palettes pour la maison !"'
    },
    {
      title: 'Carte mentale collective',
      people: '2 à 8',
      time: '15-30 min',
      keywords: '#Visuel #Associations #Exploration',
      presentation: 'Un thème central (ex. : "Projet créatif") est noté au centre. Chaque participant ajoute des branches avec des idées connexes (ex. : "art", "numérique", "événementiel"). Les liens entre branches inspirent le projet.',
      example: 'Thème : "Projet solidaire."\nBranches : "Enfants" + "Livre" → Idée : "Créer une bibliothèque de rue !"'
    },
    {
      title: '3 Vérités et 1 Rêve',
      people: '3 à 8',
      time: '10-20 min',
      keywords: '#Rêves #Partage #Inspiration',
      presentation: 'Chaque participant partage 3 vérités sur ses passions et 1 rêve de projet. Le groupe cherche des liens entre ces rêves pour créer une idée commune.',
      example: 'Alice : "Rêve d\'un potager."\nBob : "Rêve d\'un blog."\nProjet : "Un blog sur notre potager urbain !"'
    },
    {
      title: 'Forum Ouvert mini',
      people: '5 à 15',
      time: '30-45 min',
      keywords: '#AutoOrganisation #Débat #Flexibilité',
      presentation: 'Les participants proposent des sujets sur des post-its (ex. : "Créer un jeu de société"). Ceux qui intéressent plusieurs personnes sont discutés en petits groupes. Les idées fusionnent pour former un projet.',
      example: 'Sujet populaire : "Organiser un concert."\nIdée finale : "Un concert caritatif dans un parc !"'
    }
  ];

  cards2 = [
    {
      title: 'Chapeaux de Bono',
      people: '4 à 8',
      time: '30-45 min',
      keywords: '#Réflexion #Perspectives #DécisionÉquilibrée',
      presentation: 'Cette méthode permet d\'explorer une idée sous tous ses angles en adoptant tour à tour 6 façons de penser (chapeaux) :\n\nBlanc : Faits et chiffres.\nRouge : Émotions et intuitions.\nNoir : Risques et critiques.\nJaune : Avantages et optimisme.\nVert : Créativité et alternatives.\nBleu : Organisation et synthèse.\n\nChaque participant endosse un chapeau pour analyser le projet, puis le groupe combine les perspectives pour un plan solide.',
      example: 'Projet : "Organiser un festival."\nChapeau noir : "Il risque de pleuvoir... Il faut les autorisations de la mairie..."\nChapeau vert : "Et si on rajoutait un coin photo avec l\'heure au dessus pour que les gens fassent un avant/pendant/après ? Oh et j\'ai une autre idée..."'
    },
    {
      title: 'SWOT collaboratif',
      people: '3 à 10',
      time: '20-30 min',
      keywords: '#Analyse #Stratégie #Priorités',
      presentation: 'Remplissez ensemble une matrice SWOT (Forces, Faiblesses, Opportunités, Menaces) pour votre projet. Cela permet de visualiser les enjeux et de prioriser les actions.\nComment faire ?\n\nForces : Ce que le groupe maîtrise (ex. : "On est créatifs").\nFaiblesses : Ce qui manque (ex. : "Budget limité").\nOpportunités : Ce qui peut aider (ex. : "Un ami a un local").\nMenaces : Ce qui pourrait bloquer (ex. : "Météo incertaine").',
      example: 'Projet : "Lancer un blog."\nForce : "On adore écrire."\nOpportunité : "Un membre connaît un graphiste."'
    },
    {
      title: 'Arbre à problèmes',
      people: '3 à 8',
      time: '20-40 min',
      keywords: '#Causes #Conséquences #SolutionsCiblées',
      presentation: 'Identifiez le problème central de votre projet, puis explorez :\n\nLes racines : Causes profondes (ex. : "Manque de temps").\nLes branches : Conséquences (ex. : "Stress").\nLes fruits : Solutions possibles (ex. : "Répartir les tâches").\n\nCette méthode aide à cibler les actions prioritaires pour résoudre les blocages.',
      example: 'Problème : "On n\'arrive pas à se mettre d\'accord."\nCause : "On n\'a pas défini de rôles clairs."\nSolution : "Utiliser la méthode RACI (voir partie 3)."'
    },
    {
      title: 'Méthode MoSCoW',
      people: '3 à 8',
      time: '15-25 min',
      keywords: '#Priorisation #Flexibilité #Efficacité',
      presentation: 'Classez les tâches du projet en 4 catégories :\n\nMust have : Indispensable (ex. : "Trouver un lieu").\nShould have : Important mais pas urgent (ex. : "Créer des affiches").\nCould have : Optionnel (ex. : "Prévoir un photographe").\nWon\'t have : Exclu (ex. : "Inviter 200 personnes").\n\nCette méthode permet de se concentrer sur l\'essentiel et d\'éviter la surcharge.',
      example: 'Projet : "Créer un potager."\nMust have : "Acheter des graines."\nCould have : "Installer un système d\'arrosage automatique."'
    },
    {
      title: 'Carte d\'empathie',
      people: '3 à 8',
      time: '20-30 min',
      keywords: '#Utilisateurs #Besoins #Adaptation',
      presentation: 'Mettez-vous à la place des futurs utilisateurs/bénéficiaires de votre projet en répondant à :\n\nQue pensent-ils ? (ex. : "C\'est trop compliqué.")\nQue ressentent-ils ? (ex. : "Ils ont peur de ne pas y arriver.")\nQuels sont leurs besoins ? (ex. : "Ils veulent un guide simple.")\n\nCette méthode aide à affiner le projet pour qu\'il réponde aux attentes.',
      example: 'Projet : "Un atelier de cuisine pour enfants."\nBesoin identifié : "Les parents veulent des recettes sans allergènes."'
    },
    {
      title: 'Sociocratie (consentement)',
      people: '4 à 12',
      time: '30-45 min',
      keywords: '#Décision #Consentement #Inclusion',
      presentation: 'Proposez un plan et ajustez-le jusqu\'à ce que personne ne s\'y oppose (consentement ≠ consensus). Chaque membre peut exprimer ses objections (avec des arguments constructifs) pour améliorer la proposition.\nCette méthode garantit que tout le monde est entendu et engagé.',
      example: 'Projet : "Lancer un club de lecture."\nObjection : "Les horaires ne conviennent pas à tout le monde."\nSolution : "Alterner les jours de réunion."'
    }
  ];

  cards3 = [
    {
      title: 'Par compétences',
      people: '3 à 10',
      keywords: '#Répartition #Efficacité #Autonomie',
      presentation: 'Cette méthode permet de répartir les tâches en fonction des compétences et des envies de chacun. Voici comment faire :\n\nLister les tâches nécessaires pour le projet.\nIdentifier les compétences de chaque membre (ex. : "graphisme", "organisation").\nAttribuer les tâches en fonction des affinités.\nEstimer le temps nécessaire pour chaque tâche et fixer des deadlines.\nPrévoir un feedback à la fin pour ajuster si besoin.',
      example: 'Projet : "Organiser un concert."\nTâche : "Créer l\'affiche" → Attribuée à Alice (compétence : graphisme).\nDeadline : "Dans 1 semaine."'
    },
    {
      title: 'RACI',
      people: '4 à 12',
      keywords: '#Rôles #Clarté #Responsabilités',
      presentation: 'La matrice RACI clarifie les rôles pour chaque tâche :\n\nResponsable : Qui fait le travail.\nApprobateur : Qui valide la décision.\nConsulté : Qui donne son avis.\nInformé : Qui est tenu au courant.\n\nCette méthode évite les chevauchements et les malentendus.',
      example: 'Projet : "Lancer un blog."\nTâche : "Écrire un article"\nResponsable : Bob\nApprobateur : Alice\nConsulté : Charlie (expert SEO)\nInformé : Tout le groupe'
    },
    {
      title: 'Kanban collaboratif',
      people: '2 à 10',
      keywords: '#Visualisation #Avancement #Flexibilité',
      presentation: 'Un tableau visuel avec 3 colonnes :\n\nÀ faire : Tâches à réaliser.\nEn cours : Tâches en progression.\nTerminé : Tâches accomplies.\n\nChaque membre déplace ses tâches au fur et à mesure. Idéal pour un suivi en temps réel et une transparence totale.',
      example: 'Projet : "Créer un potager."\nColonne "À faire" : "Acheter des graines" → Déplacée en "En cours" par Bob.'
    },
    {
      title: 'Holacratie (rôles circulaires)',
      people: '5 à 12',
      keywords: '#Autonomie #Rôles #Agilité',
      presentation: 'Au lieu de tâches fixes, définissez des rôles avec des missions claires (ex. : "coordinateur", "créatif"). Chaque rôle a une autonomie pour prendre des décisions dans son domaine. Les rôles peuvent évoluer selon les besoins du projet.',
      example: 'Projet : "Monter une pièce de théâtre."\nRôle : "Metteur en scène" → Mission : "Diriger les répétitions et valider le script."'
    },
    {
      title: 'Poker Planning',
      people: '3 à 8',
      keywords: '#Estimation #Consensus #Temps',
      presentation: 'Estimez le temps ou la complexité des tâches en utilisant des cartes numérotées (ex. : suite de Fibonacci : 1, 2, 3, 5, 8). Chaque membre vote anonymement, puis le groupe discute pour trouver un consensus.',
      example: 'Tâche : "Créer un site web."\nEstimations : Alice (5), Bob (8), Charlie (3).\nDécision : "On se met d\'accord sur 5 jours."'
    },
    {
      title: 'Feedback 360°',
      people: '3 à 10',
      keywords: '#Amélioration #Communication #Confiance',
      presentation: 'À la fin d\'une étape ou du projet, chaque membre donne un feedback constructif aux autres :\n\n1 chose appréciée (ex. : "Tu as été très organisé.").\n1 suggestion d\'amélioration (ex. : "On pourrait mieux répartir les tâches.").\n\nCette méthode renforce la confiance et l\'amélioration continue.',
      example: 'Feedback pour Alice : "J\'ai adoré ta créativité ! Peut-être qu\'on pourrait planifier plus de temps pour tes idées."'
    },
    {
      title: 'Check-in/Check-out',
      people: '2 à 12',
      keywords: '#ÉtatD\'esprit #Cohésion #Suivi',
      presentation: 'Check-in (début) : Chacun partage son état d\'esprit (ex. : "Je suis motivé mais un peu stressé.").\nCheck-out (fin) : Chacun résume ce qu\'il a fait et comment il se sent (ex. : "J\'ai terminé ma tâche, je me sens fier !").\n\nIdéal pour maintenir la cohésion et ajuster le travail en fonction de l\'énergie du groupe.',
      example: 'Check-in : "Aujourd\'hui, je suis un peu fatigué mais prêt à aider."\nCheck-out : "J\'ai finalisé l\'affiche, je suis content du résultat !"'
    },
    {
      title: 'Roadmap visuelle',
      people: '2 à 10',
      keywords: '#Timeline #Étapes #Responsabilités',
      presentation: 'Créez une frise chronologique avec les étapes clés du projet. Chaque participant ajoute :\n\nLes tâches (ex. : "Réserver un lieu").\nLes deadlines (ex. : "D\'ici 2 semaines").\nLes responsables (ex. : "Alice s\'en occupe").\n\nIdéal pour visualiser l\'avancement et clarifier qui fait quoi.',
      example: 'Projet : "Organiser un voyage."\nÉtape 1 : "Choisir la destination (d\'ici vendredi)."\nResponsable : "Bob."'
    }
  ];

  showCards(section: number) {
    this.currentView = `cards${section}`;
  }

  backToMain() {
    this.currentView = 'main';
  }

  openCard(card: any) {
    this.selectedCard = card;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedCard = null;
  }

  getCurrentCards() {
    switch(this.currentView) {
      case 'cards1': return this.cards1;
      case 'cards2': return this.cards2;
      case 'cards3': return this.cards3;
      default: return [];
    }
  }

  getRandomChallenge() {
    const randomIndex = Math.floor(Math.random() * this.challenges.length);
    this.currentChallenge = this.challenges[randomIndex];
  }

  ngOnInit() {
    try {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        this.currentLanguage = savedLanguage;
      }
    } catch (e) {
      console.warn('localStorage not available');
    }
  }
}
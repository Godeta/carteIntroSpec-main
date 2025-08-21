import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink],
  standalone: true,
})
export class CardComponent implements AfterViewInit {
  @ViewChild('cardElement') cardElement!: ElementRef;  // Get reference to the card element in the DOM

  cards = [
    // Léger category
    { name: 'L1', category: 'Léger', question: 'Si tu pouvais adopter un animal improbable (comme un lama ou un hérisson), que choisirais-tu ?' },
    { name: 'L2', category: 'Léger', question: 'Un animal que tu n\'adopterai certainement PAS.' },
    { name: 'L3', category: 'Léger', question: 'Si tu devais déménager demain dans un autre pays, lequel choisirais-tu et pourquoi ?' },
    { name: 'L4', category: 'Léger', question: 'Un pays où tu n\'irai absolument pas ?' },
    { name: 'L5', category: 'Léger', question: 'Quel personnage de fiction aimerai-tu voir dans la vraie vie ?' },
    { name: 'L6', category: 'Léger', question: 'Ne souhaiterai tu absolument pas voir dans la vrai vie ?' },
    { name: 'L7', category: 'Léger', question: 'Plutôt café ou thé ? Chien ou chat ? Chocolatine ou pain au chocolat ?' },
    { name: 'L8', category: 'Léger', question: 'Pichet, cruche, carafe, broc d\'eau...' },
    { name: 'L9', category: 'Léger', question: 'Quel est le pire cadeau que tu n\'aies jamais reçu ?' },
    { name: 'L10', category: 'Léger', question: 'Le meilleur cadeau ?' },
    { name: 'L11', category: 'Léger', question: 'C\'est quoi ton plat préféré ? Si tu devais manger un seul plat tous les jours que choisirai tu ?' },
    { name: 'L12', category: 'Léger', question: 'Le plat que tu détestes le plus ? Un plat que tu ne mangerai plus jamais ?' },
    { name: 'L13', category: 'Léger', question: 'Parmis les joueurs, qui te semble le plus à même de survivre plusieurs semaines seul en forêt ?' },
    { name: 'L14', category: 'Léger', question: 'Qui s\'en sortirait le moins bien ?' },
    { name: 'L15', category: 'Léger', question: 'Cite un film qui t\'as bouleversé, fait vivre des émotions fortes.' },
    { name: 'L16', category: 'Léger', question: 'Un film qui t\'as ennuyé à mourir.' },
    { name: 'L17', category: 'Léger', question: 'Parles d\'un livre que tu as adoré !' },
    { name: 'L18', category: 'Léger', question: 'Un bouquin que tu aurai du lire.' },

    // Situation category
    { name: 'S1', category: 'Situation', question: 'On te propose une activité un peu particulière que tu n\'as jamais faite, qu\'est ce que tu accepterai ?' },
    { name: 'S2', category: 'Situation', question: 'Qu\'est ce que tu n\'accepterai pas ?' },
    { name: 'S3', category: 'Situation', question: 'Qu\'elle la chose la plus embarrassante qui te sois arrivé récemment ?' },
    { name: 'S4', category: 'Situation', question: 'La plus glorieuse ?' },
    { name: 'S5', category: 'Situation', question: 'Tu es au milieu d\'un débat animé avec des amis et tu es en désaccord. Comment te fais tu entendre ou au contraire préfères tu rester silencieux ?' },
    { name: 'S6', category: 'Situation', question: 'Tu trouves un portefeuille rempli d\'argent dans la rue avec une carte d\'identité. Que fais-tu ?' },
    { name: 'S7', category: 'Situation', question: 'As tu déjà volé de l\'argent ? Dans quelles circonstances le ferai-tu ?' },
    { name: 'S8', category: 'Situation', question: 'Tu es invité chez quelqu\'un et tu n\'aimes pas ce qu\'il a cuisiné. Tu te forces à manger ? Trouves une excuse ? Lui dit honnêtement ?' },
    { name: 'S9', category: 'Situation', question: 'Ton enfant n\'aimes pas et ne mange pas. Que fais tu ?' },
    { name: 'S10', category: 'Situation', question: 'Tu es invité(e) à une fête où tu ne connais qu\'une seule personne. Que fais-tu pour te sentir à l\'aise ?' },
    { name: 'S11', category: 'Situation', question: 'Tu connais tout le monde dans la fête, qu\'est ce qui te mettrai mal à l\'aise ?' },
    { name: 'S12', category: 'Situation', question: 'Tu as un jour de congé imprévu demain. Comment le passes-tu ?' },
    { name: 'S13', category: 'Situation', question: 'Ton partenaire de vie t\'a trompé lors d\'une soirée. Que fais-tu ? Lui donnes-tu une seconde chance ?' },
    { name: 'S14', category: 'Situation', question: 'Tu trompes ton partenaire de vie à une soirée, que fais tu ? Est-ce que tu avoues tout ?' },

    // Anecdote category
    { name: 'A1', category: 'Anecdote', question: 'Raconte un souvenir lié à un professeur qui t\'a marqué.' },
    { name: 'A2', category: 'Anecdote', question: 'Un autre élève avec qui tu n\'es plus en contact aujourd\'hui mais qui t\'as laissé un souvenir fort.' },
    { name: 'A3', category: 'Anecdote', question: 'Y a t\'il un objet que tu gardes précieusement ? Pourquoi ?' },
    { name: 'A4', category: 'Anecdote', question: 'Un objet important que tu as perdu ou cassé.' },
    { name: 'A5', category: 'Anecdote', question: 'Parle d\'un espace naturel où tu allais souvent quand tu étais enfant.' },
    { name: 'A6', category: 'Anecdote', question: 'Une émission télé ou radio qui te viens à l\'esprit.' },
    { name: 'A7', category: 'Anecdote', question: 'Parle d\'un voyage dont tu as beaucoup de souvenirs.' },
    { name: 'A8', category: 'Anecdote', question: 'Un rêve que tu as fait la nuit et que tu n\'as jamais oublié.' },
    { name: 'A9', category: 'Anecdote', question: 'Décris comme se passait les grosses réunions de famille. Vous faisiez quoi ?' },
    { name: 'A10', category: 'Anecdote', question: 'Les jeux à la cours de récréation avec les autres gamins.' },
    { name: 'A11', category: 'Anecdote', question: 'Une fête que tu adores ou a adoré ?' },
    { name: 'A12', category: 'Anecdote', question: 'Un soir où tu as traversé une tempête.' },
    { name: 'A13', category: 'Anecdote', question: 'Parle d\'une spécialité d\'une région qui te tiens à cœur.' },
    { name: 'A14', category: 'Anecdote', question: 'Une musique que tu écoutes quand tu vas mal.' },
    { name: 'A15', category: 'Anecdote', question: 'Quel était ton premier boulot et comment tu l\'as vécu ?' },
    { name: 'A16', category: 'Anecdote', question: 'Parle de ton premier amour (pas forcément réciproque).' },

    // Valeurs category
    { name: 'V1', category: 'Valeurs', question: 'Qu\'est-ce qui est le plus important pour toi dans une relation amoureuse ?' },
    { name: 'V2', category: 'Valeurs', question: 'Le moins important ?' },
    { name: 'V3', category: 'Valeurs', question: 'Quel défaut te dérange le plus chez les autres ?' },
    { name: 'V4', category: 'Valeurs', question: 'Ne te déranges pas vraiment ?' },
    { name: 'V5', category: 'Valeurs', question: 'Dans quelle situation te sens-tu le plus vivant/épanoui ?' },
    { name: 'V6', category: 'Valeurs', question: 'Dans quelle situation te sens-tu le plus mal à l\'aise/diminué ?' },
    { name: 'V7', category: 'Valeurs', question: 'Quel est le plus grand accomplissement dans ta vie ?' },
    { name: 'V8', category: 'Valeurs', question: 'Le plus gros échec ?' },
    { name: 'V9', category: 'Valeurs', question: 'Qu\'est ce que tu valorises le plus dans une amitié ?' },
    { name: 'V10', category: 'Valeurs', question: 'Quel est ton souvenir le plus précieux ?' },
    { name: 'V11', category: 'Valeurs', question: 'Le moins important ?' },
    { name: 'V12', category: 'Valeurs', question: 'Un souvenir d\'un cauchemar ou d\'un moment terrifiant ?' },
    { name: 'V13', category: 'Valeurs', question: 'Comment te sens tu dans ta relation avec ta mère ?' },
    { name: 'V14', category: 'Valeurs', question: 'Avec ton père ?' },
    { name: 'V15', category: 'Valeurs', question: 'Si tu savais que tu n\'avais plus qu\'un an à vivre est-ce que tu changerais quoi que ce soit à ta vie actuelle ? Pourquoi ?' },
    { name: 'V16', category: 'Valeurs', question: 'Si on t\'annonçais qu\'il te restait exactement 20 ans à vivre ?' },

    // Ethique category
    { name: 'E1', category: 'Ethique', question: 'Donne tu plus de valeurs à certaines vies humaines que d\'autres ?' },
    { name: 'E2', category: 'Ethique', question: 'Y a t\'il un être vivant que tu exterminerais complètement ou partiellement si tu en avais le pouvoir ?' },
    { name: 'E3', category: 'Ethique', question: 'Quel sens donnes-tu à ta vie ?' },
    { name: 'E4', category: 'Ethique', question: 'Qu\'imagines tu qu\'il se passe après la mort ?' },
    { name: 'E5', category: 'Ethique', question: 'Un train avance et tu peux changer son rail de direction avec un levier. Si tu ne fais rien il écrase un de tes proches. Si tu tires le levier il écrase 5 inconnus. Que fais tu ?' },
    { name: 'E6', category: 'Ethique', question: 'Toi ou 5 autres.' },
    { name: 'E7', category: 'Ethique', question: 'La vie que tu mènes te semble t\'elle en accord avec tes valeurs ? Pourquoi ?' },
    { name: 'E8', category: 'Ethique', question: 'La société dans laquelle tu vis est elle en accord avec tes valeurs ? Pourquoi ?' },
    { name: 'E9', category: 'Ethique', question: 'Un cambrioleur récidiviste est admis inconscient à l\'hôpital. Le laisser mourir pour utiliser ses organes sauverait 3 personnes. Que choisiraient-ils ?' },
    { name: 'E10', category: 'Ethique', question: 'Et si c\'est un jeune infirmier qui donne son accord pour se sacrifier.' },
    { name: 'E11', category: 'Ethique', question: 'Comment vois tu la disparition de certains métiers suite aux avancées technologiques (par exemple l\'IA et les robots) ?' },
    { name: 'E12', category: 'Ethique', question: 'Si tu étais le patron d\'une entreprise quel choix ferai-tu ?' },
    { name: 'E13', category: 'Ethique', question: 'Ta famille proche a commis un crime effroyable envers un inconnu, restes tu en contact avec eux ?' },
    { name: 'E14', category: 'Ethique', question: 'Crois tu au pardon, à la seconde chance pour les crimes lourds ?' },
    { name: 'E15', category: 'Ethique', question: 'Tu es dans Matrix, tu choisis la pillule pour continuer à profiter de cette vie virtuelle ou tu reviens dans une réalité difficile ?' },
    { name: 'E16', category: 'Ethique', question: 'Es tu pour l\'avortement ? Jusqu\'à quel âge ?' },

    // Futur category
    { name: 'F1', category: 'Futur', question: 'Imagine ton futur idéal, comment vivrai tu?' },
    { name: 'F2', category: 'Futur', question: 'Quel serait ton pire futur envisageable ?' },
    { name: 'F3', category: 'Futur', question: 'Où te vois tu vivre dans 10 ans et pourquoi ?' },
    { name: 'F4', category: 'Futur', question: 'Où ne vivrai-tu certainement pas dans 10 ans et pourquoi ?' },
    { name: 'F5', category: 'Futur', question: 'Quel conseil donnerai tu à une personne qui vivrait dans le futur 100 ans après toi ?' },
    { name: 'F6', category: 'Futur', question: 'Quel conseil aimerai-tu recevoir venant d\'une personne d\'un lointain futur ?' },
    { name: 'F7', category: 'Futur', question: 'Comment souhaiterai-tu mourir ?' },
    { name: 'F8', category: 'Futur', question: 'Une mort que tu souhaiterai éviter en particulier ?' },
    { name: 'F9', category: 'Futur', question: 'Y a-t-il quelque chose qui te fait particulièrement peur à l\'avenir ?' },
    { name: 'F10', category: 'Futur', question: 'Que souhaiterai tu léguer aux générations futures ?' },
    { name: 'F11', category: 'Futur', question: 'Une chose que tu attends avec impatience ?' },
    { name: 'F12', category: 'Futur', question: 'Une chose que tu ne voudrais pas transmettre ?' },
    { name: 'F13', category: 'Futur', question: 'Y a-t-il un endroit dans le monde que tu souhaiterais visiter un jour ?' },
    { name: 'F14', category: 'Futur', question: 'Un endroit où tu vas régulièrement et que tu aimerais ne plus jamais y retourner ?' },
    { name: 'F15', category: 'Futur', question: 'Si tu pouvais voyager dans le futur et rencontrer « toi » en fin de vie, quelle serait ta première question ?' },
    { name: 'F16', category: 'Futur', question: 'Si tu pouvais rencontrer "toi" d\'un passé lointain ?' },

    // Ensemble category
    { name: 'EN1', category: 'Ensemble', question: 'Fais 3 déclarations avec nous, que ce soient des points communs ou une émotion que vous ressentez.' },
    { name: 'EN2', category: 'Ensemble', question: 'Cite 3 différences entre vous qui sont appréciables.' },
    { name: 'EN3', category: 'Ensemble', question: 'Si tu venais à mourir ce soir sans pouvoir communiquer avec qui que ce soit, qu\'est-ce que tu regretterais de ne pas avoir dit ? Pourquoi ne l\'as-tu pas dit avant ?' },
    { name: 'EN4', category: 'Ensemble', question: 'Ce que tu n\'aurais pas du dire ?' },
    { name: 'EN5', category: 'Ensemble', question: 'Dis 5 choses que tu apprécies à propos de quelqu\'un dans la pièce.' },
    { name: 'EN6', category: 'Ensemble', question: 'Dis 1 chose que tu apprécies pour chaque personne dans la pièce.' },
    { name: 'EN7', category: 'Ensemble', question: 'Complète la phrase "J\'aimerai avoir quelqu\'un avec qui..."' },
    { name: 'EN8', category: 'Ensemble', question: 'Cite une chose que tu apprécies faire avec les personnes présentes ici.' },
    { name: 'EN9', category: 'Ensemble', question: 'Quelle est la dernière fois que tu as pleuré devant quelqu\'un ?' },
    { name: 'EN10', category: 'Ensemble', question: 'La dernière fois où tu as pleuré seul ?' },
    { name: 'EN11', category: 'Ensemble', question: 'Demande à quelqu\'un ce qu\'il pense de toi. De votre relation ?' },
    { name: 'EN12', category: 'Ensemble', question: 'Dis ce que tu penses de quelqu\'un et de ta relation avec cette personne.' },
    { name: 'EN13', category: 'Ensemble', question: 'Parmi toutes les personnes dans ta famille, quelle mort te choquerait le plus et pourquoi ?' },
    { name: 'EN14', category: 'Ensemble', question: 'Quelle naissance t\'a rendu le plus heureux ?' },
    { name: 'EN15', category: 'Ensemble', question: 'Qu\'est ce qui peut t\'énerver ? As-tu des souvenirs de la dernière fois où tu as été en colère ?' },
    { name: 'EN16', category: 'Ensemble', question: 'De la dernière fois où tu as énervé un proche ?' }
];

  currentCardIndex: number = 0;
  selectedCategory: string = 'all';
  uniqueCategories: string[] = [];
  filteredCards = this.cards;
  cardsPlayed: number = 0;
  playedCardNames: string[] = [];

  constructor(
    private gestureCtrl: GestureController,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.uniqueCategories = [...new Set(this.cards.map(card => card.category))];
    this.shuffleArray(this.cards);
    this.filteredCards = [...this.cards];
  }

  ngAfterViewInit() {
    this.setupSwipeGestures();
  }

  get currentCard() {
    return this.filteredCards[this.currentCardIndex];
  }

  get currentCardColor() {
    const colors: { [key: string]: string } = { // Define index signature
      Léger: '#ccffcc', // green
      Situation: '#ffcccb', // chartreuse
      Anecdote: '#ffebcc', // yellow
      Valeurs: '#e6ccff', // orange
      Ethique: '#ccccff', // red
      Futur: '#ffcccb', // pink
      Ensemble: '#ffebcc', // blue

      // Add more colors for other categories
    };
    return colors[this.currentCard.category] || '#ffffff';
  }


  onCategoryChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCategory = selectedValue;
    this.filterCards();
  }

  filterCards() {
    if (this.selectedCategory === 'all') {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter(card => card.category === this.selectedCategory);
    }
    this.shuffleArray(this.filteredCards);
    this.currentCardIndex = 0; // Reset index when category changes
  }

  setupSwipeGestures() {
    // Create a new gesture handler
    const gesture = this.gestureCtrl.create({
      el: this.cardElement.nativeElement, // Attach gesture to our card element
      threshold: 15, // Minimum movement before gesture is recognized
      gestureName: 'swipe',

      // When user starts touching/clicking
      onStart: () => {
        // Add class to disable transitions during swipe for smooth movement
        this.cardElement.nativeElement.classList.add('swiping');
      },

      // During the swipe movement
      onMove: (ev) => {
        // Make the card follow the finger/cursor position
        this.cardElement.nativeElement.style.transform = `translateX(${ev.deltaX}px)`;
      },

      // When user releases the touch/click
      onEnd: (ev) => {
        // Remove the swiping class to re-enable transitions
        this.cardElement.nativeElement.classList.remove('swiping');

        const swipeThreshold = 100; // Minimum distance for a swipe to count

        // Check if swipe was long enough
        if (Math.abs(ev.deltaX) >= swipeThreshold) {
          if (ev.deltaX > 0) { // Swiped right
            console.log('Swiping right to previous card');
            this.cardElement.nativeElement.classList.add('card-exit-right');

            // Wait for animation to complete before changing card
            setTimeout(() => {
              console.log('Swiping change !!! to previous card');
              this.previousCard();
              this.cardElement.nativeElement.classList.remove('card-exit-right');
              // Force Angular to update the view - crucial for setTimeout
              this.changeDetectorRef.detectChanges();
            }, 300); // 300ms matches CSS animation duration
          } else { // Swiped left
            console.log('Swiping left to next card');
            this.cardElement.nativeElement.classList.add('card-exit-left');

            setTimeout(() => {
              console.log('Swiping change !!! to next card');
              this.nextCard();
              this.cardElement.nativeElement.classList.remove('card-exit-left');
              // Force Angular to update the view
              this.changeDetectorRef.detectChanges();
            }, 300);
          }
        } else {
          // If swipe wasn't long enough, reset card position
          console.log('Swipe not significant enough, resetting position');
          this.cardElement.nativeElement.style.transform = '';
        }
      },
    });
    gesture.enable(); // Activate the gesture handler
  }

  nextCard() {
    console.log('changing card !!!');
    // Add current card name to played cards
    this.playedCardNames.push(this.currentCard.name);
    // Calculate next index with wraparound
    this.currentCardIndex = (this.currentCardIndex + 1) % this.filteredCards.length;
    this.cardsPlayed++;
    if (this.cardElement) {
      // Reset any leftover transform
      this.cardElement.nativeElement.style.transform = '';
    }
    // Force view update
    this.changeDetectorRef.detectChanges();
  }

  previousCard() {
    // Calculate previous index with wraparound
    this.currentCardIndex = (this.currentCardIndex - 1 + this.filteredCards.length) % this.filteredCards.length;
    if (this.cardElement) {
      // Reset any leftover transform
      this.cardElement.nativeElement.style.transform = '';
    }
    // Force view update
    this.changeDetectorRef.detectChanges();
  }
  // Popup states
  showRules = false;
  showActionCard = false;

// Action card data
currentActionCard = {
  title: 'Action par défaut',
  description: 'Ceci est l\'action de départ.'
};

availableActionCards = [
  {
    title: 'Questions enchaînées',
    description: 'Commence ta réponse en partant de la réponse du joueur précédent.'
  },
  {
    title: 'Réponses en 30 secondes',
    description: 'Réponds en 30s à une liste de questions créées par les joueurs (ex : ton 2ème prénom, ton avant-dernier repas, l\'âge de ta maman...).'
  },
  {
    title: 'Détail pour un autre',
    description: 'Un joueur répond sans détail, tu complètes en expliquant sa façon de penser aux autres.'
  },
  {
    title: 'Qualifier la réponse',
    description: 'Juge la réponse selon certains critères (touchant, drôle, étonnant...).'
  },
  {
    title: 'Petite histoire',
    description: 'Invente une courte histoire incluant ta réponse (fable, short, nouvelle...).'
  },
  {
    title: 'Réponse anonyme',
    description: 'Écris ta réponse, les autres doivent deviner qui est l\'auteur.'
  },
  {
    title: 'Mot imposé',
    description: 'Place un mot imposé dans ta réponse.'
  },
  {
    title: 'Réponds pour un autre',
    description: 'Réponds à la place d\'un joueur, puis il explique son vrai avis.'
  },
  {
    title: 'Jeu de rôle collectif',
    description: 'Chaque joueur choisit une célébrité ou un personnage connu. Pendant le tour, chacun répond dans son rôle. À la fin, on devine les personnages.'
  },
  {
    title: 'Invente une question',
    description: 'Propose une nouvelle question sur le thème en cours.'
  },
  {
    title: 'Vérité ou inverse',
    description: 'Réponds soit sincèrement, soit à l\'inverse de ce que tu penses. Les autres doivent deviner.'
  },
  {
    title: 'Valeur secrète',
    description: 'Choisis un chiffre (1–10). Réponds en construisant une situation avec ce chiffre. Les autres doivent deviner lequel c\'était.'
  },
  {
    title: 'J\'ai déjà / Je n\'ai jamais',
    description: 'Transforme la question en une phrase "J\'ai déjà... / Je n\'ai jamais...". Essaie d\'être le seul ou presque à l\'avoir vécu.'
  },
  {
    title: 'Choix collectif ou individuel',
    description: 'Choisis de poser la question à une seule personne, ou demande à tous les autres d\'y répondre collectivement pour quelqu\'un.'
  },
  {
    title: 'Les 5 couleurs',
    description: 'Choisis une façon de répondre : 🔴 Relation (parle comme à un ami proche, compliments, gestes) 🟢 Action (mime, bouge) 🔵 Clarté (réflexion profonde) 🟡 Joie (théâtral, joyeux) ⚪ Paix (chuchote ou parle lentement).'
  }
];


  // Popup toggles
  toggleRules() {
    this.showRules = !this.showRules;
  }

  toggleActionCard() {
    this.showActionCard = !this.showActionCard;
  }

  // Random action card
  getRandomActionCard() {
    const randomIndex = Math.floor(Math.random() * this.availableActionCards.length);
    this.currentActionCard = this.availableActionCards[randomIndex];
  }

  // Scroll to info area
  scrollToInfo() {
    const infoArea = document.querySelector('.info-area');
    if (infoArea) {
      infoArea.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Shuffle array method
  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

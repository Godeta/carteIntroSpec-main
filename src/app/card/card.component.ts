import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink, FormsModule],
  standalone: true,
})
export class CardComponent implements AfterViewInit {
  @ViewChild('cardElement') cardElement!: ElementRef;
  
  // Game mode properties
  gameMode: string = 'Jeu';
  players: string[] = [];
  currentPlayerIndex: number = 0;
  currentTurn: number = 1;
  cardsPlayedThisTurn: number = 0;
  gameCategories: string[] = ['Léger', 'Situation', 'Anecdote', 'Valeurs', 'Ethique', 'Futur', 'Ensemble'];
  currentCategoryIndex: number = 0;
  gameStarted: boolean = false;
  showPlayerSetup: boolean = false;
  showGameEnd: boolean = false;
  showNextTurn: boolean = false;
  
  // Jeu mode deck management
  jeuModeDeck: any[] = [];
  jeuModeCardIndex: number = 0;

  cards = [
    // Léger category
{ name: 'L1', category: 'Léger', question: 'Un métier que tu aurai pu faire dans une autre vie ?' },
{ name: 'L2', category: 'Léger', question: 'Un métier que tu ne ferai jamais c’est sûr !' },
{ name: 'L3', category: 'Léger', question: 'Si tu pouvais maîtriser parfaitement un instrument de musique, lequel choisirais-tu ?' },
{ name: 'L4', category: 'Léger', question: 'Quel instrument ne voudrais-tu jamais apprendre ?' },
{ name: 'L5', category: 'Léger', question: 'Si tu pouvais parler couramment une autre langue, laquelle choisirais-tu ?' },
{ name: 'L6', category: 'Léger', question: 'As tu une langue que tu as commencé à apprendre et que tu as oublié ?' },
{ name: 'L7', category: 'Léger', question: 'Qui parmis les joueurs te semble le plus susceptible d’aller en soirée le week-end ?' },
{ name: 'L8', category: 'Léger', question: 'De rester dans sa chambre le week-end ?' },
{ name: 'L9', category: 'Léger', question: 'Si tu pouvais dîner avec une personne, vivante ou morte, qui choisirais-tu ?' },
{ name: 'L10', category: 'Léger', question: 'Si tu devais choisir une personne que tu vois rarement, avec qui tu devrais cohabiter pour la vie ?' },
{ name: 'L11', category: 'Léger', question: 'Aimerais-tu être connu ? Si oui, comment ?' },
{ name: 'L12', category: 'Léger', question: 'Un sujet à propos de toi que tu souhaiterai garder secret du grand public ?' },
{ name: 'L13', category: 'Léger', question: 'Avant de passer un appel, répètes-tu parfois ce que tu vas dire ?' },
{ name: 'L14', category: 'Léger', question: 'Est ce que tu as des discussions à voix haute tout seul ?' },
{ name: 'L15', category: 'Léger', question: 'Si tu pouvais choisir une époque pour y vivre (passée ou future), laquelle choisirais-tu ?' },
{ name: 'L16', category: 'Léger', question: 'Une époque en particulier où tu ne souhaiterai pas vivre ?' },

// Situation category
{ name: 'S1', category: 'Situation', question: 'Tu es dans une file d’attente interminable. Que fais-tu pour t’occuper ?' },
{ name: 'S2', category: 'Situation', question: 'Tu es seul, sans rien dans un grand jardin, et tu as 1 journée à passer. Que fais tu ? Passes tu une bonne journée ?' },
{ name: 'S3', category: 'Situation', question: 'Tu as un exam / évènement stressant à préparer et des amis rarement disponibles te proposent de sortir que fais tu ?' },
{ name: 'S4', category: 'Situation', question: 'Nouveau virus ! Tu es confiné 3 mois, qu’est ce que tu fais ?' },
{ name: 'S5', category: 'Situation', question: 'Une personne inconnue te raconte sa vie dans les transports en commun. Comment réagis-tu ?' },
{ name: 'S6', category: 'Situation', question: 'Tu racontes ta vie à un ami et il ne suis pas, que fais tu ?' },
{ name: 'S7', category: 'Situation', question: 'Tu reçois une offre d\'emploi dans une autre ville, loin de ta famille et de tes amis.' },
{ name: 'S8', category: 'Situation', question: 'Tu sais que tu vas rater ton examen sur papier. Pars-tu avant la fin du temps imparti ?' },
{ name: 'S9', category: 'Situation', question: 'Tu deviens millionaire en jouant au loto.' },
{ name: 'S10', category: 'Situation', question: 'Tu es subitement sans argent et sans logement.' },
{ name: 'S11', category: 'Situation', question: 'Ton travail est agréable, bien payé mais c’est pour une entreprise qui n’est pas en accord avec tes valeurs morales.' },
{ name: 'S12', category: 'Situation', question: 'Tu es payé au SMIC mais c’est un travail dont tu es fier.' },
{ name: 'S13', category: 'Situation', question: 'Tu es en train de cuisiner et tu réalises à la moitié du gateau que tu n’as pas les bons ingrédients.' },
{ name: 'S14', category: 'Situation', question: 'Tu as fait un super gateau mais tes proches sont difficiles et n’en veulent pas.' },
{ name: 'S15', category: 'Situation', question: 'Tu es en train de faire une présentation et tu oublies complètement ce que tu voulais dire.' },
{ name: 'S16', category: 'Situation', question: 'Ton pote est en train de raconter n’importe quoi dans la présentation.' },

// Anecdotes category
{ name: 'A1', category: 'Anecdotes', question: 'Un animal que tu as connu avec lequel tu avais un lien fort.' },
{ name: 'A2', category: 'Anecdotes', question: 'Une bonne chose que tu as fait enfant dont tes proches étaient fiers.' },
{ name: 'A3', category: 'Anecdotes', question: 'Un repas inoubliable pour le meilleur ou pour le pire.' },
{ name: 'A4', category: 'Anecdotes', question: 'Un endroit particulièrement confortable ou au contraire inconfortable où tu as passé une nuit.' },
{ name: 'A5', category: 'Anecdotes', question: 'Un anniversaire qui t’as marqué ? Et qu’elles étaient les activités d’anniversaires que tu as pu faire ?' },
{ name: 'A6', category: 'Anecdotes', question: 'Une boisson dont tu as raffolé enfant.' },
{ name: 'A7', category: 'Anecdotes', question: 'Un souvenir d’un collègue qui t’as marqué.' },
{ name: 'A8', category: 'Anecdotes', question: 'Le plus gros bouquet de fleurs que t’as jamais vu.' },
{ name: 'A9', category: 'Anecdotes', question: 'La 1ère fois que tu as bu de l’alcool.' },
{ name: 'A10', category: 'Anecdotes', question: 'Te souviens-tu d’un spectacle auquel tu as participé ?' },
{ name: 'A11', category: 'Anecdotes', question: 'As tu un souvenir particulier avec le père noël ?' },
{ name: 'A12', category: 'Anecdotes', question: 'Comment as tu vécu l’apprentissage de la conduite (vélo voiture, moto...).' },
{ name: 'A13', category: 'Anecdotes', question: 'Un souvenir d’une fois où tu étais malade et que quelqu’un s’est occupé de toi.' },
{ name: 'A14', category: 'Anecdotes', question: 'Un oncle ou une tante qui t’as fait beaucoup rire.' },
{ name: 'A15', category: 'Anecdotes', question: 'Une odeur qui te rappelle des souvenirs.' },
{ name: 'A16', category: 'Anecdotes', question: 'Tes plus lointains souvenirs d’avoir dormi chez des copains' },

// Valeurs category
{ name: 'V1', category: 'Valeurs', question: 'Si une boule de cristal pouvait te dire la vérité à propos de toi, de ta vie, du futur ou de n\'importe quoi d\'autre, que voudrais tu savoir ?' },
{ name: 'V2', category: 'Valeurs', question: 'Que souhaiterai tu ne jamais savoir ?' },
{ name: 'V3', category: 'Valeurs', question: 'Quelle est la plus grande leçon que tes parents ou tes proches t\'ont transmise ?' },
{ name: 'V4', category: 'Valeurs', question: 'Y a t’il une leçon particulière que tu as appris seul ?' },
{ name: 'V5', category: 'Valeurs', question: 'Comment définis-tu le bonheur et quelles valeurs y contribuent pour toi ?' },
{ name: 'V6', category: 'Valeurs', question: 'Qu’est ce qui n’est pas top dans ton quotidien / cites certaines de tes mauvaises habitudes ?' },
{ name: 'V7', category: 'Valeurs', question: 'Quelle est l’une des qualités que tu admires le plus chez les autres ?' },
{ name: 'V8', category: 'Valeurs', question: 'Donne une qualité que tu penses avoir ou que l’on t’attribue souvent.' },
{ name: 'V9', category: 'Valeurs', question: 'Quel est l\'endroit où tu te sens le plus chez toi ?' },
{ name: 'V10', category: 'Valeurs', question: 'Quelle taille de lieu de vie te conviens le mieux ? 10 habitants autour ? 100 ? 1000 ? 100 000 ? 10 000 000 ?' },
{ name: 'V11', category: 'Valeurs', question: 'Quel est l’un des plus beaux gestes que l’on ai fait pour toi ? (spontané, amical ou amoureux)' },
{ name: 'V12', category: 'Valeurs', question: 'Un des plus beaux gestes que tu as fait pour quelqu’un d’autre ?' },
{ name: 'V13', category: 'Valeurs', question: 'Quel est le sacrifice que tu serais prêt à faire par amour ?' },
{ name: 'V14', category: 'Valeurs', question: 'Y a t’il un endroit où tu as passé beaucoup de temps mais tu ne t’y sens pas à ta place ?' },
{ name: 'V15', category: 'Valeurs', question: 'Quel est le compliment que tu aimerais recevoir plus souvent ?' },
{ name: 'V16', category: 'Valeurs', question: 'Quelle est la critique que tu as du mal à accepter ou changer ?' },

// Ethique category
{ name: 'E1', category: 'Ethique', question: 'Que penses tu de l’élevage, pour la cosmétique ? pour se nourrir ? Dans quel cas trouves tu cela acceptable ou non ?' },
{ name: 'E2', category: 'Ethique', question: 'Peut-on vraiment rire de tout ?' },
{ name: 'E3', category: 'Ethique', question: 'Tu préfères faire croire à un enfant qu’il a gagné ou tu le bats à plates coutures ?' },
{ name: 'E4', category: 'Ethique', question: 'Pour ou contre l’éducation non violente ? (physique ? psychologique ?)' },
{ name: 'E5', category: 'Ethique', question: 'La chasse est elle légitime ? Dans quel cas ?' },
{ name: 'E6', category: 'Ethique', question: 'Dans une relation de couple long terme qu’est ce que tu refuserai strictement ? (même compte ? vivre séparément ? polygamie ?)' },
{ name: 'E7', category: 'Ethique', question: 'Doit on donner la parole aux extrêmes ? (droite, gauche, autre...) Où limiterai-tu la liberté d’expression ?' },
{ name: 'E8', category: 'Ethique', question: 'Qu’est ce que serait une société utopique pour toi ?' },
{ name: 'E9', category: 'Ethique', question: 'Les logements vides devraient pouvoir être réquisitionnés pour loger des personnes sans abri / étudiants.' },
{ name: 'E10', category: 'Ethique', question: 'Les devoirs à la maison devraient être interdits pour les enfants ?' },
{ name: 'E11', category: 'Ethique', question: 'Accepterais-tu certaines solutions eugénistes ? (implants neuronaux, bras cyborg...)' },
{ name: 'E12', category: 'Ethique', question: 'Un service civique ou militaire devrait être obligatoire en France.' },
{ name: 'E13', category: 'Ethique', question: 'Pour ou contre le clonage ? Les fermes d’animaux génétiquement modifiés pour faire des transplantations d’organes ? (exemple du bébé Fae ?)' },
{ name: 'E14', category: 'Ethique', question: 'Utiliserai-tu le téléporteur de Parfit ?' },
{ name: 'E15', category: 'Ethique', question: 'Une île est infestée de zombies mais il reste des survivants. Lance tu une bombe pour éviter une propagation de la contamination ?' },
{ name: 'E16', category: 'Ethique', question: 'Irais-tu en guerre pour ton pays ?' },

// Futur category
{ name: 'F1', category: 'Futur', question: 'Quels amis ou relations pensent tu que tu auras encore dans 20 ans ?' },
{ name: 'F2', category: 'Futur', question: 'Quelles relations importantes se sont dégradées alors que tu pensais les garder longtemps ?' },
{ name: 'F3', category: 'Futur', question: 'Quelle responsabilité aimerais-tu prendre dans le futur ?' },
{ name: 'F4', category: 'Futur', question: 'Quelle responsabilité refuserais-tu d\'assumer ?' },
{ name: 'F5', category: 'Futur', question: 'Quel rêve d\'enfant voudrais-tu réaliser dans le futur ?' },
{ name: 'F6', category: 'Futur', question: 'Quel rêve d\'enfant as-tu abandonné ?' },
{ name: 'F7', category: 'Futur', question: 'Quelle tradition voudrais tu perpétuer dans le futur ?' },
{ name: 'F8', category: 'Futur', question: 'Quelle tradition voudrais-tu voir disparaître ?' },
{ name: 'F9', category: 'Futur', question: 'Quel impact positif voudrais-tu avoir sur ta communauté ?' },
{ name: 'F10', category: 'Futur', question: 'Quel impact négatif aurais-tu peur d\'avoir sur ta communauté ?' },
{ name: 'F11', category: 'Futur', question: 'Comment est-ce que tu imagines le lieu où tu habites (ville, village...) dans 30 ans ?' },
{ name: 'F12', category: 'Futur', question: 'Comment était-il 30 ans auparavant ?' },
{ name: 'F13', category: 'Futur', question: 'Selon toi, quel objet du quotidien aura beaucoup changé d’ici les prochaines décennies ?' },
{ name: 'F14', category: 'Futur', question: 'Quel objet ne changera pas ?' },
{ name: 'F15', category: 'Futur', question: 'Comment imagines-tu tes repas de famille dans 30 ans ?' },
{ name: 'F16', category: 'Futur', question: 'Comment étaient-ils quand tu étais petit ?' },

// Ensemble category
{ name: 'EN1', category: 'Ensemble', question: 'Y a-t-il quelque chose de spécial que vous aimeriez faire ensemble un jour dans votre vie ?' },
{ name: 'EN2', category: 'Ensemble', question: 'Quelque chose que tu as déjà fait avec quelqu’un dans la pièce et qui tu as apprécié ?' },
{ name: 'EN3', category: 'Ensemble', question: 'Quelle est la personne qui te comprend le mieux ?' },
{ name: 'EN4', category: 'Ensemble', question: 'Y a t’il quelque chose que tu as du mal à faire comprendre aux autres ?' },
{ name: 'EN5', category: 'Ensemble', question: 'De quoi es-tu le plus reconnaissant dans ta vie actuellement ?' },
{ name: 'EN6', category: 'Ensemble', question: 'Qu\'est-ce qui te manque le plus en ce moment ?' },
{ name: 'EN7', category: 'Ensemble', question: 'Quel est ton rêve le plus fou à réaliser avec quelqu\'un ?' },
{ name: 'EN8', category: 'Ensemble', question: 'Quelle est ta plus grande peur dans une relation ?' },
{ name: 'EN9', category: 'Ensemble', question: 'Quel secret aimerais-tu partager avec quelqu\'un ?' },
{ name: 'EN10', category: 'Ensemble', question: 'As tu un secret que tu emporteras avec toi dans la tombe ?' },
{ name: 'EN11', category: 'Ensemble', question: 'Dans quel domaine te sens-tu le plus à l\'aise pour aider les autres ?' },
{ name: 'EN12', category: 'Ensemble', question: 'Dans quelle situation as-tu le plus besoin d\'aide des autres ?' },
{ name: 'EN13', category: 'Ensemble', question: 'Quelle est la 1ère impression que tu as eu de quelqu’un ici qui a évoluée par la suite ?' },
{ name: 'EN14', category: 'Ensemble', question: 'Une première impression qui n’a pas changé, qui s’est confirmée ?' },
{ name: 'EN15', category: 'Ensemble', question: 'Ton meilleur souvenir avec quelqu’un dans cette pièce ?' },
{ name: 'EN16', category: 'Ensemble', question: 'Une anecdote/histoire que quelqu’un a raconté ici et qui t’as marqué ?' },

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
    
    // Check game mode from localStorage (Android compatible)
    try {
      this.gameMode = localStorage.getItem('gameMode') || 'jeu';
    } catch (e) {
      this.gameMode = 'jeu';
    }
    
    console.log('Card component initialized with mode:', this.gameMode);
    
    if (this.gameMode === 'jeu') {
      this.showPlayerSetup = true;
      this.players = ['', ''];
      console.log('Showing player setup');
    } else {
      this.gameStarted = true;
      console.log('Starting game directly');
    }
  }

  ngAfterViewInit() {
    if (this.cardElement) {
      this.setupSwipeGestures();
    }
  }

  get currentCard() {
    if (this.gameMode === 'jeu' && this.jeuModeDeck.length > 0) {
      return this.jeuModeDeck[this.jeuModeCardIndex] || this.jeuModeDeck[0];
    }
    return this.filteredCards[this.currentCardIndex];
  }

  get currentCardColor() {
    const colors: { [key: string]: string } = { // Define index signature
      Léger: '#ccffcc', // green
      Situation: '#edf342ff', // chartreuse
      Anecdote: '#faff2fff', // yellow
      Valeurs: '#ff9c2fff', // orange
      Ethique: '#ff342fff', // red
      Futur: '#ff2f92ff', // pink
      Ensemble: '#2f92ffff', // blue

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
    if (!this.cardElement?.nativeElement) {
      return;
    }
    
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
              console.log('Swiping change !!! to next card');
              this.nextCard();
              this.cardElement.nativeElement.classList.remove('card-exit-right');
              // Force Angular to update the view - crucial for setTimeout
              this.changeDetectorRef.detectChanges();
            }, 300); // 300ms matches CSS animation duration
          } else { // Swiped left
            console.log('Swiping left to next card');
            this.cardElement.nativeElement.classList.add('card-exit-left');

            setTimeout(() => {
              console.log('Swiping change !!! to previous card');
              this.previousCard();
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
    this.playedCardNames.push(this.currentCard.name);
    
    if (this.gameMode === 'jeu') {
      this.jeuModeCardIndex++;
      this.cardsPlayedThisTurn++;
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
      
      if (this.cardsPlayedThisTurn >= this.totalCardsPerTurn) {
        if (this.currentCategoryIndex >= this.gameCategories.length - 1) {
          this.showGameEnd = true;
          return;
        }
        this.showNextTurn = true;
        return;
      }
    } else {
      this.currentCardIndex = (this.currentCardIndex + 1) % this.filteredCards.length;
    }
    
    this.cardsPlayed++;
    
    if (this.cardElement) {
      this.cardElement.nativeElement.style.transform = '';
    }
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

  // Game mode methods
  trackByIndex(index: number): number {
    return index;
  }
  
  updatePlayer(index: number, event: any) {
    this.players[index] = event.target.value;
  }
  
  addPlayer() {
    if (this.players.length < 11) {
      this.players.push('');
    }
  }
  
  removePlayer(index: number) {
    this.players.splice(index, 1);
  }
  
  canStartGame(): boolean {
    return this.players.filter(p => p.trim()).length >= 2;
  }
  
  startGameMode() {
    if (this.canStartGame()) {
      this.players = this.players.filter(p => p.trim());
      this.showPlayerSetup = false;
      this.gameStarted = true;
      this.selectedCategory = this.gameCategories[0];
      
      this.createJeuModeDeck();
      this.getRandomActionCard();
      
      // Setup gestures after view updates
      setTimeout(() => {
        if (this.cardElement) {
          this.setupSwipeGestures();
        }
      }, 100);
    }
  }
  
  nextTurn() {
    this.currentTurn++;
    this.cardsPlayedThisTurn = 0;
    this.currentPlayerIndex = 0;
    this.currentCategoryIndex++;
    this.selectedCategory = this.gameCategories[this.currentCategoryIndex];
    
    if (this.gameMode === 'jeu') {
      this.createJeuModeDeck();
    } else {
      this.filterCards();
    }
    
    this.getRandomActionCard();
    this.showNextTurn = false;
  }
  
  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }
  
  get currentCategory() {
    return this.gameCategories[this.currentCategoryIndex];
  }
  
  restartGame() {
    this.currentTurn = 1;
    this.cardsPlayedThisTurn = 0;
    this.currentPlayerIndex = 0;
    this.currentCategoryIndex = 0;
    this.selectedCategory = this.gameCategories[0];
    this.cardsPlayed = 0;
    this.playedCardNames = [];
    this.currentCardIndex = 0;
    
    this.players = ['', ''];
    this.gameStarted = false;
    this.showPlayerSetup = true;
    this.showNextTurn = false;
    this.showGameEnd = false;
  }
  
  resetLibreMode() {
    this.cardsPlayed = 0;
    this.playedCardNames = [];
    this.currentCardIndex = 0;
    this.selectedCategory = 'all';
    this.shuffleArray(this.cards);
    this.filteredCards = [...this.cards];
  }

  get totalCardsPerTurn(): number {
    return this.players.length < 4 ? this.players.length * 2 : this.players.length;
  }
  
  // Create deck for jeu mode with exact number of cards needed
  private createJeuModeDeck() {
    const categoryCards = this.cards.filter(card => card.category === this.selectedCategory);
    const neededCards = this.totalCardsPerTurn;
    
    // Shuffle and take only the number of cards needed
    this.shuffleArray(categoryCards);
    this.jeuModeDeck = categoryCards.slice(0, neededCards);
    this.jeuModeCardIndex = 0;
  }
  
  // Shuffle array method
  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

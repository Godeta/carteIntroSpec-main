import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ecsi',
  templateUrl: './ecsi.component.html',
  styleUrls: ['./ecsi.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink, FormsModule],
  standalone: true,
})
export class EcsiComponent implements AfterViewInit {
  @ViewChild('cardElement') cardElement!: ElementRef;
  
  // Game mode properties
  gameMode: string = 'Jeu';
  players: string[] = [];
  playerRoles: { [playerName: string]: { roleTitle: string, roleDescription: string } } = {};
  currentTurn: number = 1;
  gameCategories: string[] = ['Débat'];
  currentCategoryIndex: number = 0;
  gameStarted: boolean = false;
  showPlayerSetup: boolean = false;
  showGameEnd: boolean = false;
  showNextTurn: boolean = false;
  showRolePopup: boolean = false;
  selectedPlayerRole = { name: '', role: { roleTitle: '', roleDescription: '' } };
  
  // Timer properties
  timeLeft: number = 600; // 10 minutes in seconds
  timerInterval: any;
  showTimeUpPopup: boolean = false;
  
  // Category vote tracking
  categoryVotes: { [category: string]: { [choice: string]: number } } = {
    'Travail et société': { '--': 0, '-': 0, '0': 0, '+': 0, '++': 0 },
    'Solidarité': { '--': 0, '-': 0, '0': 0, '+': 0, '++': 0 },
    'Écologie': { '--': 0, '-': 0, '0': 0, '+': 0, '++': 0 },
    'Éthique et progrès': { '--': 0, '-': 0, '0': 0, '+': 0, '++': 0 }
  };
  
  // Jeu mode deck management
  jeuModeDeck: any[] = [];
  jeuModeCardIndex: number = 0;

  roles = [
  {
    title: 'Le Lanceur d’Alerte Écologiste',
    description: '<b> Valeurs </b>: <br/> Ecologie <b> + </b> <br/> Solidarité <b> ++ </b> <br/> Travail <b> + </b> <br/> Ethique <b> -- </b> <br/><br/>Vous êtes un militant convaincu, animé par l’urgence écologique et la justice sociale. Votre vécu personnel renforce votre engagement. Vous imaginez un avenir sombre si rien ne change, et vous militez pour une transformation radicale.'
  },
  {
    title: 'L’Optimiste Technoprogressiste',
    description: '<b> Valeurs </b>: <br/> Ecologie <b> + </b> <br/> Solidarité <b> 0 </b> <br/> Travail <b> + </b> <br/> Ethique <b> + </b> <br/><br/>Ingénieur dans les énergies renouvelables, vous croyez en l’innovation pour résoudre les crises. Pour vous, écologie, progrès et croissance peuvent coexister harmonieusement.'
  },
  {
    title: 'L’Entrepreneur Libéral',
    description: '<b> Valeurs </b>: <br/> Ecologie <b> - </b> <br/> Solidarité <b> 0 </b> <br/> Travail <b> - </b> <br/> Ethique <b> ++ </b> <br/><br/>Autodidacte et ambitieux, vous valorisez l’effort individuel et la liberté d’innover. Vous vous méfiez des aides sociales et défendez une vision méritocratique du progrès, même sur des sujets sensibles.'
  },
  {
    title: 'Le Scientifique Rationaliste',
    description: '<b> Valeurs </b>: <br/> Ecologie <b> 0 </b> <br/> Solidarité <b> 0 </b> <br/> Travail <b> 0 </b> <br/> Ethique <b> ++ </b> <br/><br/>Chercheur en médecine, vous croyez en la science comme moteur d’amélioration de la vie. Vous privilégiez les solutions rationnelles et ciblées, loin des émotions ou des idéologies.'
  },
  {
    title: 'Le Rural Autonome',
    description: '<b> Valeurs </b>: <br/> Ecologie <b> + </b> <br/> Solidarité <b> - </b> <br/> Travail <b> 0 </b> <br/> Ethique <b> -- </b> <br/><br/>Attaché à la terre et à l’autonomie, vous rejetez l’assistanat et la technologie intrusive. Vous prônez un retour au bon sens, à la nature et à des valeurs simples et locales.'
  },
  {
    title: 'Le Social Réaliste',
    description: '<b> Valeurs </b>: <br/> Ecologie <b> - </b> <br/> Solidarité <b> + </b> <br/> Travail <b> 0 </b> <br/> Ethique <b> 0 </b> <br/><br/>Issu d’un milieu populaire, vous croyez en des politiques sociales fortes pour améliorer la vie des plus modestes. Vous êtes pragmatique et engagé pour plus d’équité.'
  },
  {
    title: 'Le Dissident Conspirationniste',
    description: '<b> Valeurs </b>: <br/> Ecologie <b> -- </b> <br/> Solidarité <b> 0 </b> <br/> Travail <b> 0 </b> <br/> Ethique <b> -- </b> <br/><br/>Vous vous méfiez profondément des institutions et des discours dominants. Vous vous considérez comme éveillé face à une société manipulée, et vous refusez toute forme de contrôle.'
  },
  {
    title: 'La Militante Syndicale',
    description: '<b> Valeurs </b>: <br/> Ecologie <b> 0 </b> <br/> Solidarité <b> 0 </b> <br/> Travail <b> + </b> <br/> Ethique <b> 0 </b> <br/><br/>Enseignante engagée, vous défendez les services publics et la reconnaissance du travail éducatif. Vous militez pour plus de justice professionnelle et sociale.'
  }

  ];

 cards = [
  { name: 'D1', category: 'Travail et société', question: 'Les personnes les plus riches devraient-elles être imposées à 90 % au-delà d’un certain seuil ?' },
  { name: 'D2', category: 'Travail et société', question: 'Les métiers essentiels devraient-ils être mieux rémunérés que les cadres du privé ?' },
  { name: 'D3', category: 'Travail et société', question: 'Faut-il reconnaître et rémunérer les tâches domestiques et le bénévolat comme du vrai travail ?' },
  { name: 'D4', category: 'Travail et société', question: 'Un revenu de base inconditionnel devrait-il être versé à chaque individu ?' },

  { name: 'D5', category: 'Solidarité', question: 'La France devrait-elle accueillir davantage de réfugiés et faciliter leur intégration ?' },
  { name: 'D6', category: 'Solidarité', question: 'Un service civique solidaire obligatoire devrait-il remplacer le service militaire ?' },
  { name: 'D7', category: 'Solidarité', question: 'Les pays du Nord doivent-ils aider les pays du Sud à se développer ?' },
  { name: 'D8', category: 'Solidarité', question: 'Les logements vides devraient-ils être réquisitionnés pour héberger les sans-abri ?' },

  { name: 'D9', category: 'Écologie', question: 'Les pays riches doivent-ils financer la transition écologique des pays pauvres ?' },
  { name: 'D10', category: 'Écologie', question: 'Faut-il renoncer à la croissance économique pour préserver l’environnement ?' },
  { name: 'D11', category: 'Écologie', question: 'La consommation de viande devrait-elle être fortement taxée pour des raisons écologiques ?' },
  { name: 'D12', category: 'Écologie', question: 'Faut-il interdire les vols de moins de 2h ou accessibles en moins de 4h de train ?' },

  { name: 'D13', category: 'Éthique et progrès', question: 'Modifier le génome humain pour éviter des maladies graves devrait-il être autorisé ?' },
  { name: 'D14', category: 'Éthique et progrès', question: 'Faut-il intégrer davantage de robots dans les métiers d’aide à la personne ?' },
  { name: 'D15', category: 'Éthique et progrès', question: 'L’euthanasie devrait-elle être légale et accessible à toute personne majeure en souffrance ?' },
  { name: 'D16', category: 'Éthique et progrès', question: 'Les implants neuronaux pour améliorer nos capacités devraient-ils être accessibles au grand public ?' }
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
      this.gameMode = localStorage.getItem('ecsi_gameMode') || 'jeu';
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
    if (this.gameMode === 'jeu') {
      return this.cards[this.currentCardIndex] || this.cards[0];
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
    this.stopTimer();
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
    this.currentTurn++;
    this.startTimer();
    
    if (this.cardElement) {
      this.cardElement.nativeElement.style.transform = '';
    }
    this.changeDetectorRef.detectChanges();
  }
  
  selectChoice(choice: string) {
    const currentCategory = this.currentCard.category;
    this.categoryVotes[currentCategory][choice]++;
    this.nextCard();
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




  // Popup toggles
  toggleRules() {
    this.showRules = !this.showRules;
  }
  
  // Timer methods
  startTimer() {
    this.timeLeft = 600;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.showTimeUpPopup = true;
      }
    }, 1000);
  }
  
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  
  closeTimeUpPopup() {
    this.showTimeUpPopup = false;
  }
  
  get formattedTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
      this.assignRolesToPlayers();
      this.showPlayerSetup = false;
      this.gameStarted = true;
      this.selectedCategory = this.gameCategories[0];
      
      this.createJeuModeDeck();
      this.startTimer();
      
      // Setup gestures after view updates
      setTimeout(() => {
        if (this.cardElement) {
          this.setupSwipeGestures();
        }
      }, 100);
    }
  }
  
  assignRolesToPlayers() {
    const shuffledRoles = [...this.roles];
    this.shuffleArray(shuffledRoles);
    
    this.players.forEach((player, index) => {
      this.playerRoles[player] = {
        roleTitle: shuffledRoles[index % shuffledRoles.length].title,
        roleDescription: shuffledRoles[index % shuffledRoles.length].description
      };
    });
  }
  
  showPlayerRole(playerName: string) {
    this.selectedPlayerRole = {
      name: playerName,
      role: this.playerRoles[playerName]
    };
    this.showRolePopup = true;
  }
  
  closeRolePopup() {
    this.showRolePopup = false;
  }
  
  nextTurn() {
    this.currentTurn++;
    this.startTimer();
    this.showNextTurn = false;
  }
  

  
  get currentCategory() {
    return this.gameCategories[this.currentCategoryIndex];
  }
  
  restartGame() {
    this.stopTimer();
    this.currentTurn = 1;
    this.currentCategoryIndex = 0;
    this.selectedCategory = this.gameCategories[0];
    this.currentCardIndex = 0;
    
    this.players = ['', ''];
    this.playerRoles = {};
    this.gameStarted = false;
    this.showPlayerSetup = true;
    this.showNextTurn = false;
    this.showGameEnd = false;
  }
  
  resetLibreMode() {
    this.stopTimer();
    this.currentCardIndex = 0;
    this.selectedCategory = 'all';
    this.shuffleArray(this.cards);
    this.filteredCards = [...this.cards];
    this.startTimer();
  }


  
  // Create deck for jeu mode
  private createJeuModeDeck() {
    const categoryCards = this.cards.filter(card => card.category === this.selectedCategory);
    this.shuffleArray(categoryCards);
    this.jeuModeDeck = categoryCards;
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

import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {cards, availableActionCards, en_cards, en_availableActionCards } from './card-data';

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

  cards = cards;

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
    this.loadLanguageData();
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

availableActionCards = availableActionCards;

  loadLanguageData() {
    try {
      const language = localStorage.getItem('language') || 'fr';
      if (language === 'en') {
        this.cards = en_cards;
        this.availableActionCards = en_availableActionCards;
      } else {
        this.cards = cards;
        this.availableActionCards = availableActionCards;
      }
    } catch (e) {
      this.cards = cards;
      this.availableActionCards = availableActionCards;
    }
  }


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

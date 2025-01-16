import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink],
  standalone: true,
})
export class CardComponent implements AfterViewInit {
  @ViewChild('cardElement') cardElement!: ElementRef;  // Get reference to the card element in the DOM

  cards = [
    { category: 'Léger', question: 'What is the capital of France?' },
    { category: 'Léger', question: 'Name a country in South America.' },
    { category: 'Choix', question: 'What is 2 + 2?' },
    { category: 'Choix', question: 'What is the square root of 16?' },
    { category: 'Futur', question: 'What is the color of the sky?' },
    { category: 'Futur', question: 'What is H2O commonly known as?' },
    { category: 'Ensemble', question: 'Who was the first president of the USA?' },
    { category: 'Ensemble', question: 'What year did World War II end?' },
    { category: 'Situation', question: 'Who wrote "Romeo and Juliet"?' },
    { category: 'Situation', question: 'Name a novel by George Orwell.' },
    // Add more categories and questions as needed
  ];

  currentCardIndex: number = 0;
  selectedCategory: string = 'all';
  uniqueCategories: string[] = [];
  filteredCards = this.cards;

  constructor(
    private gestureCtrl: GestureController,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.uniqueCategories = [...new Set(this.cards.map(card => card.category))];
  }

  ngAfterViewInit() {
    this.setupSwipeGestures();
  }

  get currentCard() {
    return this.filteredCards[this.currentCardIndex];
  }

  get currentCardColor() {
    const colors: { [key: string]: string } = { // Define index signature
      Léger: '#ffcccb',
      Choix: '#ccffcc',
      Futur: '#ccccff',
      Ensemble: '#ffebcc',
      Situation: '#e6ccff',
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
      this.filteredCards = this.cards;
    } else {
      this.filteredCards = this.cards.filter(card => card.category === this.selectedCategory);
    }
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
    // Calculate next index with wraparound
    this.currentCardIndex = (this.currentCardIndex + 1) % this.filteredCards.length;
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
}
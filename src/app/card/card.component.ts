import { Component } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink], // Add CommonModule
})
export class CardComponent {
  cards = [
    { category: 'Geography', question: 'What is the capital of France?' },
    { category: 'Geography', question: 'Name a country in South America.' },
    { category: 'Math', question: 'What is 2 + 2?' },
    { category: 'Math', question: 'What is the square root of 16?' },
    { category: 'Science', question: 'What is the color of the sky?' },
    { category: 'Science', question: 'What is H2O commonly known as?' },
    { category: 'History', question: 'Who was the first president of the USA?' },
    { category: 'History', question: 'What year did World War II end?' },
    { category: 'Literature', question: 'Who wrote "Romeo and Juliet"?' },
    { category: 'Literature', question: 'Name a novel by George Orwell.' },
    // Add more categories and questions as needed
  ];

  currentCardIndex: number = 0;
  selectedCategory: string = 'all';
  uniqueCategories: string[] = [];
  filteredCards = this.cards;

  constructor(private gestureCtrl: GestureController) {
    this.uniqueCategories = [...new Set(this.cards.map(card => card.category))];
    this.setupSwipeGestures();
  }

  get currentCard() {
    return this.filteredCards[this.currentCardIndex];
  }

  get currentCardColor() {
    const colors: { [key: string]: string } = { // Define index signature
      Geography: '#ffcccb',
      Math: '#ccffcc',
      Science: '#ccccff',
      History: '#ffebcc',
      Literature: '#e6ccff',
      // Add more colors for other categories
    };
    return colors[this.currentCard.category] || '#ffffff';
  }

  nextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.filteredCards.length;
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
    const cardElement = document.querySelector('div.card') as HTMLElement;
    if (!cardElement) {
      console.error('Card element not found');
      return;
    }

    const gesture = this.gestureCtrl.create({
      el: cardElement,
      gestureName: 'swipe',
      onStart: () => {},
      onEnd: (ev) => {
        if (ev.deltaX < 0) { // Swipe left
          this.nextCard();
        } else if (ev.deltaX > 0) { // Swipe right
          this.previousCard();
        }
      },
    });
    gesture.enable();
  }

  previousCard() {
    this.currentCardIndex = (this.currentCardIndex - 1 + this.filteredCards.length) % this.filteredCards.length;
  }
}
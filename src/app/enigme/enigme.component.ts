import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { categoryDescriptions, enigmaCards } from './enigma-data';

@Component({
  selector: 'app-enigme',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink],
  standalone: true,
})
export class EnigmeComponent {
  // Get data from enigma-data.ts
  categoryDescriptions = categoryDescriptions;
  cards = enigmaCards;

  // Game state
  currentCardIndex: number = 0;
  gameStarted: boolean = false;
  isAnswerVisible: boolean = false;

  constructor() {
    this.shuffleCards();
  }

  // Get current card
  get currentCard() {
    return this.cards[this.currentCardIndex];
  }

  // Get description for current category
  get categoryDescription() {
    return this.categoryDescriptions[this.currentCard.category as keyof typeof this.categoryDescriptions];
  }

  // Start new game
  startGame() {
    this.gameStarted = true;
    this.shuffleCards();
  }

  // Move to next card
  nextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
    this.isAnswerVisible = false; // Hide answer when changing card
  }

  // Toggle answer visibility
  toggleAnswer() {
    this.isAnswerVisible = !this.isAnswerVisible;
  }

  // Shuffle cards array
  private shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}
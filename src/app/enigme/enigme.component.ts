import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { categoryDescriptions, enigmaCards, EnigmaCard } from './enigma-data';

@Component({
  selector: 'app-enigme',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink],
  standalone: true,
})

export class EnigmeComponent implements OnInit {

  // Get data from enigma-data.ts
  categoryDescriptions = categoryDescriptions;
  cards: EnigmaCard[] = enigmaCards;

  // Game state
  currentCardIndex: number = 0;
  selectedCategory: string = 'all';
  uniqueCategories: string[] = [];
  filteredCards: EnigmaCard[] = [];
  gameStarted: boolean = false;
  isAnswerVisible: boolean = false;

  constructor() {}
ngOnInit(): void {
    this.extractUniqueCategories();
    this.filterCardsByCategory(this.selectedCategory);
    this.setRandomCard();
  }

  extractUniqueCategories(): void {
    this.uniqueCategories = Array.from(new Set(this.cards.map(card => card.category)));
  }

  filterCardsByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter(card => card.category === category);
      if (this.filteredCards.length === 0) {
        // If no cards in the selected category, default to all cards
        this.filteredCards = [...this.cards];
      }
    }
    this.setRandomCard();
  }

  setRandomCard(): void {
    if (this.filteredCards.length > 0) {
      this.currentCardIndex = Math.floor(Math.random() * this.filteredCards.length);
    } else {
      // Fallback: If filteredCards is empty, use all cards
      this.filteredCards = [...this.cards];
      this.currentCardIndex = Math.floor(Math.random() * this.filteredCards.length);
    }
  }

  get currentCard(): EnigmaCard {
    // Since we ensure filteredCards is not empty, currentCard will never be undefined
    return this.filteredCards[this.currentCardIndex];
  }

  get categoryDescription(): string | undefined {
    const currentCategory = this.currentCard.category;
    return this.categoryDescriptions[currentCategory];
  }

  startGame(): void {
    this.gameStarted = true;
    this.shuffleCards();
  }

  nextCard(): void {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.filteredCards.length;
    this.isAnswerVisible = false;
  }

  toggleAnswer(): void {
    this.isAnswerVisible = !this.isAnswerVisible;
  }

  private shuffleCards(): void {
    for (let i = this.filteredCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.filteredCards[i], this.filteredCards[j]] = [this.filteredCards[j], this.filteredCards[i]];
    }
    this.setRandomCard(); // Set a new random card after shuffling
  }
}
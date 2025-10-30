import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { categoryDescriptions, coupleCards, CoupleCard } from './couple-data';

@Component({
  selector: 'app-couple',
  templateUrl: './couple.component.html',
  styleUrls: ['./couple.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink],
  standalone: true,
})

export class CoupleComponent implements OnInit {

  // Get data from couple-data.ts
  categoryDescriptions = categoryDescriptions;
  cards: CoupleCard[] = coupleCards;

  // Game state
  currentCardIndex: number = 0;
  selectedCategory: string = 'all';
  uniqueCategories: string[] = [];
  filteredCards: CoupleCard[] = [];
  gameStarted: boolean = false;
  isFirstQuestion: boolean = true;

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

  get currentCard(): CoupleCard {
    // Since we ensure filteredCards is not empty, currentCard will never be undefined
    return this.filteredCards[this.currentCardIndex];
  }

  get categoryDescription(): string | undefined {
    const currentCategory = this.currentCard.category;
    return this.categoryDescriptions[currentCategory];
  }

  startGame(): void {
    this.gameStarted = true;
    this.isFirstQuestion = true;
    this.setFirstQuestion();
  }

  setFirstQuestion(): void {
    // First question is always from "Amusant, divers"
    const amusantCards = this.cards.filter(card => card.category === 'Amusant, divers');
    this.filteredCards = amusantCards;
    this.currentCardIndex = Math.floor(Math.random() * amusantCards.length);
  }

  nextCard(): void {
    if (this.isFirstQuestion) {
      this.isFirstQuestion = false;
      // After first question, use all categories except "Sexualité et intimité"
      this.filteredCards = this.cards.filter(card => card.category !== 'Sexualité et intimité');
    }
    this.currentCardIndex = Math.floor(Math.random() * this.filteredCards.length);
  }

  private shuffleCards(): void {
    for (let i = this.filteredCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.filteredCards[i], this.filteredCards[j]] = [this.filteredCards[j], this.filteredCards[i]];
    }
    this.setRandomCard(); // Set a new random card after shuffling
  }
}
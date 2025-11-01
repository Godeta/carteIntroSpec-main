import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { categoryDescriptions, coupleCards, CoupleCard, en_categoryDescriptions, en_coupleCards, es_categoryDescriptions, es_coupleCards } from './couple-data';

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

  constructor() {
    this.loadLanguageData();
  }
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
    // First question is always from fun category (language-dependent)
    const funCategory = this.getFunCategoryName();
    const amusantCards = this.cards.filter(card => card.category === funCategory);
    this.filteredCards = amusantCards;
    this.currentCardIndex = Math.floor(Math.random() * amusantCards.length);
  }

  getFunCategoryName(): string {
    try {
      const language = localStorage.getItem('language') || 'fr';
      if (language === 'en') return 'Fun, various';
      if (language === 'es') return 'Divertido, varios';
      return 'Amusant, divers';
    } catch (e) {
      return 'Amusant, divers';
    }
  }

  getIntimacyCategoryName(): string {
    try {
      const language = localStorage.getItem('language') || 'fr';
      if (language === 'en') return 'Sexuality and intimacy';
      if (language === 'es') return 'Sexualidad e intimidad';
      return 'Sexualité et intimité';
    } catch (e) {
      return 'Sexualité et intimité';
    }
  }

  nextCard(): void {
    if (this.isFirstQuestion) {
      this.isFirstQuestion = false;
      // After first question, use all categories except intimacy category
      const intimacyCategory = this.getIntimacyCategoryName();
      this.filteredCards = this.cards.filter(card => card.category !== intimacyCategory);
    }
    this.currentCardIndex = Math.floor(Math.random() * this.filteredCards.length);
  }

  loadLanguageData() {
    try {
      const language = localStorage.getItem('language') || 'fr';
      if (language === 'en') {
        this.cards = en_coupleCards;
        this.categoryDescriptions = en_categoryDescriptions;
      } else if (language === 'es') {
        this.cards = es_coupleCards;
        this.categoryDescriptions = es_categoryDescriptions;
      } else {
        this.cards = coupleCards;
        this.categoryDescriptions = categoryDescriptions;
      }
    } catch (e) {
      this.cards = coupleCards;
      this.categoryDescriptions = categoryDescriptions;
    }
  }

  private shuffleCards(): void {
    for (let i = this.filteredCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.filteredCards[i], this.filteredCards[j]] = [this.filteredCards[j], this.filteredCards[i]];
    }
    this.setRandomCard(); // Set a new random card after shuffling
  }
}
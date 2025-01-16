import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink],
  standalone: true,
})
export class FunComponent {
  cards = [
    { type: 'Action ou Vérité', question: 'Raconte ton moment le plus gênant 😳' },
    { type: 'Action ou Vérité', question: 'Imite une personne du groupe 🎭' },
    { type: 'Action ou Vérité', question: 'Chante une chanson pendant 30 secondes 🎤' },
    { type: 'Et Si...', question: 'Tu pouvais être invisible pendant une journée ? 👻' },
    { type: 'Et Si...', question: 'Tu devais vivre sur une île déserte avec 3 objets ? 🏝️' },
    { type: 'Et Si...', question: 'Tu pouvais voyager dans le temps ? ⏰' },
    { type: 'Qui Dans Le Groupe', question: 'Serait le meilleur dans une émission de télé-réalité ? 📺' },
    { type: 'Qui Dans Le Groupe', question: 'Survivrait le plus longtemps dans une apocalypse zombie ? 🧟' },
    { type: 'Qui Dans Le Groupe', question: 'Deviendra célèbre en premier ? ⭐' },
  ];

  currentCardIndex: number = 0;
  gameStarted: boolean = false;
  cardsPlayed: number = 0;
  readonly maxCards: number = 10;

  constructor() {
    this.shuffleCards();
  }

  get currentCard() {
    return this.cards[this.currentCardIndex];
  }

  startGame() {
    this.gameStarted = true;
    this.cardsPlayed = 0;
    this.shuffleCards();
  }

  nextCard() {
    this.cardsPlayed++;
    if (this.cardsPlayed >= this.maxCards) {
      this.gameStarted = false;
      return;
    }
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  }

  private shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}
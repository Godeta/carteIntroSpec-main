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

  event = [
  { event: 'Faites un tournoi pierre-feuille-ciseaux, le ou la gagnant(e) doit répondre aux deux cartes suivantes.' },
  { event: 'Le prochain joueur devra être appelé par son 2ème prénom ou son nom de famille pour le reste de la partie. Si quelqu’un se trompe, il peut distribuer un gage.' },
  { event: 'La personne la plus âgée dans la pièce doit chanter l’air d’une chanson de son enfance pendant 20 secondes.' },
  { event: 'Tous les joueurs doivent changer de place. Le joueur assis à gauche du plus jeune commence une nouvelle manche.' },
  { event: 'Le joueur qui a le plus de voyelles dans son prénom doit inventer une règle farfelue pour le reste de la partie.' },
  { event: 'Le groupe doit choisir un mot interdit pour les 5 prochaines minutes. Toute personne qui le prononce reçoit un gage.' },
  { event: 'Tous les joueurs doivent dire leur couleur préférée. Ceux qui ont choisi la même couleur doivent faire un high five et répondre à une carte ensemble.' }
];
   cards = [
  // Action ou Vérité
  { type: 'Action ou Vérité', question: 'Raconte ton moment le plus gênant 😳' },
  { type: 'Action ou Vérité', question: 'Imite une personne connue du groupe 🎭' },
  { type: 'Action ou Vérité', question: 'Chante une chanson pendant 30 secondes 🎤' },

  // Et Si...
  { type: 'Et Si...', question: 'Tu pouvais être invisible pendant une journée ? 👻' },
  { type: 'Et Si...', question: 'Tu devais vivre sur une île déserte avec 3 objets ? 🏝️' },
  { type: 'Et Si...', question: 'Tu pouvais voyager dans le temps ? ⏰' },
  { type: 'Et Si...', question: 'Si les animaux pouvaient parler, quelle espèce dominerait le monde ? 🐒' },
  { type: 'Et Si...', question: 'Si il y avait une apocalypse zombie demain, que fais-tu de ce premier jour ? 🧟‍♂️' },

  // Qui Dans Le Groupe
  { type: 'Qui Dans Le Groupe', question: 'Serait le meilleur dans une émission de télé-réalité ? 📺' },
  { type: 'Qui Dans Le Groupe', question: 'Survivrait le plus longtemps dans une apocalypse zombie ? 🧟' },
  { type: 'Qui Dans Le Groupe', question: 'Deviendra célèbre en premier ? ⭐' },

  // Jamais
  { type: 'Jamais', question: 'Je n’ai jamais menti à un professeur.' },
  { type: 'Jamais', question: 'Je n’ai jamais été jaloux de quelqu’un dans cette pièce.' },

  // Devine
  { type: 'Devine', question: 'Quelqu’un pense à une personne réelle ou fictive célèbre connue des joueurs. Les autres doivent deviner avec uniquement des questions par oui ou par non.' },
  { type: 'Devine', question: 'Donne 3 affirmations à propos de toi dont 1 ou 2 sont fausses. Les autres doivent deviner lesquelles sont vraies.' },
  { type: 'Devine', question: 'Pose une question de culture G (comme "Quelle est la région la plus peuplée de France ?"). Tout le monde donne une réponse puis vérifie qui a raison.' },
  { type: 'Devine', question: 'Pense à quelque chose, n’importe quoi (objet, concept...). Les autres doivent deviner en moins de 20 questions.' },

  // Préfères
  { type: 'Préfères', question: 'Tu préfères avoir le hoquet pendant un an ou avoir l’impression constante de devoir éternuer sans y arriver ?' },
  { type: 'Préfères', question: 'Perdre un de tes 5 sens au choix ou devenir hypersensible de façon handicapante au quotidien dans un de ces sens ?' },
  { type: 'Préfères', question: 'Tu préfères pouvoir te téléporter mais arriver toujours avec 5 minutes de retard ou voler mais seulement à 1 mètre du sol ?' },
  { type: 'Préfères', question: 'Tu préfères avoir le pouvoir de revenir dans le passé pour changer une erreur ou de voir ton avenir dans 10 ans ?' },
  { type: 'Préfères', question: 'Tu préfères connaître la date exacte de ta mort ou ne jamais savoir ?' },

  // Si tu étais
  { type: 'Si tu étais', question: 'Si tu étais un animal, lequel serais-tu et pourquoi ?' },
  { type: 'Si tu étais', question: 'Si tu étais une chanson, laquelle te représenterait le mieux ?' },
  { type: 'Si tu étais', question: 'Si cette semaine était un plat, lequel serait-ce ?' },

  // Peur
  { type: 'Peur', question: 'Quelle est ta plus grande peur irrationnelle ?' },
  { type: 'Peur', question: 'As-tu déjà surmonté une de tes plus grandes peurs ? Si oui, raconte-nous.' },
  { type: 'Peur', question: 'Quels cauchemars faisais-tu plus petit ?' }
];


  currentCardIndex: number = 0;
  gameStarted: boolean = false;
  cardsPlayed: number = 0;
  readonly maxCards: number = 15;
  gameSequence: any[] = [];
  isCurrentEvent: boolean = false;

  constructor() {
    this.shuffleCards();
  }

  get currentCard() {
    return this.gameSequence[this.currentCardIndex];
  }

  startGame() {
    this.gameStarted = true;
    this.cardsPlayed = 0;
    this.createGameSequence();
  }

  nextCard() {
    if (!this.isCurrentEvent) {
      this.cardsPlayed++;
    }
    
    if (this.cardsPlayed >= this.maxCards) {
      this.gameStarted = false;
      return;
    }
    
    this.currentCardIndex++;
    this.isCurrentEvent = this.gameSequence[this.currentCardIndex]?.type === 'Event';
  }

  private shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  private createGameSequence() {
    // Get 15 random cards
    this.shuffleCards();
    const selectedCards = this.cards.slice(0, 15);
    
    // Create sequence with cards
    this.gameSequence = [...selectedCards];
    
    // Add 2-4 random events
    const eventCount = Math.floor(Math.random() * 3) + 2; // 2-4 events
    const shuffledEvents = [...this.event].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < eventCount; i++) {
      const eventPosition = Math.floor(Math.random() * (this.gameSequence.length + 1));
      this.gameSequence.splice(eventPosition, 0, {
        type: 'Event',
        question: shuffledEvents[i].event
      });
    }
    
    this.currentCardIndex = 0;
    this.isCurrentEvent = this.gameSequence[0]?.type === 'Event';
  }
}
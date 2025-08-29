import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { cards1, cards2, cards3, en_cards1, en_cards2, en_cards3, challenges, en_challenges } from './brain-data';

@Component({
  selector: 'app-brain',
  templateUrl: './brain.component.html',
  styleUrls: ['./brain.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink],
  standalone: true,
})
export class BrainComponent implements AfterViewInit {
  currentLanguage = 'fr';
  currentView = 'main'; // 'main', 'cards1', 'cards2', 'cards3'
  selectedCard: any = null;
  showPopup = false;
  currentChallenge: string = '';
  cards1: any[] = [];
  cards2: any[] = [];
  cards3: any[] = [];
  challenges: any[] = [];

  frenchContent = {
    title: 'Brainstorming & Réflexion Collective',
    subtitle: 'Lancez-vous avec ces outils pour créer, planifier et agir ensemble !',
    description: 'Envie de lancer un projet ensemble ?',
    paragraph: 'Envie de créer ensemble, même à la dernière minute ? Que ce soit pour un projet, un événement ou une soirée entre amis, découvrez des méthodes simples et flexibles pour transformer vos idées en moments inoubliables. Pas besoin de tout prévoir : lancez-vous et amusez-vous, ici et maintenant !',
    backButton: '↩️ Menu',
    section1: {
      emoji: '💡',
      title: 'Pas encore d\'idée ?',
      subtitle: '"Trouvez-la ensemble !"',
      description: 'Découvrez des méthodes pour générer des idées de projet qui motivent tout le monde.',
      button: 'Trouver une idée'
    },
    section2: {
      emoji: '📝',
      title: 'Déjà une idée ?',
      subtitle: '"Affinez-la et faites un plan détaillé !"',
      description: 'Structurez votre projet étape par étape avec des outils collaboratifs.',
      button: 'Planifier ensemble'
    },
    section3: {
      emoji: '🚀',
      title: 'Votre idée est claire ?',
      subtitle: '"Répartissez les rôles et passez à l\'action !"',
      description: 'Attribuez les tâches, fixez des deadlines et lancez-vous !',
      button: 'Agir ensemble'
    },
    challengeTitle: 'Besoin d\'inspiration ?',
    challengeText: 'Essayez un défi aléatoire ce soir :',
    challengeButton: 'Défi express'
  };

  englishContent = {
    title: 'Brainstorming & Collective Thinking',
    subtitle: 'Get started with these tools to create, plan and act together!',
    description: 'Want to launch a project together?',
    paragraph: 'Want to create something together—even last minute? Whether it’s a project, an event, or just a night with friends, explore easy and flexible ways to turn ideas into unforgettable moments. No planning needed: dive in and have fun, right now!',
    backButton: '↩️ Menu',
    section1: {
      emoji: '💡',
      title: 'No idea yet?',
      subtitle: '"Find one together!"',
      description: 'Discover methods to generate project ideas that motivate everyone.',
      button: 'Find an idea'
    },
    section2: {
      emoji: '📝',
      title: 'Already have an idea?',
      subtitle: '"Refine it and make a detailed plan!"',
      description: 'Structure your project step by step with collaborative tools.',
      button: 'Plan together'
    },
    section3: {
      emoji: '🚀',
      title: 'Your idea is clear?',
      subtitle: '"Assign roles and take action!"',
      description: 'Assign tasks, set deadlines and get started!',
      button: 'Act together'
    },
    challengeTitle: 'Need inspiration?',
    challengeText: 'Try a random challenge tonight:',
    challengeButton: 'Express Challenge'
  };

  get content() {
    return this.currentLanguage === 'en' ? this.englishContent : this.frenchContent;
  }

  showCards(section: number) {
    this.currentView = `cards${section}`;
  }

  backToMain() {
    this.currentView = 'main';
  }

  openCard(card: any) {
    this.selectedCard = card;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedCard = null;
  }

  getCurrentCards() {
    switch(this.currentView) {
      case 'cards1': return this.cards1;
      case 'cards2': return this.cards2;
      case 'cards3': return this.cards3;
      default: return [];
    }
  }

  loadLanguageData() {
    try {
      const language = localStorage.getItem('language') || 'fr';
      this.currentLanguage = language;
      if (language === 'en') {
        this.cards1 = en_cards1;
        this.cards2 = en_cards2;
        this.cards3 = en_cards3;
        this.challenges = en_challenges;
      } else {
        this.cards1 = cards1;
        this.cards2 = cards2;
        this.cards3 = cards3;
        this.challenges = challenges;
      }
    } catch (e) {
      this.cards1 = cards1;
      this.cards2 = cards2;
      this.cards3 = cards3;
    }
  }

  getRandomChallenge() {
    const randomIndex = Math.floor(Math.random() * this.challenges.length);
    this.currentChallenge = this.challenges[randomIndex];
  }

  ngAfterViewInit() {
    this.loadLanguageData();
  }
}
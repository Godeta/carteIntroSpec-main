import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonRouterLink, RouterLink, CommonModule, FormsModule],
})
export class HomePage {
  showOptions = false;
  showInfo = false;
  selectedTheme = 'light';
  gameMode = 'jeu';
  selectedLanguage = 'fr';
  advancedModes = false;
  showSplash = false;
  showWelcome = false;
  showWarhammerTransition = false;
  warhammerText = '';
  showStarTransition = false;

  constructor(private router: Router) {
    // Load saved settings (Android compatible)
    try {
      const savedMode = localStorage.getItem('gameMode');
      const savedLanguage = localStorage.getItem('language');
      const savedAdvanced = localStorage.getItem('advancedModes');
      if (savedMode) {
        this.gameMode = savedMode;
      }
      if (savedLanguage) {
        this.selectedLanguage = savedLanguage;
      }
      if (savedAdvanced) {
        this.advancedModes = savedAdvanced === 'true';
      }
    } catch (e) {
      console.warn('localStorage not available');
    }
  }
  
  goToCard(event: Event) {
    event.preventDefault();
    this.showStarTransition = true;
    
    setTimeout(() => {
      this.showStarTransition = false;
      this.router.navigate(['/card']);
    }, 1500);
  }
  
  goToWarhammer(event: Event) {
    event.preventDefault();
    this.showWarhammerTransition = true;
    this.animateText('Combattez pour l\'empereur !!!');
    
    setTimeout(() => {
      this.showWarhammerTransition = false;
      this.router.navigate(['/warhammer']);
    }, 4000);
  }
  
  animateText(text: string) {
    this.warhammerText = '';
    for (let i = 0; i <= text.length; i++) {
      setTimeout(() => {
        this.warhammerText = text.substring(0, i);
      }, i * 100);
    }
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
    this.showInfo = false;
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    this.showOptions = false;
  }

  updateTheme(theme: string) {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(`${theme}-theme`);
    this.selectedTheme = theme;
  }

  updateGameMode(mode: string) {
    try {
      localStorage.setItem('gameMode', mode);
    } catch (e) {
      console.warn('localStorage not available');
    }
    this.gameMode = mode;
  }

  updateLanguage(language: string) {
    try {
      localStorage.setItem('language', language);
    } catch (e) {
      console.warn('localStorage not available');
    }
    this.selectedLanguage = language;
  }

  updateAdvancedModes(advanced: boolean) {
    try {
      localStorage.setItem('advancedModes', advanced.toString());
    } catch (e) {
      console.warn('localStorage not available');
    }
    this.advancedModes = advanced;
  }
}
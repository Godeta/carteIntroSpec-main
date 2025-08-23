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

  constructor(private router: Router) {
    // Load saved game mode (Android compatible)
    try {
      const savedMode = localStorage.getItem('gameMode');
      if (savedMode) {
        this.gameMode = savedMode;
      }
    } catch (e) {
      console.warn('localStorage not available');
    }
  }
  
  goToCard() {
    console.log('Navigating to card with mode:', this.gameMode);
    this.router.navigate(['/card']).then(success => {
      console.log('Navigation success:', success);
    }).catch(error => {
      console.error('Navigation error:', error);
    });
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
}
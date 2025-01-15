import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  constructor() {}

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
}
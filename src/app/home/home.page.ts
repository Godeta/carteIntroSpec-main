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

  frenchInfo = {
    section1: {
      title: 'Qu\'est-ce que Pasapa ?',
      content: 'Cette appli est faite pour supporter le jeu que vous pouvez télécharger et imprimer librement. Le principe est d\'avoir un support pour lancer facilement des discussions chouettes ! Idéal entre proches ou nouvelles connaissances, il s\'utilise n\'importe où (en voiture, en balade, autour d\'un repas) et s\'adapte à tous les contextes (discu rapide, plus profonde, faire une partie complète...)'
    },
    section2: {
      title: 'L\'histoire derrière l\'app',
      content: 'J\'avais cette relation avec certains amis proches où l\'on se lançait facilement dans de longues discussions profondes sur des sujets philosophiques ou intimes allant de ce que l\'on veut faire de notre vie à nos difficultés familiales. Je ressentais le besoin d\'un outil, quelque chose pour faciliter ce type de discussions et petit à petit que je puisses l\'avoir avec d\'autres amis qui comptent pour moi ou simplement me permettre de passer le temps quand je suis avec quelqu\'un que je connais peu. Parfois c\'est plus sympa de taper la discute plutôt que regarder les mouches voler mais c\'est pas toujours simple à faire ! <br/>J\'aimais bien le concept de "36 questions pour tomber amoureux" et l\'idée d\'un jeu de cartes pour papoter m\'est vite venue à l\'esprit. <br/>Le jeu doit donc être facile à transporter, utiliser dans toutes sortes de situations, permettre des discussions légères ou profondes et enfin offrir certaines mécaniques pour renforcer l\'aspect jeu d\'ambiance ce qui le rend à la fois fun et réutilisable.'
    },
    section3: {
      title: 'Vision & Perspectives',
      content: 'Aujourd\'hui l\'application est fonctionnelle et disponible sur google play. Les questions pourraient être améliorées et une belle piste d\'amélioration serait que ce projet open-source soit repris, et adapté à votre guise. Vous pouvez cliquer sur le lien de contact pour suggérer des modifications, me donner des questions ou énigmes à ajouter... Vous pouvez également aller sur le github reprendre mes fichiers, les modifier et faire votre propre version du jeu réel ou virtuel ! Bref, c\'est un projet qui ne demande qu\'à vivre et se transformer dans les mains de celles et ceux qui ont de l\'imagination. '
    },
    buttons: {
      introspection: 'Cartes d\'Introspection',
      fun: 'Jeux d\'Ambiance',
      couple: '💕 A deux en couple',
      enigmas: '🤔 Énigmes',
      brainstorm: 'Brainstorm - réflexion collective',
      debates: 'Débats Roleplay',
      options: '⚙️ Options',
      info: '❓Infos'
    }
  };

  englishInfo = {
    section1: {
      title: 'What is Pasapa?',
      content: 'This app is designed to support the game you can download and print freely. The principle is to have a tool to easily start great discussions! Ideal between close friends or new acquaintances, it can be used anywhere (in the car, on a walk, around a meal) and adapts to all contexts (quick chat, deeper conversation, full game session...)'
    },
    section2: {
      title: 'The story behind the app',
      content: 'I had this relationship with certain close friends where we easily launched into long deep discussions on philosophical or intimate topics ranging from what we want to do with our lives to our family difficulties. I felt the need for a tool, something to facilitate this type of discussion and gradually be able to have it with other friends who matter to me or simply allow me to pass time when I\'m with someone I don\'t know well. Sometimes it\'s nicer to chat than watch flies buzz around, but it\'s not always easy to do! <br/>I really liked the concept of "36 questions to fall in love" and the idea of a card game for chatting quickly came to mind. <br/>The game must therefore be easy to transport, use in all kinds of situations, allow light or deep discussions and finally offer certain mechanics to reinforce the party game aspect which makes it both fun and reusable.'
    },
    section3: {
      title: 'Vision & Perspectives',
      content: 'Today, the application is functional and available on Google Play. The questions could be improved, and a great opportunity for enhancement would be for this open-source project to be taken up and adapted as you see fit. You can click on the contact link to suggest changes, send me questions or riddles to add... You can also go to the GitHub, take my files, modify them, and create your own version of the game—real or virtual! In short, it’s a project that’s just waiting to live and evolve in the hands of those with imagination.'
    },
    buttons: {
      introspection: 'Introspection Cards',
      fun: 'Party Games',
      couple: '💕 Two as a couple',
      enigmas: '🤔 Enigmas',
      brainstorm: 'Brainstorm - collective thinking',
      debates: 'Roleplay Debates',
      options: '⚙️ Options',
      info: '❓Info'
    }
  };

  spanishInfo = {
    section1: {
      title: '¿Qué es Pasapa?',
      content: 'Esta aplicación está diseñada para apoyar el juego que puedes descargar e imprimir libremente. El principio es tener una herramienta para iniciar fácilmente grandes conversaciones! Ideal entre amigos cercanos o nuevos conocidos, se puede usar en cualquier lugar (en el coche, en un paseo, alrededor de una comida) y se adapta a todos los contextos (charla rápida, conversación más profunda, sesión de juego completa...)'
    },
    section2: {
      title: 'La historia detrás de la aplicación',
      content: 'Tenía esta relación con ciertos amigos cercanos donde fácilmente nos lanzábamos a largas discusiones profundas sobre temas filosóficos o íntimos que iban desde lo que queremos hacer con nuestras vidas hasta nuestras dificultades familiares. Sentía la necesidad de una herramienta, algo para facilitar este tipo de discusión y gradualmente poder tenerla con otros amigos que me importan o simplemente permitirme pasar el tiempo cuando estoy con alguien que no conozco bien. ¡A veces es más agradable charlar que ver volar las moscas, pero no siempre es fácil de hacer! <br/>Realmente me gustó el concepto de "36 preguntas para enamorarse" y la idea de un juego de cartas para charlar rápidamente vino a la mente. <br/>Por lo tanto, el juego debe ser fácil de transportar, usar en todo tipo de situaciones, permitir discusiones ligeras o profundas y finalmente ofrecer ciertas mecánicas para reforzar el aspecto de juego de fiesta que lo hace divertido y reutilizable.'
    },
    section3: {
      title: 'Visión y Perspectivas',
      content: 'Hoy en día, la aplicación es funcional y está disponible en Google Play. Las preguntas podrían mejorarse, y una excelente vía de mejora sería que este proyecto de código abierto fuera retomado y adaptado a tu gusto. Puedes hacer clic en el enlace de contacto para sugerir modificaciones, enviarme preguntas o acertijos para añadir... También puedes ir al GitHub, tomar mis archivos, modificarlos y crear tu propia versión del juego—¡real o virtual! En resumen, es un proyecto que solo espera vivir y transformarse en manos de quienes tienen imaginación.'
    },
    buttons: {
      introspection: 'Cartas de Introspección',
      fun: 'Juegos de Ambiente',
      couple: '💕 Dos en una pareja',
      enigmas: '🤔 Enigmas',
      brainstorm: 'Lluvia de ideas - pensamiento colectivo',
      debates: 'Debates de Rol',
      options: '⚙️ Opciones',
      info: '❓Información'
    }
  };

  get infoContent() {
    if (this.selectedLanguage === 'en') return this.englishInfo;
    if (this.selectedLanguage === 'es') return this.spanishInfo;
    return this.frenchInfo;
  }

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
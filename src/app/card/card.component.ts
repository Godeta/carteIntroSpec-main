import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, IonButton, IonRouterLink, RouterLink],
  standalone: true,
})
export class CardComponent implements AfterViewInit {
  @ViewChild('cardElement') cardElement!: ElementRef;  // Get reference to the card element in the DOM

  cards = [
    // Léger category
    { category: 'Léger', question: 'Si tu pouvais adopter un animal improbable (comme un lama ou un hérisson), que choisirais-tu ?' },
    { category: 'Léger', question: 'Un animal que tu n’adopterai certainement PAS.' },
    { category: 'Léger', question: 'Si tu devais déménager demain dans un autre pays, lequel choisirais-tu et pourquoi ?' },
    { category: 'Léger', question: 'Un pays où tu n’irai absolument pas ?' },
    { category: 'Léger', question: 'Quel personnage de fiction aimerai-tu voir dans la vraie vie ?' },
    { category: 'Léger', question: 'Ne souhaiterai tu absolument pas voir dans la vrai vie ?' },
    { category: 'Léger', question: 'Plutôt café ou thé ? Chien ou chat ? Chocolatine ou pain au chocolat ?' },
    { category: 'Léger', question: 'Pichet, cruche, carafe, broc d’eau...' },
    { category: 'Léger', question: 'Quel est le pire cadeau que tu n’aies jamais reçu ?' },
    { category: 'Léger', question: 'Le meilleur cadeau ?' },
    { category: 'Léger', question: "C'est quoi ton plat préféré ? Si tu devais manger un seul plat tous les jours que choisirai tu ?" },
    { category: 'Léger', question: 'Le plat que tu détestes le plus ? Un plat que tu ne mangerai plus jamais ?' },
    { category: 'Léger', question: 'Parmis les joueurs, qui te semble le plus à même de survivre plusieurs semaines seul en forêt ?' },
    { category: 'Léger', question: 'Qui s’en sortirait le moins bien ?' },
    { category: 'Léger', question: 'Cite un film qui t’as bouleversé, fait vivre des émotions fortes.' },
    { category: 'Léger', question: 'Un film qui t’as ennuyé à mourir.' },

    // Situation category
    { category: 'Situation', question: 'On te propose une activité un peu particulière que tu n’as jamais faite, qu’est ce que tu accepterai ?' },
    { category: 'Situation', question: 'Qu’est ce que tu n’accepterai pas ?' },
    { category: 'Situation', question: 'Qu’elle la chose la plus embarrassante qui te sois arrivé récemment ?' },
    { category: 'Situation', question: 'La plus glorieuse ?' },
    { category: 'Situation', question: 'Tu es au milieu d’un débat animé avec des amis et tu es en désaccord. Comment te fais tu entendre ou au contraire préfères tu rester silencieux ?' },
    { category: 'Situation', question: 'Tu trouves un portefeuille rempli d’argent dans la rue avec une carte d’identité. Que fais-tu ?' },
    { category: 'Situation', question: 'As tu déjà volé de l’argent ? Dans quelles circonstances le ferai-tu ?' },
    { category: 'Situation', question: 'Tu es invité chez quelqu’un et tu n’aimes pas ce qu’il a cuisiné. Tu te forces à manger ? Trouves une excuse ? Lui dit honnêtement ?' },
    { category: 'Situation', question: 'Ton enfant n’aimes pas et ne mange pas. Que fais tu ?' },
    { category: 'Situation', question: 'Tu es invité(e) à une fête où tu ne connais qu’une seule personne. Que fais-tu pour te sentir à l’aise ?' },
    { category: 'Situation', question: 'Tu connais tout le monde dans la fête, qu’est ce qui te mettrai mal à l’aise ?' },
    { category: 'Situation', question: 'Tu as un jour de congé imprévu demain. Comment le passes-tu ?' },
    { category: 'Situation', question: 'Ton partenaire de vie t’a trompé lors d’une soirée. Que fais-tu ? Lui donnes-tu une seconde chance ?' },
    { category: 'Situation', question: 'Tu trompes ton partenaire de vie à une soirée, que fais tu ? Est-ce que tu avoues tout ?' },

    // Anecdote category
    { category: 'Anecdote', question: 'Raconte un souvenir lié à un professeur qui t’a marqué.' },
    { category: 'Anecdote', question: 'Un autre élève avec qui tu n’es plus en contact aujourd’hui mais qui t’as laissé un souvenir fort.' },
    { category: 'Anecdote', question: 'Y a t’il un objet que tu gardes précieusement ? Pourquoi ?' },
    { category: 'Anecdote', question: 'Un objet important que tu as perdu ou cassé.' },
    { category: 'Anecdote', question: 'Parle d’un espace naturel où tu allais souvent quand tu étais enfant.' },
    { category: 'Anecdote', question: 'Une émission télé ou radio qui te viens à l’esprit.' },
    { category: 'Anecdote', question: 'Parle d’un voyage dont tu as beaucoup de souvenirs.' },
    { category: 'Anecdote', question: 'Un rêve que tu as fait la nuit et que tu n’as jamais oublié.' },
    { category: 'Anecdote', question: 'Décris comme se passait les grosses réunions de famille. Vous faisiez quoi ?' },
    { category: 'Anecdote', question: 'Les jeux à la cours de récréation avec les autres gamins.' },
    { category: 'Anecdote', question: 'Une fête que tu adores ou a adoré ?' },
    { category: 'Anecdote', question: 'Un soir où tu as traversé une tempête.' },
    { category: 'Anecdote', question: 'Parle d’une spécialité d’une région qui te tiens à cœur.' },
    { category: 'Anecdote', question: 'Une musique que tu écoutes quand tu vas mal.' },
    { category: 'Anecdote', question: 'Quel était ton premier boulot et comment tu l’as vécu ?' },
    { category: 'Anecdote', question: 'Parle de ton premier amour (pas forcément réciproque).' },

    // Valeurs category
    { category: 'Valeurs', question: 'Qu’est-ce qui est le plus important pour toi dans une relation amoureuse ?' },
    { category: 'Valeurs', question: 'Le moins important ?' },
    { category: 'Valeurs', question: 'Quel défaut te dérange le plus chez les autres ?' },
    { category: 'Valeurs', question: 'Ne te déranges pas vraiment ?' },
    { category: 'Valeurs', question: 'Dans quelle situation te sens-tu le plus vivant/épanoui ?' },
    { category: 'Valeurs', question: 'Dans quelle situation te sens-tu le plus mal à l’aise/diminué ?' },
    { category: 'Valeurs', question: 'Quel est le plus grand accomplissement dans ta vie ?' },
    { category: 'Valeurs', question: 'Le plus gros échec ?' },
    { category: 'Valeurs', question: 'Qu’est ce que tu valorises le plus dans une amitié ?' },
    { category: 'Valeurs', question: 'Quel est ton souvenir le plus précieux ?' },
    { category: 'Valeurs', question: 'Le moins important ?' },
    { category: 'Valeurs', question: 'Un souvenir d’un cauchemar ou d’un moment terrifiant ?' },
    { category: 'Valeurs', question: 'Comment te sens tu dans ta relation avec ta mère ?' },
    { category: 'Valeurs', question: 'Avec ton père ?' },
    { category: 'Valeurs', question: 'Si tu savais que tu n’avais plus qu’un an à vivre est-ce que tu changerais quoi que ce soit à ta vie actuelle ? Pourquoi ?' },
    { category: 'Valeurs', question: 'Si on t’annonçais qu’il te restait exactement 20 ans à vivre ?' },

    // Ethique category
    { category: 'Ethique', question: 'Donne tu plus de valeurs à certaines vies humaines que d’autres ?' },
    { category: 'Ethique', question: 'Y a t’il un être vivant que tu exterminerais complètement ou partiellement si tu en avais le pouvoir ?' },
    { category: 'Ethique', question: 'Quel sens donnes-tu à ta vie ?' },
    { category: 'Ethique', question: 'Qu’imagines tu qu’il se passe après la mort ?' },
    { category: 'Ethique', question: 'Un train avance et tu peux changer son rail de direction avec un levier. Si tu ne fais rien il écrase un de tes proches. Si tu tires le levier il écrase 5 inconnus. Que fais tu ?' },
    { category: 'Ethique', question: 'Toi ou 5 autres.' },
    { category: 'Ethique', question: 'La vie que tu mènes te semble t’elle en accord avec tes valeurs ? Pourquoi ?' },
    { category: 'Ethique', question: 'La société dans laquelle tu vis est elle en accord avec tes valeurs ? Pourquoi ?' },
    { category: 'Ethique', question: 'Un cambrioleur récidiviste est admis inconscient à l’hôpital. Le laisser mourir pour utiliser ses organes sauverait 3 personnes. Que choisiraient-ils ?' },
    { category: 'Ethique', question: 'Et si c’est un jeune infirmier qui donne son accord pour se sacrifier.' },
    { category: 'Ethique', question: 'Comment vois tu la disparition de certains métiers suite aux avancées technologiques (par exemple l’IA et les robots) ?' },
    { category: 'Ethique', question: 'Si tu étais le patron d’une entreprise quel choix ferai-tu ?' },
    { category: 'Ethique', question: 'Ta famille proche a commis un crime effroyable envers un inconnu, restes tu en contact avec eux ?' },
    { category: 'Ethique', question: 'Crois tu au pardon, à la seconde chance pour les crimes lourds ?' },
    { category: 'Ethique', question: 'Tu es dans Matrix, tu choisis la pillule pour continuer à profiter de cette vie virtuelle ou tu reviens dans une réalité difficile ?' },
    { category: 'Ethique', question: 'Es tu pour l’avortement ? Jusqu’à quel âge ?' },

    // Futur category
    { category: 'Futur', question: 'Imagine ton futur idéal, comment vivrai tu?' },
    { category: 'Futur', question: 'Quel serait ton pire futur envisageable ?' },
    { category: 'Futur', question: 'Où te vois tu vivre dans 10 ans et pourquoi ?' },
    { category: 'Futur', question: 'Où ne vivrai-tu certainement pas dans 10 ans et pourquoi ?' },
    { category: 'Futur', question: 'Quel conseil donnerai tu à une personne qui vivrait dans le futur 100 ans après toi ?' },
    { category: 'Futur', question: 'Quel conseil aimerai-tu recevoir venant d’une personne d’un lointain futur ?' },
    { category: 'Futur', question: 'Comment souhaiterai-tu mourir ?' },
    { category: 'Futur', question: 'Une mort que tu souhaiterai éviter en particulier ?' },
    { category: 'Futur', question: 'Y a-t-il quelque chose qui te fait particulièrement peur à l’avenir ?' },
    { category: 'Futur', question: 'Que souhaiterai tu léguer aux générations futures ?' },
    { category: 'Futur', question: 'Une chose que tu attends avec impatience ?' },
    { category: 'Futur', question: 'Une chose que tu ne voudrais pas transmettre ?' },
    { category: 'Futur', question: 'Y a-t-il un endroit dans le monde que tu souhaiterais visiter un jour ?' },
    { category: 'Futur', question: 'Un endroit où tu vas régulièrement et que tu aimerais ne plus jamais y retourner ?' },
    { category: 'Futur', question: 'Si tu pouvais voyager dans le futur et rencontrer « toi » en fin de vie, quelle serait ta première question ?' },
    { category: 'Futur', question: 'Si tu pouvais rencontrer “toi” d’un passé lointain ?' },

    // Ensemble category
    { category: 'Ensemble', question: 'Fais 3 déclarations avec nous, que ce soient des points communs ou une émotion que vous ressentez.' },
    { category: 'Ensemble', question: 'Cite 3 différences entre vous qui sont appréciables.' },
    { category: 'Ensemble', question: 'Si tu venais à mourir ce soir sans pouvoir communiquer avec qui que ce soit, qu’est-ce que tu regretterais de ne pas avoir dit ? Pourquoi ne l’as-tu pas dit avant ?' },
    { category: 'Ensemble', question: 'Ce que tu n’aurais pas du dire ?' },
    { category: 'Ensemble', question: 'Dis 5 choses que tu apprécies à propos de quelqu’un dans la pièce.' },
    { category: 'Ensemble', question: 'Dis 1 chose que tu apprécies pour chaque personne dans la pièce.' },
    { category: 'Ensemble', question: 'Complète la phrase "J’aimerai avoir quelqu’un avec qui..."' },
    { category: 'Ensemble', question: 'Cite une chose que tu apprécies faire avec les personnes présentes ici.' },
    { category: 'Ensemble', question: 'Quelle est la dernière fois que tu as pleuré devant quelqu’un ?' },
    { category: 'Ensemble', question: 'La dernière fois où tu as pleuré seul ?' },
    { category: 'Ensemble', question: 'Demande à quelqu’un ce qu’il pense de toi. De votre relation ?' },
    { category: 'Ensemble', question: 'Dis ce que tu penses de quelqu’un et de ta relation avec cette personne.' },
    { category: 'Ensemble', question: 'Parmi toutes les personnes dans ta famille, quelle mort te choquerait le plus et pourquoi ?' },
    { category: 'Ensemble', question: 'Quelle naissance t’a rendu le plus heureux ?' },
    { category: 'Ensemble', question: 'Qu’est ce qui peut t’énerver ? As-tu des souvenirs de la dernière fois où tu as été en colère ?' },
    { category: 'Ensemble', question: 'De la dernière fois où tu as énervé un proche ?' }
];

  currentCardIndex: number = 0;
  selectedCategory: string = 'all';
  uniqueCategories: string[] = [];
  filteredCards = this.cards;

  constructor(
    private gestureCtrl: GestureController,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.uniqueCategories = [...new Set(this.cards.map(card => card.category))];
  }

  ngAfterViewInit() {
    this.setupSwipeGestures();
  }

  get currentCard() {
    return this.filteredCards[this.currentCardIndex];
  }

  get currentCardColor() {
    const colors: { [key: string]: string } = { // Define index signature
      Léger: '#ccffcc', // green
      Situation: '#ffcccb', // chartreuse
      Anecdote: '#ffebcc', // yellow
      Valeurs: '#e6ccff', // orange
      Ethique: '#ccccff', // red
      Futur: '#ffcccb', // pink
      Ensemble: '#ffebcc', // blue
      
      // Add more colors for other categories
    };
    return colors[this.currentCard.category] || '#ffffff';
  }


  onCategoryChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCategory = selectedValue;
    this.filterCards();
  }

  filterCards() {
    if (this.selectedCategory === 'all') {
      this.filteredCards = this.cards;
    } else {
      this.filteredCards = this.cards.filter(card => card.category === this.selectedCategory);
    }
    this.currentCardIndex = 0; // Reset index when category changes
  }

  setupSwipeGestures() {
    // Create a new gesture handler
    const gesture = this.gestureCtrl.create({
      el: this.cardElement.nativeElement, // Attach gesture to our card element
      threshold: 15, // Minimum movement before gesture is recognized
      gestureName: 'swipe',

      // When user starts touching/clicking
      onStart: () => {
        // Add class to disable transitions during swipe for smooth movement
        this.cardElement.nativeElement.classList.add('swiping');
      },

      // During the swipe movement
      onMove: (ev) => {
        // Make the card follow the finger/cursor position
        this.cardElement.nativeElement.style.transform = `translateX(${ev.deltaX}px)`;
      },

      // When user releases the touch/click
      onEnd: (ev) => {
        // Remove the swiping class to re-enable transitions
        this.cardElement.nativeElement.classList.remove('swiping');
        
        const swipeThreshold = 100; // Minimum distance for a swipe to count
        
        // Check if swipe was long enough
        if (Math.abs(ev.deltaX) >= swipeThreshold) {
          if (ev.deltaX > 0) { // Swiped right
            console.log('Swiping right to previous card');
            this.cardElement.nativeElement.classList.add('card-exit-right');
            
            // Wait for animation to complete before changing card
            setTimeout(() => {
              console.log('Swiping change !!! to previous card');
              this.previousCard();
              this.cardElement.nativeElement.classList.remove('card-exit-right');
              // Force Angular to update the view - crucial for setTimeout
              this.changeDetectorRef.detectChanges();
            }, 300); // 300ms matches CSS animation duration
          } else { // Swiped left
            console.log('Swiping left to next card');
            this.cardElement.nativeElement.classList.add('card-exit-left');
            
            setTimeout(() => {
              console.log('Swiping change !!! to next card');
              this.nextCard();
              this.cardElement.nativeElement.classList.remove('card-exit-left');
              // Force Angular to update the view
              this.changeDetectorRef.detectChanges();
            }, 300);
          }
        } else {
          // If swipe wasn't long enough, reset card position
          console.log('Swipe not significant enough, resetting position');
          this.cardElement.nativeElement.style.transform = '';
        }
      },
    });
    gesture.enable(); // Activate the gesture handler
  }

  nextCard() {
    console.log('changing card !!!');
    // Calculate next index with wraparound
    this.currentCardIndex = (this.currentCardIndex + 1) % this.filteredCards.length;
    if (this.cardElement) {
      // Reset any leftover transform
      this.cardElement.nativeElement.style.transform = '';
    }
    // Force view update
    this.changeDetectorRef.detectChanges();
  }

  previousCard() {
    // Calculate previous index with wraparound
    this.currentCardIndex = (this.currentCardIndex - 1 + this.filteredCards.length) % this.filteredCards.length;
    if (this.cardElement) {
      // Reset any leftover transform
      this.cardElement.nativeElement.style.transform = '';
    }
    // Force view update
    this.changeDetectorRef.detectChanges();
  }
}
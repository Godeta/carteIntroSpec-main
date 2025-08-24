import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

class Enemy {
  x: number;
  y: number;
  width: number = 40;
  height: number = 60;
  color: string = "red";
  hp: number = 2;
  speed: number;
  image: HTMLImageElement;

  constructor(spawnLeft: boolean, canvasHeight: number) {
    this.y = canvasHeight - this.height;
    if (spawnLeft) {
      this.x = 0 - this.width;
      this.speed = 1.5; // moves right
    } else {
      this.x = 300; // right border of canvas
      this.speed = -1.5; // moves left
    }
    
    this.image = new Image();
    this.image.src = 'assets/demon_warhammer.png';
  }

  update(): void {
    this.x += this.speed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.image.complete) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}

class Projectile {
  x: number;
  y: number;
  radius: number = 5;
  speed: number = 5;
  direction: number;

  constructor(x: number, y: number, direction: number) {
    this.x = x;
    this.y = y;
    this.direction = direction; // 1 = right, -1 = left
  }

  update(): void {
    this.x += this.direction * this.speed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
  }
}


class Player {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  image: HTMLImageElement;

  // Caractéristiques
  degats_epee: number = 10;
  degats_tir: number = 5;
  pv: number = 3;

  // Mouvement
  vx: number = 0;
  vy: number = 0;
  speed: number = 3;
  jumpStrength: number = -12;
  gravity: number = 0.6;
  onGround: boolean = false;

  constructor(x: number, y: number, width: number = 40, height: number = 60, color: string = '#00ff00') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    
    this.image = new Image();
    this.image.src = 'assets/space_marine.png';
  }

  update(canvasWidth: number, canvasHeight: number): void {
    // Gravité
    this.vy += this.gravity;
    this.y += this.vy;

    // Déplacement horizontal
    this.x += this.vx;

    // Collision sol
    if (this.y + this.height >= canvasHeight) {
      this.y = canvasHeight - this.height;
      this.vy = 0;
      this.onGround = true;
    } else {
      this.onGround = false;
    }

    // Bordures
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > canvasWidth) this.x = canvasWidth - this.width;
  }

  jump(): void {
    if (this.onGround) {
      this.vy = this.jumpStrength;
      this.onGround = false;
    }
  }

  draw(ctx: CanvasRenderingContext2D, isInvulnerable: boolean = false): void {
    if (this.image.complete) {
      if (isInvulnerable) {
        // Create an offscreen canvas
        const offscreen = document.createElement('canvas');
        offscreen.width = this.width * 1.3;
        offscreen.height = this.height * 1.3;
        const offCtx = offscreen.getContext('2d');

        if (offCtx) {
          // Draw the original image
          offCtx.drawImage(this.image, 0, 0, offscreen.width, offscreen.height);

          // Apply red tint using 'source-atop' to affect only opaque pixels
          offCtx.globalCompositeOperation = 'source-atop';
          offCtx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // semi-transparent red
          offCtx.fillRect(0, 0, offscreen.width, offscreen.height);

          // Draw the tinted image to the main canvas
          ctx.drawImage(offscreen, this.x, this.y);
        }
      } else {
        // Normal draw
        ctx.drawImage(this.image, this.x, this.y, this.width * 1.3, this.height * 1.3);
      }
    } else {
      // Fallback if image not loaded
      ctx.fillStyle = isInvulnerable ? 'red' : this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}

class Joystick {
  x: number;
  y: number;
  radius: number;
  knobX: number;
  knobY: number;
  knobRadius: number;
  active: boolean = false;

  constructor(x: number, y: number, radius: number = 40) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.knobX = x;
    this.knobY = y;
    this.knobRadius = 20;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    // Cercle gris (zone)
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(128,128,128,0.5)";
    ctx.fill();

    // Cercle blanc (joystick)
    ctx.beginPath();
    ctx.arc(this.knobX, this.knobY, this.knobRadius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  start(x: number, y: number): void {
    this.active = true;
    this.update(x, y);
  }

  move(x: number, y: number): void {
    if (this.active) this.update(x, y);
  }

  end(): void {
    this.active = false;
    this.knobX = this.x;
    this.knobY = this.y;
  }

  private update(x: number, y: number): void {
    const dx = x - this.x;
    const dy = y - this.y;
    const dist = Math.min(Math.sqrt(dx * dx + dy * dy), this.radius);

    const angle = Math.atan2(dy, dx);
    this.knobX = this.x + Math.cos(angle) * dist;
    this.knobY = this.y + Math.sin(angle) * dist;
  }

  // Retourne un vecteur normalisé [-1,1]
  getDirection(): { dx: number; dy: number } {
    const dx = (this.knobX - this.x) / this.radius;
    const dy = (this.knobY - this.y) / this.radius;
    return { dx, dy };
  }
}


@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.scss'],
  imports: [CommonModule, IonRouterLink, RouterLink],
  standalone: true,
})
//gestion du jeu
export class WarComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('gameCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('joystickArea', { static: false }) joystickAreaRef!: ElementRef<HTMLDivElement>;
  @ViewChild('joystickKnob', { static: false }) joystickKnobRef!: ElementRef<HTMLDivElement>;

  private ctx!: CanvasRenderingContext2D;
  public player!: Player;
  private animationId!: number;
  private dirX: number = 0;
  private dirY: number = 0;

  // ennemies, projectile, time...
  private enemies: Enemy[] = [];
  private projectiles: Projectile[] = [];
  private lastSpawnTime: number = 0;
  private spawnInterval: number = 2000; // ms
  private enemyCount: number = 0;

  //state tracking
  private startTime: number = 0;
  private lastBonusSecond: number = -1;
  public elapsedTime: number = 0;
  public score: number = 0;
  public isDead: boolean = false;


  private invulnerable: boolean = false;

  attackMelee(): void {
    // Attack range = 40px
    this.enemies.forEach((enemy) => {
      if (
        Math.abs(this.player.x - enemy.x) < 50 &&
        Math.abs(this.player.y - enemy.y) < 20
      ) {
        enemy.hp -= 2;
        this.score += 2; // +2 points (1 per dmg)
      }
    });
    this.enemies = this.enemies.filter((e) => e.hp > 0);
  }

  shoot(): void {
    const dir = this.player.vx >= 0 ? 1 : -1;
    const proj = new Projectile(this.player.x + this.player.width / 2, this.player.y + this.player.height / 2, dir);
    this.projectiles.push(proj);
  }


  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initCanvas();
    this.setupJoystick();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private backgroundImg!: HTMLImageElement;
  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    // Taille fixe
    canvas.width = 300;
    canvas.height = 500;

    this.player = new Player(100, 100);
    this.startTime = Date.now();
    this.elapsedTime = 0;
    this.score = 0;
    this.isDead = false;

      // Load background
  this.backgroundImg = new Image();
  this.backgroundImg.src = 'assets/background.jpg'; // put file in src/assets/
  this.backgroundImg.onload = () => {
    this.animate();
  };
  }
  private setupJoystick(): void {
    const base = this.joystickAreaRef.nativeElement;
    const knob = this.joystickKnobRef.nativeElement;
    const radius = 50; // base radius
    const knobRadius = 20;

    const center = { x: radius, y: radius };

    const moveKnob = (clientX: number, clientY: number) => {
      const rect = base.getBoundingClientRect();
      const dx = clientX - (rect.left + center.x);
      const dy = clientY - (rect.top + center.y);
      const dist = Math.min(Math.sqrt(dx * dx + dy * dy), radius - knobRadius);
      const angle = Math.atan2(dy, dx);

      knob.style.left = `${center.x + Math.cos(angle) * dist - knobRadius}px`;
      knob.style.top = `${center.y + Math.sin(angle) * dist - knobRadius}px`;

      this.dirX = (dx / radius);
      this.dirY = (dy / radius);
    };

    const resetKnob = () => {
      knob.style.left = `${center.x - knobRadius}px`;
      knob.style.top = `${center.y - knobRadius}px`;
      this.dirX = 0;
      this.dirY = 0;
    };

    base.addEventListener('pointerdown', (e) => {
      base.setPointerCapture(e.pointerId);
      moveKnob(e.clientX, e.clientY);
    });
    base.addEventListener('pointermove', (e) => {
      if (e.pressure > 0) moveKnob(e.clientX, e.clientY);
    });
    base.addEventListener('pointerup', () => resetKnob());
  }

  private animate(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.drawImage(this.backgroundImg, 0, 0, canvas.width, canvas.height);

    const now1 = Date.now();
    this.elapsedTime = Math.floor((now1 - this.startTime) / 1000);

    // +5 points every 10s survived
    if (this.elapsedTime > 0 && this.elapsedTime % 10 === 0) {
      if (Math.floor((now1 - this.startTime) / 1000) !== this.lastBonusSecond) {
        this.score += 5;
        this.lastBonusSecond = this.elapsedTime;
      }
    }


    // Movement from joystick
    this.player.vx = this.dirX * this.player.speed;

    // Jump when pushing up
    if (this.dirY < -0.5 && this.player.onGround) {
      this.player.jump();
    }

    this.player.update(canvas.width, canvas.height);
    this.player.draw(this.ctx, this.invulnerable);

    // Progressive difficulty: decrease spawn interval over time
    const currentInterval = Math.max(500, this.spawnInterval - (this.elapsedTime * 20));
    
    // Spawn enemies
    const now = Date.now();
    if (now - this.lastSpawnTime > currentInterval) {
      const spawnLeft = Math.random() < 0.5;
      const enemy = new Enemy(spawnLeft, canvas.height);
      
      // Every 5th enemy is faster
      this.enemyCount++;
      if (this.enemyCount % 5 === 0) {
        enemy.speed *= 1.5;
      }
      
      this.enemies.push(enemy);
      this.lastSpawnTime = now;
    }

    // Update projectiles
  this.projectiles.forEach((p) => p.update());
  this.projectiles.forEach((p) => {
    this.enemies.forEach((e) => {
      if (
        p.x > e.x &&
        p.x < e.x + e.width &&
        p.y > e.y &&
        p.y < e.y + e.height
      ) {
        e.hp -= 1;
        this.score += 1; // +1 point for dmg
        p.x = -9999; // remove projectile
      }
    });
  });
  if (this.isDead) return;

  // Clean up
  this.projectiles = this.projectiles.filter((p) => p.x > 0 && p.x < canvas.width);
  this.enemies = this.enemies.filter((e) => e.hp > 0);

  this.enemies.forEach((e) => {
    if (
      Math.abs((e.x + e.width / 2) - (this.player.x + this.player.width / 2)) < 4 &&
      Math.abs((e.y + e.height / 2) - (this.player.y + this.player.height / 2)) < 4
    ) {
      if (!this.invulnerable) {
        this.player.pv -= 1;
        this.invulnerable = true;
        setTimeout(() => (this.invulnerable = false), 1200);
        if (this.player.pv <= 0 && !this.isDead) {
          this.isDead = true;
          cancelAnimationFrame(this.animationId);
        }

      }
    }
  });

  this.enemies.forEach((e) => e.update());
  this.enemies.forEach((e) => e.draw(this.ctx));
  this.projectiles.forEach((p) => p.draw(this.ctx));



    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

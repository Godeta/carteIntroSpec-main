# 🎴 carteIntroSpec

> Petit prototype de jeu de cartes permettant d'afficher différentes questions selon certaines catégories.

Ce projet utilise **Ionic** et **Capacitor** pour créer une application mobile (Android) ainsi qu'une version web.  
**Objectif :** Jeu Pasapa disponible partout, open source et facile à personnaliser + test de Ionic pour le développement d'applications hybrides.

## 🎮 Jouer maintenant

### 🌐 Version en ligne
**[Jouer directement dans le navigateur](https://godeta.github.io/carteIntroSpec-main/)**

Vous y trouverez les différentes questions de façon aléatoire pour lancer des discussions sympa !

### 🖨️ Version physique (IRL Game)

Dans le dossier `irl_game` se trouve le vrai jeu de cartes réalisé avec Canva :
- 📄 **PDF** pour l'imprimer
- 📋 **Notice** pour rapidement l'utiliser  
- 📝 **Notes** avec plus d'informations

**Version actuelle :** 2ème mini prototype

#### 🎯 Vision du projet
- Concept et but du jeu clairement identifiés
- Mécaniques de base établies
- Améliorations du contenu à envisager
- Possible de le décliner en versions adaptées à différents publics :
  - Personnes qui ne se connaissent pas
  - Amis proches
  - Différentes tranches d'âge
  - Thèmes spécifiques (convictions personnelles, ECSI, société)

#### 🤝 Projet collaboratif
Objectif : créer un projet **open source** avec une version classique fonctionnelle, puis permettre aux utilisateurs de proposer leurs propres déclinaisons.

**[🎨 Modifier le jeu sur Canva](https://www.canva.com/design/DAGgqYZmK_s/pgcJ8BQDLEItQ3P5fGsMew/edit?utm_content=DAGgqYZmK_s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)**

---

# 💻 Développement

## 🧰 Prérequis

Assurez-vous d'avoir les outils suivants installés :

- [Node.js (LTS recommandé)](https://nodejs.org) (v18.x ou v20.x)
- npm (inclus avec Node.js)
- Ionic CLI
- Android Studio (pour les builds mobiles)

### 🔎 Vérifier les versions installées

```bash
node -v
npm -v
ionic -v
java -version
npx cap -v
```

## ⚙️ Installation des outils

### Node.js + npm

**Linux/macOS (via nvm) :**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc    # ou ~/.zshrc selon votre terminal
nvm install --lts
```

**Windows :**  
Télécharger et installer depuis [nodejs.org](https://nodejs.org)

### Ionic CLI
```bash
npm install -g @ionic/cli
```

## 🚀 Lancer l'application

### 🌐 Version Web
```bash
npm install        # Installer les dépendances du projet
ionic serve        # Lancer l'application en mode dev dans le navigateur
```

### 📱 Version Mobile (Android)
```bash
ionic build                            # Génère l'application web
ionic capacitor add android            # Une seule fois
ionic capacitor sync                   # Synchronise les fichiers avec le projet Android
npx cap open android                   # Ouvre le projet dans Android Studio
```

### ⚠️ Configuration importante

**BaseHref selon la plateforme :**
- Site web : `"baseHref": "/carteIntroSpec-main/"`
- Android : `"baseHref": "./"`

**Génération des icônes :**
```bash
npx @capacitor/assets generate --assetPath ressources/
```

**Versioning pour Google Play :**
- `versionCode` dans `android/app/build.gradle` (doit être incrémenté à chaque release)
- `versionName` : version visible par les utilisateurs (ex: 1.0.1, 2.0-beta)

## 🔄 Mise à jour des dépendances

```bash
# Désinstaller les anciennes versions
npm uninstall @capacitor/android @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar

# Installer les dernières versions
npm install @capacitor/core@latest @capacitor/android@latest
npm install @capacitor/app@latest @capacitor/haptics@latest @capacitor/keyboard@latest @capacitor/status-bar@latest

# Synchroniser
npx cap sync android
```

**Configuration SDK :**
- `compileSdkVersion = 35` dans `variables.gradle`
- `targetSdkVersion = 35`

## 🧹 Nettoyage

```bash
npm uninstall -g ionic cordova
npm cache clean --force
```

## 🌐 Déploiement GitHub Pages

```bash
npm install --save-dev angular-cli-ghpages
npx angular-cli-ghpages --dir=www
```

## 📋 To-Do

- [ ] **Design mobile :** Modifier les énigmes pour l'affichage téléphone
- [ ] **Améliorer le design :** Cartes actions, questions, ajout d'infos
- [ ] **Tests utilisateurs :** 12 testeurs pour la version test fermée (14 jours)
- [ ] **Optimisation responsive :** Assurer la lisibilité sur tous les écrans

# carteIntroSpec

Petit prototype de jeu de cartes permettant d’afficher différentes questions selon certaines catégories.  
Ce projet utilise **Ionic** et **Capacitor** pour créer une application mobile (Android) ainsi qu'une version web.  
Objectif : tester Ionic pour le développement d'applications hybrides.

---

# irl_game, imprimer le jeu ?
Dans ce dossier se trouve le vrai jeu de carte réalisé avec Canva. Il y a un pdf pour l'imprimer, une notice pour rapidement l'utiliser et une note en texte avec un peu plus d'infos. C'est actuellement le 2ème mini prototype (le 1er proto était sous word juste des cartes de questions avec différentes thèmes, je le rajouterai peut être sur le git à l'avenir pour avoir un historique de l'évolution du jeu). Je pense que le concept du jeu, son but est clairement identifier. Certaines mécaniques aussi. Il reste beaucoup d'améliorations pour identifier un mode de jeu qui est simple et efficace, peaufiner certaines méchaniques, potentiellement faire des versions alternaties du jeu ou autre pour s'acapter à des publics plus spécifiques (des personnes que ne se connaissent pas, potes, amis proches, jeunes, personnes agées, questions plus sur un thème comme les convictions personnelles - faire réfléchir à l'ECSI ou la société dans laquelle on aimerait vivre...) 
J'aimerai éventuellement en faire un projet collaboratif open source en faisant une version classique qui fonctionne bien dans la plupart des cas puis laisser les utilisateurs proposer ou construire toutes sortes de déclinaisons.
Voici le lien du Canva pour modifier le jeu : https://www.canva.com/design/DAGgqYZmK_s/pgcJ8BQDLEItQ3P5fGsMew/edit?utm_content=DAGgqYZmK_s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton 

# Jouer en ligne ?
Aller sur : https://godeta.github.io/carteIntroSpec-main/ 
Vous y trouverez les différentes questions de façon aléatoire pour lancer des discussions sympa !

---
# Dev

## 🧰 Prérequis

Assurez-vous d’avoir les outils suivants installés :

- [Node.js (LTS recommandé)](https://nodejs.org) (v18.x ou v20.x)
- npm (inclus avec Node.js)
- Ionic CLI
- Android Studio (pour les builds mobiles)

### 🔎 Vérifier les versions installées :

```bash
node -v
npm -v
ionic -v
java -version
npx cap -v
```

Si certains outils sont manquants ou obsolètes, suivez les étapes ci-dessous pour les installer.

⚙️ Installation des outils
Node.js + npm
Linux/macOS (via nvm) :
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc    # ou ~/.zshrc selon votre terminal
nvm install --lts
Windows :
Télécharger et installer depuis https://nodejs.org

Ionic CLI
npm install -g @ionic/cli

## Lancer l'application
Web : 
npm install        # Installer les dépendances du projet
ionic serve        # Lancer l'application en mode dev dans le navigateur

Mobile : 
ionic build                            # Génère l'application web
ionic capacitor add android            # Une seule fois
ionic capacitor sync                   # Synchronise les fichiers avec le projet Android
npx cap open android                   # Ouvre le projet dans Android Studio

attention -> 
"baseHref": "/carteIntroSpec-main/", //site web
"baseHref": "./", //android
npx @capacitor/assets generate --assetPath ressources/ # Genère les icones

Nettoyage :
npm uninstall -g ionic cordova
npm cache clean --force

## github web upload
npm install --save-dev angular-cli-ghpages
npx angular-cli-ghpages --dir=www

## to-do
Engimes design a modifier pour telephone on voit pas tout
Faire le design d'une icone, recup fichier apk et tester une publi sur le play store ?


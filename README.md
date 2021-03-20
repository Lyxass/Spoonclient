# SpoonClient
###Par Lucas Gazeau et Lylian Siffre

## Installation du projet :

Il faut installer le projet, pour cela rendez-vous dans la racine du projet et lancer la commande 
```bash
npm install
```

## Lancer le projet 

Pour lancer le projet, vous pouvez exécuter la commande suivante : 
```bash
npm run serve
```

## Build le projet :

Vous devez renseigner la clé d'api dans le fichier suivant : src/store/index.js.
Une fois réalisé, vous devez éditer le fichier à la racine nommé vue.config.js et y insérer l'URL où vous stockerez le projet compilé.
Vous pouvez modifier la commande deploy dans package.json pour quelle copie automatiquement le build dans le répertoire souhaité

Pour compiler sans la copie : 
```bash
npm run build
```
Cela va créer un dossier dist contenant le projet compilé.

Documentation Vue Cli: https://cli.vuejs.org/config/

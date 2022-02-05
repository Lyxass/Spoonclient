# SpoonClient

A basic client for the recipe API Spoonclient.

This project was made as an VueJS exercice during my studies in Computer DUT.  

## Install the project :

To install the project, you have to clone this project. 

**Warning** due to incompatibility of the node-sass package, this application should run using version **14.19.0 of nodeJS**.

You can install the project by using the following command

```bash
npm install
```
To start the project, use the following command. 
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

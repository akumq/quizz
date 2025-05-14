# Quiz BI - Application de Quiz Interactif

Cette application web permet de passer un quiz sur la Business Intelligence avec des questions à choix multiples qui apparaissent aléatoirement.

## Fonctionnalités

- Affichage aléatoire des questions
- Chronomètre pour suivre le temps passé
- Calcul du score final
- Affichage détaillé des résultats avec explications

## Comment utiliser l'application

1. Ouvrez le fichier `index.html` dans votre navigateur web.
2. Cliquez sur le bouton "Commencer le Quiz" pour démarrer.
3. Répondez aux questions en sélectionnant l'option appropriée.
4. Cliquez sur "Question Suivante" pour passer à la question suivante.
5. À la fin du quiz, consultez vos résultats et les explications pour chaque question.
6. Vous pouvez recommencer le quiz en cliquant sur le bouton "Recommencer".

## Comment ajouter plus de questions

Pour ajouter plus de questions à partir du PDF, ouvrez le fichier `questions.js` et ajoutez de nouvelles questions en suivant cette structure :

```javascript
{
    question: "Votre question ici",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    correctAnswer: 0, // Index de la réponse correcte (0 pour la première option)
    explanation: "Explication de la réponse"
}
```

Ajoutez cette structure dans le tableau `quizQuestions`.

## Personnalisation

Vous pouvez personnaliser l'apparence de l'application en modifiant le fichier `styles.css`.

## Compatibilité

L'application fonctionne sur tous les navigateurs web modernes (Chrome, Firefox, Safari, Edge). 
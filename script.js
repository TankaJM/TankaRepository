// script.js

document.getElementById('specialButton').addEventListener('click', function() {
    const messages = [
        "Gardez toujours un œil sur le radar!",
        "Utilisez la couverture à votre avantage!",
        "Communiquez avec votre équipe pour gagner!",
        "Un tir en pleine tête vaut toujours mieux que plusieurs tirs au corps.",
        "Maîtrisez le recoil pour être plus précis!"
    ];
    
    // Choisir un message aléatoire
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Afficher le message
    document.getElementById('message').textContent = randomMessage;
});

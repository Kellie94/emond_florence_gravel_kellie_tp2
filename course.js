
/* Variables */ 
let car1 = document.getElementsByClassName("car1");
let car2 = document.getElementsByClassName("car2");

let translationX1 = 0;
let translationX2 = 0;

let containerWidth = parseFloat(1500);  // À modifier si on a du temps
let voiture1Width = parseFloat(120);
let voiture2Width = parseFloat(120);


function compteARebour() {
    let seconde = 6;
    let compteARebours = document.getElementById("compteARebours");

    let compteur = setInterval(() => { //répete les actions à faire selon une intervale
        seconde--;
        compteARebours.textContent = seconde;   //Contenu du p avec id compteARebours dans le html, il contient les secondes qui défilent

        if (seconde <= 0) {
            clearInterval(compteur); //arrête le setInterval
            compteARebours.textContent = ""; //Compteur n'affiche plus de données
        }
    },1000); //intervale qui agit à chaque seconde (1000ms = 1sec)
}


function chronometre() {

}


function aleatoireTranslationX() {
    let maxTranslationX = containerWidth - voiture1Width;   //Calculer la valeur maximale de déplacement horizontal.
    let valeurAleatoire = Math.random() * (maxTranslationX + 1);    //Générer un nombre entre 0 et maxTranslationX.
    valeurAleatoire = Math.floor(valeurAleatoire);  //Arrondir le nombre.
}


function deplacerVoiture() {

}


function demarrerCourse() {
    compteARebour();
    aleatoireTranslationX();
    
}

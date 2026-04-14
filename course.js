/* Variables */ 
let car1 = document.getElementsByClassName("car1");
let car2 = document.getElementsByClassName("car2");

let translationX1 = 0;
let translationX2 = 0;

let selecteurContainerWidth = document.querySelector(".mains-car");
let containerWidth = getComputedStyle(myDiv).getPropertyValue("width");    //Met valeur de la largeur de l'élément dans une variable
let selecteurVoiture1Width = document.querySelector(".car1");
let voiture1Width = getComputedStyle(myDiv).getPropertyValue("width");
let selecteurVoiture2Width = document.querySelector(".car2");
let voiture2Width = getComputedStyle(myDiv).getPropertyValue("width");



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
    let maxTranslationX = containerWidth - voiture1Width;
    let valeurAleatoire = Math.random() * (maxTranslationX + 1);
    valeurAleatoire = valeurAleatoire * maxTranslationX;
    valeurAleatoire = Math.floor(valeurAleatoire);
    alert(valeurAleatoire);
}


function deplacerVoiture() {

}


function demarrerCourse() {
    compteARebour();
    
}

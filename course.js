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


function aleatoireTranslation() {

}


function deplacerVoiture() {

}


function demarrerCourse() {

}

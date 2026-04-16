/*| VARIABLES |*/ 
let car1 = document.getElementsByClassName("car1");
let car2 = document.getElementsByClassName("car2");

let translationX1 = 0;
let translationX2 = 0;

let containerWidth = parseFloat(1500);  
let voiture1Width = parseFloat(120);
let voiture2Width = parseFloat(120);



/*| COPMTE À REBOUR |*/
function compteARebour() {
    let seconde = 6;
    let compteARebours = document.getElementById("compteARebours");

    let compteur = setInterval(() => {          //Répète les actions à faire selon une intervale
        seconde--;
        compteARebours.textContent = seconde;   //Contenu du p avec id compteARebours dans le html, il contient les secondes qui défilent

        if (seconde <= 0) {
            clearInterval(compteur);            //Arrête le setInterval
            compteARebours.textContent = "";    //Compteur n'affiche plus de données
        }
    },1000);                                    //Intervale qui agit à chaque seconde (1000ms = 1sec)
}



/*| CHRONOMÈTRE |*/
function chronometre() {
  const TEMPSVOITUREBLEU = document.getElementById("chronobleu");   //Permet d'afficher les chronos en temps réel
  const TEMPSVOITUREROUGE = document.getElementById("chronorouge");

  if (demarrerCourse.started) return;                               //Empêcher plusieurs lancements à l'appuie de bouton
  demarrerCourse.started = true;

  const DEBUTTEMPS = Date.now();                                    //Aller chercher date actuel au moment du clic

  function update() {                                               
    const TEMPSECOULE = Date.now() - DEBUTTEMPS;                    //Calcule les minutes, secondes et millisecondes entre le temps de départ et celui actuel
    const minutes = Math.floor(TEMPSECOULE / 60000);
    const secondes = Math.floor((TEMPSECOULE % 60000) / 1000);
    const millisecondes = TEMPSECOULE % 1000;

    const TEMPS =                                                   //Permet d'écrire les chiffres en lettre et de placer des zeros dans les espaces "vides"
      String(minutes).padStart(2, "0") + ":" +
      String(secondes).padStart(2, "0") + ":" +
      String(millisecondes).padStart(3, "0");

    TEMPSVOITUREBLEU.textContent = TEMPS;                           //Mise à jour des balises correspondantes des deux chronos pour la voiture bleu et rouge
    TEMPSVOITUREROUGE.textContent = TEMPS;

    requestAnimationFrame(update);                                  //Permet d'actualiser à chaque 60secondes
  }
  update();
}



/*| TRANSLATION ALÉATOIRE |*/
function aleatoireTranslationX() {
    let maxTranslationX = containerWidth - voiture1Width;           //Calculer la valeur maximale de déplacement horizontal.
    let valeurAleatoire = Math.random() * (maxTranslationX + 1);    //Générer un nombre entre 0 et maxTranslationX.
    valeurAleatoire = Math.floor(valeurAleatoire);                  //Arrondir le nombre.
    return valeurAleatoire;                                         //Permet de retourner la valeur de valeurAleatoire vers une autre fonction.
}



/*| DÉPLACER VOITURE |*/
function deplacerVoiture() {
    let maxTranslationX = containerWidth - voiture1Width;           //Calculer la valeur maximale de déplacement horizontal.
    let root = document.documentElement;                            //Permet d'accéder aux élément de style du root.

    setInterval(() => {                                                 //Répète les actions à faire selon une intervale
        translationX1 = translationX1 + aleatoireTranslationX();        //Valeur de la translation
        root.style.setProperty("--left-car1", translationX1  + "px");   //Change la valeur left de la voiture par la valeur de la translation

        translationX2 = translationX2 + aleatoireTranslationX();
        root.style.setProperty("--left-car2", translationX2 + "px");

        if (translationX1 >= maxTranslationX) {
        root.style.setProperty("--left-car1", maxTranslationX + "px");  //Permet de faire la translation jusqu'à la ligne d'arrivée
        }
        if (translationX2 >= maxTranslationX) {
        root.style.setProperty("--left-car2", maxTranslationX + "px");
        }
    },1000);                                                            //Intervale qui agit à chaque seconde (1000ms = 1sec)
}


    
/*| DÉMARRER COURSE |*/
function demarrerCourse() {  
    compteARebour();
    aleatoireTranslationX();
    deplacerVoiture();
    chronometre()
}

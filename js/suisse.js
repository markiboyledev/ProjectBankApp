// Le code s'exécute seulement quand la page est complètement chargée
document.addEventListener("DOMContentLoaded", () => {

    // Récupération des éléments HTML
    const boutonAjouter = document.getElementById("Ajout"); // bouton pour ajouter
    const boutonRetirer = document.getElementById("Retirer"); // bouton pour retirer
    const solde = document.getElementById("solde-affiche"); // span qui affiche le solde
    const input = document.getElementById("Choix-retrait"); // champ où on écrit le montant

    // -----------------------
    // Fonction pour retirer de l'argent
    // -----------------------
    function Retirer(nbr){

        // On récupère le solde actuel et on le transforme en nombre
        let soldeActuel = Number(solde.textContent);

        // Vérifie si le montant est invalide (vide, négatif ou pas un nombre)
        if (isNaN(nbr) || nbr <= 0){
            return "Erreur : montant invalide";
        }

        // Vérifie si le montant est supérieur au solde
        if (nbr > soldeActuel){
            return "Erreur : pas assez d'argent";
        }

        // On enlève le montant au solde
        solde.textContent = soldeActuel - nbr;

        return "Retrait réussi";
    }

    // -----------------------
    // Fonction pour ajouter de l'argent
    // -----------------------
    function Ajouter(nbr){

        // le montant maximum que l'on peut ajouter
        let soldeMax = 10000;
        // On récupère le solde actuel
        let soldeActuel = Number(solde.textContent);

        // Vérifie si le montant est invalide
        if (isNaN(nbr) || nbr <= 0){
            alert ("Erreur : montant invalide");
            return;
        }
        
        if (soldeActuel + nbr < soldeMax) {
            // Le montant que l'on veut ajouter
            solde.textContent = soldeActuel + nbr
        } else {
            //Le montant maximum etant depasser l'argent ne peut pas être ajouter
            alert("Action impossible : le plafond de 10 000€ serait dépassé !");
            return;
        }

        return "Ajout réussi";
    }

    // -----------------------
    // Événement bouton Retirer
    // -----------------------
    boutonRetirer.addEventListener("click", () => {

        // On récupère la valeur écrite dans l'input
        let montant = Number(input.value);

        // On appelle la fonction Retirer
        let message = Retirer(montant);

        // On affiche le message
        alert(message);
    });

    // -----------------------
    // Événement bouton Ajouter
    // -----------------------
    boutonAjouter.addEventListener("click", () => {

    Ajouter(Number(input.value)); 
    input.value = "";

    });

    // -----------------------
    // Dark Mode
    // -----------------------
    const darkButton = document.getElementById("dark");

    darkButton.addEventListener("click", () => {

        // Ajoute ou enlève la classe "dark" sur le body
        // Cela change les couleurs grâce au CSS
        document.body.classList.toggle('dark');
    });



});
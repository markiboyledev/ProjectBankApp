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

        // On récupère le solde actuel
        let soldeActuel = Number(solde.textContent);

        // Vérifie si le montant est invalide
        if (isNaN(nbr) || nbr <= 0){
            return "Erreur : montant invalide";
        }

        // On ajoute le montant au solde
        solde.textContent = soldeActuel + nbr;

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

        let montant = Number(input.value);
        let message = Ajouter(montant);
        alert(message);
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
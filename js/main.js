document.querySelectorAll('.carre').forEach(carres => {
    carres.addEventListener('click', function() {
        const couleur = window.getComputedStyle(this).backgroundColor; // Récupère les styles calculés pour l'élément, y compris ceux définis dans des fichiers CSS externes. ici, on récupère la couleur du carré cliqué
        const codeCouleur = document.getElementById('code-couleur');
        const carreDuBas = document.getElementById('carre-du-bas');
    

        // Changer la couleur du carré du bas
        carreDuBas.style.backgroundColor = couleur;


        // Afficher le code couleur à l'intérieur du carré
        codeCouleur.innerText = `${couleur}`;
    });
});

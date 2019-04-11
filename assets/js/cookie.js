//Gestion du score
let multiplicateur = 1;
let score = 0 * multiplicateur;

//Gestion des prix
let multi_prix = 200;
let auto_prix = 500;
let auto_dispo = 0;
let bonus_prix = 5000;

//Gestion des affiliations
let bonus = document.querySelector('#bonus');




//Gestion du temps
let temps_bonus = 30;

//Gestion des relations
function affiche() {
    if (multi_prix < score) {
        document.querySelector('#clic').style.display = "block";
    } else {
        document.querySelector('#clic').style.display = "none";
    }
    if (auto_dispo === 0) {
        if (auto_prix < score && true) {
            document.querySelector('#autoclick').style.display = "block";
        } else {
            document.querySelector('#autoclick').style.display = "none";
        }

    } else {
        document.querySelector('#autoclick').style.display = "none";
    }
    if (bonus_prix < score) {
        if (temps_bonus === 30) {
            document.querySelector('#bonus').style.display = "block";

        } else {
            document.querySelector('#bonus').style.display = "none";
        }
    } else {
        document.querySelector('#bonus').style.display = "none";
    }
}


let jouer = () => {
    score = score + (1 * multiplicateur);
    document.getElementById('affichage').innerText = score;
    document.getElementById('cookie').style.transform = "scale(0.98)";
    setTimeout(function() { cookie.style.transform = "scale(1.0)"; }, 100);
    affiche();
}

let multi = () => {
    if (score > multi_prix) {
        score = ((score - multiplicateur) - multi_prix)
        multiplicateur += 1;
        document.querySelector('#clic').innerText = "Clic* " + (multiplicateur + 1);
        document.getElementById('affichage').innerText = score;
        multi_prix = Math.round(multi_prix * 1.5);
        msg.innerHTML = "Vous avez acheter un <span style='font-weight:bold'>\"clic*" + (multiplicateur + 1) +
            "\r\"</span>  à " + multi_prix + " cookies !" +
            " \r Prochain prix: " + Math.round(multi_prix * 1.5) + " cookies !";
        affiche();

    } else {
        msg.innerHTML = "Vous n'avez pas assez de cookies ! " +
            "\r Prix : " + multi_prix + " cookies !" +
            " \r Prochain prix: " + Math.round(multi_prix * 1.5) + " cookies !";
        affiche();

    }
}

let autoclic = () => {
    if (score >= auto_prix) {
        score -= auto_prix || true;
        setInterval(function() { jouer() }, 1000);
        document.getElementById('affichage').innerText = score;
        document.querySelector('#autoclick').disabled = true;
        auto_dispo++;
        msg.innerHTML =
            "<span style='font-weight:bold'>Auto-Clique</span> activé !";
        document.getElementById('auto_dispo').innerHTML = '<i class="far fa-hand-pointer"></i>Auto-Clique activé !';

    } else {}
}

let bonustps = () => {

    if (score > bonus_prix) {
        intervalle = setInterval(tps_texte, 1000);
        score = score - bonus_prix;
        bonusScore();
        tps();
        tps_texte();
        bonus_prix = Math.round(bonus_prix * 1.5)
        msg.innerHTML = "Vous avez acheter le bonus qui <span style='font-weight:bold'>double la valeur du clic" +
            "\r pendant 30 secondes </span> à " + bonus_prix + " cookies !" +
            " \r Prochain prix: " + Math.round(bonus_prix * 1.5) + " cookies !";
        affiche();


    } else {
        msg.innerHTML = "Vous n'avez pas assez de cookies ! " +
            "\r Prix : " + bonus_prix + " cookies !" +
            " \r Prochain prix: " + Math.round(bonus_prix * 1.5) + " cookies !";
        affiche();

    }
}

let bonusScore = () => {
    multiplicateur = multiplicateur * 2;
}

let bonusScoreEnd = () => {
    multiplicateur = multiplicateur / 2;
}

let tps = () => {
    setTimeout(bonusScoreEnd, 30000);
}
let tps_texte = () => {
    temps_bonus = temps_bonus - 1
    if (temps_bonus == 0) {
        temps_bonus += 30
        clearInterval(intervalle);

    }
    if (temps_bonus != 30 && temps_bonus < 30 && temps_bonus > 0) {
        document.querySelector('#bonus_text').innerText = ("Bonus " + (temps_bonus));
    } else {

        document.querySelector('#bonus_text').innerText = ("Le bonus est terminé !");
        setInterval(function() {
            document.querySelector('#bonus_text').innerText = " ";
        }, 5000);
    }

}

bonusScore = () => {
    multiplicateur = multiplicateur * 2;
}

document.addEventListener("keydown", jouer);
let ecran = document.documentElement;

function openFullscreen() {
    if (ecran.requestFullscreen) {
        ecran.requestFullscreen();
    } else if (ecran.mozRequestFullScreen) { /* Firefox */
        ecran.mozRequestFullScreen();
    } else if (ecran.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        ecran.webkitRequestFullscreen();
    } else if (ecran.msRequestFullscreen) { /* IE/Edge */
        ecran.msRequestFullscreen();
    }
}
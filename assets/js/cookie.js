let score = 0;
let multiplicateur = 1;
let multi_prix = 50;
let auto_prix = 200;
let bonus_prix = 500;
let bonus = document.querySelector('#bonus');
let temps_bonus = 30


function affiche() {
    if (multi_prix < score) {
        document.querySelector('#clic').style.display = "block";
    } else {
        document.querySelector('#clic').style.display = "none";
    }
    if (auto_prix < score) {
        document.querySelector('#autoclick').style.display = "block";
    } else {
        document.querySelector('#autoclick').style.display = "none";
    }
    if (bonus_prix < score) {
        document.querySelector('#bonus').style.display = "block";
    } else {
        document.querySelector('#bonus').style.display = "none";
    }
}


let jouer = () => {
    score = score + (1 * multiplicateur);
    document.getElementById('affichage').innerText = score;
    document.getElementById('cookie').style.transform = "scale(0.98)";
    setTimeout(function() { document.getElementById('cookie').style.transform = "scale(1.0)"; }, 100);

    affiche();
}

let x1 = () => {
    if (score > multi_prix) {
        score = ((score - multiplicateur) - multi_prix)
        multiplicateur += 1;
        document.getElementById('clic').innerText = "Un clic vaut désormais " + multiplicateur + " cookies !";
        document.getElementById('affichage').innerText = score;
        console.log(score);
        multi_prix = Math.round(multi_prix * 1.5);
        msg.innerHTML =
            "\r Prix : " + multi_prix + " cookies !" +
            " \r Prochain prix: " + (multi_prix * 1.5) + " cookies !";
        affiche();

    } else {
        msg.innerHTML = "Vous n'avez pas assez de cookies ! " +
            "\r Prix : " + multi_prix + " cookies !" +
            " \r Prochain prix: " + (multi_prix * 1.5) + " cookies !";
        affiche();

    }
}

let autoclick = () => {
    if (score >= auto_prix) {
        score -= auto_prix || true;
        setInterval(function() { jouer() }, 1000);
        document.getElementById('affichage').innerText = score;
        autoclick = document.getElementById('autoclick').disabled = true;
        console.log(score);
        auto_prix = Math.round(auto_prix * 1.5)
        msg.innerHTML =
            " \r Prix : " + auto_prix + " cookies !" +
            " \r Prochain prix: " + (auto_prix * 1.5) + " cookies !";
        affiche();

    } else {
        msg.innerHTML =
            "Vous n'avez pas assez de cookies ! " +
            " \r Prix : " + auto_prix + " cookies !" +
            " \r Prochain prix: " + (auto_prix * 1.5) + " cookies !";
        affiche();

    }
}

let bonustps = () => {

    if (score > bonus_prix) {
        intervalle = setInterval(tps_texte, 1000);
        score = score - bonus_prix;
        bonus.disabled = true;
        bonusScore();
        tps();
        tps_texte();
        bonus_prix = Math.round(bonus_prix * 1.5)
        msg.innerHTML =
            "\r Prix : " + bonus_prix + " cookies !" +
            " \r Prochain prix: " + (bonus_prix * 1.5) + " cookies !";
        affiche();


    } else {
        msg.innerHTML = "Vous n'avez pas assez de cookies ! " +
            "\r Prix : " + bonus_prix + " cookies !" +
            " \r Prochain prix: " + (bonus_prix * 1.5) + " cookies !";
        affiche();

    }
}

let bonusScore = () => {
    multiplicateur = multiplicateur * 2;
    console.log(multiplicateur);
}

let bonusScoreEnd = () => {
    multiplicateur = multiplicateur / 2;
    bonus.disabled = false;
    console.log(multiplicateur);
}

let tps = () => {
    settpsout(bonusScoreEnd, 30000);
}
let tps_texte = () => {
    temps_bonus = temps_bonus - 1
    if (temps_bonus == 0) {
        temps_bonus += 30
        clearInterval(intervalle);

    }
    document.getElementById("bonus").innerText = ("Bonus " + (temps_bonus));
}

bonusScore = () => {
    multiplicateur = multiplicateur * 2;
    console.log(multiplicateur);
}

document.addEventListener("keydown", jouer);
let elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
var bouton = document.getElementById("bouton");
var affichage = document.getElementById("affichage");
var multiplicateur = document.getElementById("multiplicateur");
var affichageAutoClick = document.getElementById('autoclic');
var score = 0;
var point = 1;
var compteur = 1;
var auto;




function afficherScore() { 
	affichage.innerHTML = "Mon score est de : " + score +" " + "point(s)";
};

function ajouterPoint(){
	score += point * compteur;
	afficherScore();
	
};

function afficherMultiplier(){
	multiplicateur.innerHTML = "Multiplicateur x" + " " + compteur + " " + "<br/>" + "prochain multiplicateur à" + "<br/> " + prix() + " " + "points";
	
};

function prix() {
        return 50 * compteur;
};

function incrementer(){
	
	if (score>prix()) {
		compteur += 1;
		score -= 50;

	} else{
		alert("votre score est top bas");
	}

	afficherScore();
	afficherMultiplier();
};


function autoClick(){
	if (score>=200) {
	score += point;
	}
	afficherScore();
};

function afficherAutoClick(){
	affichageAutoClick.innerHTML = "<br/>Gain automatique dès 200 points";
	
};




afficherScore();
bouton.onclick = ajouterPoint;

afficherMultiplier();
multiplicateur.onclick = incrementer;


auto = setInterval("autoClick()", 1000);
autoClick();
afficherAutoClick();



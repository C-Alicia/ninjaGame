var avatar = document.querySelector('.avatar');
var obstacle = document.querySelector('.obstacle');


/* Bouton sauter */
function jump() {
    /*  Fonction pour faire sauter le personnage */
    if (avatar.classList != "animation") {
        avatar.classList.add('animation');
    }
    setTimeout(function () {
        avatar.classList.remove('animation');
    }, 500);
}

/* verifier si l'obstacle touche l'avatar */

var verification = setInterval(function(){
    var avatarTop = parseInt(window.getComputedStyle(avatar).getPropertyValue("top")) ;
    var obstaclesleft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left")) ;

    if(obstaclesleft < 20 && obstaclesleft > 0 && avatarTop >= 130){
        obstacle.style.animation = "none"
        alert("Vous avez perdu")
    }
},1)
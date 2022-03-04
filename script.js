// Variables globales pour le typeWriter
let i = 0;
let txt = 'Bonjour, je suis Dorothée. Je réalise votre site vitrine.'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

// Variables pour la TimeLine
let tl = gsap.timeline();
let aboutMe = document.getElementById('aproposdemoi');


// Déclarations des fonctions
function afficherHeure(){
    let d = new Date();
    let hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById('heure').innerHTML = hours;
}

function typeWriter() {            
  if (i < txt.length) {
    document.getElementById("hello").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

////////////////////////////////////////


// const diV = document.querySelector(".whoIAm");

// function azert(){
//   if(aboutMe.classList.contains("active")){
//     diV.classList.add("whoIAm-actif")
//   }
// }
// window.addEventListener("scroll",azert);

// let valuScroll =  (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

// window.addEventListener("scroll", ()=>{
//   let valuScroll =  (window.innerHeight + window.scrollY) / (document.body.offsetHeight);
//   console.log(valuScroll);
// })
//////////////////////////////////////////

function aboutMeAnimation(){  
  tl.from('.moi', {  
  x: 500,
  opacity: 0,
  stagger: 0.75
})
}


// Appel des fonctions

setInterval(afficherHeure,1000); /* Affiche l'heure dans le screen et s'actualise toutes les secondes*/

setInterval(typeWriter, 2000); /* Affiche le texte dans le screen, en autotyping, à partir de 2s*/

aboutMeAnimation();


// let envoyer = document.getElementById('envoyer');
// envoyer.addEventListener('click', alert('Votre message a bien été envoyé. Je vous répond dans les plus brefs délais.'))


console.log(aboutMe.classList.contains('active'));

if(aboutMe.classList.contains('active')){
  aboutMeAnimation()
console.log('ca fonctionne')};


  
  

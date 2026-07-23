
/* ==========================================
   THE LAST BLOOM
   script.js
========================================== */

// Pages
const pages = document.querySelectorAll(".page");

// Audio
const bgMusic = document.getElementById("bgMusic");
const galleryMusic = document.getElementById("galleryMusic");
const clickSound = document.getElementById("clickSound");

// Buttons
const startBtn = document.getElementById("startBtn");
const nextStory = document.getElementById("nextStory");
const nextPhoto = document.getElementById("nextPhoto");
const toGarden = document.getElementById("toGarden");
const toFinal = document.getElementById("toFinal");
const restart = document.getElementById("restart");

// Story
const storyText = document.getElementById("storyText");

// Gallery
const galleryImage = document.getElementById("galleryImage");
const galleryTitle = document.getElementById("galleryTitle");
const galleryDescription = document.getElementById("galleryDescription");

// Envelope
const envelope = document.getElementById("envelope");

// Current Page
let currentPage = 0;

// ======================
// Page Function
// ======================

function showPage(id){

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

// ======================
// Click Sound
// ======================

function playClick(){

if(clickSound){

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

}

}

// ======================
// Background Music
// ======================

function playMusic(){

bgMusic.volume=.5;

bgMusic.play().catch(()=>{});

}

// ======================
// Welcome
// ======================

startBtn.onclick=()=>{

playClick();

playMusic();

showPage("envelopePage");

};

// ======================
// Envelope
// ======================

envelope.onclick=()=>{

playClick();

envelope.classList.add("open");

setTimeout(()=>{

showPage("storyPage");

startStory();

},1800);

};

// ======================
// Story Data
// ======================

const stories=[

"Dear Musfirah,\n\nSome people leave a beautiful impression without even realizing it.",

"Your kindness, smile and calm nature are truly special.",

"This little website is simply a wish that your future remains bright and full of happiness.",

`I know you've blocked me and you don't want to talk right now.

And I completely respect your space.

But I want to talk with you.

I had genuine feelings for you.

I never meant to annoy or upset you.`

];

let storyIndex=0;

// ======================
// Typewriter Effect
// ======================

function typeWriter(text){

storyText.innerHTML="";

let i=0;

const timer=setInterval(()=>{

storyText.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},35);

}

function startStory(){

storyIndex=0;

typeWriter(stories[0]);

}

// ======================
// Story Next
// ======================

nextStory.onclick=()=>{

playClick();

storyIndex++;

if(storyIndex<stories.length){

typeWriter(stories[storyIndex]);

}else{

galleryMusic.volume=.6;

bgMusic.pause();

galleryMusic.play().catch(()=>{});

showPage("galleryPage");

startGallery();

}

};

// ======================
// Gallery Data
// ======================

const gallery=[

{
image:"photo1.jpg",
title:"A Beautiful Smile",
text:"A smile that quietly brightens every moment."
},

{
image:"photo2.jpg",
title:"Grace",
text:"Elegance is often found in simplicity."
},

{
image:"photo3.jpg",
title:"Confidence",
text:"Confidence makes every picture shine."
},

{
image:"photo4.jpg",
title:"Kindness",
text:"Kind hearts leave lasting impressions."
},

{
image:"photo5.jpg",
title:"The Last Bloom",
text:"Some flowers bloom once, but their beauty is remembered forever."
}

];

let galleryIndex=0;

// ======================
// Gallery Function
// ======================

function startGallery(){

galleryIndex=0;

showGallery();

}

function showGallery(){

galleryImage.style.opacity=0;

setTimeout(()=>{

galleryImage.src=gallery[galleryIndex].image;

galleryTitle.innerHTML=gallery[galleryIndex].title;

galleryDescription.innerHTML=gallery[galleryIndex].text;

galleryImage.style.opacity=1;

galleryImage.style.animation="kenburns 8s linear";

},300);

}

// ======================
// Next Photo
// ======================

nextPhoto.onclick=()=>{

playClick();

galleryIndex++;

if(galleryIndex<gallery.length){

showGallery();

}else{

galleryMusic.pause();

bgMusic.currentTime=0;

bgMusic.play().catch(()=>{});

showPage("skyPage");

createStars();

}

};

// ======================
// Night Sky Stars
// ======================

const nightStars = document.getElementById("nightStars");

const starMessages = [

"Keep smiling. The world becomes brighter because of it. ✨",

"May every new day bring you happiness. 🌸",

"Your kindness is your most beautiful quality. ❤️",

"Some people are remembered because of the peace they bring.",

"Wishing you success, peace and endless smiles.",

"Every star shines differently, just like every beautiful soul.",

"May all your dreams come true."

];

function createStars(){

nightStars.innerHTML="";

for(let i=0;i<150;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDelay=(Math.random()*3)+"s";

star.onclick=()=>{

playClick();

alert(

starMessages[
Math.floor(Math.random()*starMessages.length)
]

);

};

nightStars.appendChild(star);

}

}

// ======================
// Garden
// ======================

const flowerField=document.getElementById("flowerField");

function createFlowers(){

flowerField.innerHTML="";

for(let i=0;i<40;i++){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.animationDelay=(i*.08)+"s";

flowerField.appendChild(flower);

}

}

toGarden.onclick=()=>{

playClick();

showPage("gardenPage");

createFlowers();

};

// ======================
// Final Page
// ======================

toFinal.onclick=()=>{

playClick();

showPage("finalPage");

};

// ======================
// Restart
// ======================

restart.onclick=()=>{

playClick();

galleryMusic.pause();

bgMusic.currentTime=0;

showPage("welcome");

};



// ======================
// Floating Petals
// ======================

const petals = document.getElementById("petals");

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
(6+Math.random()*5)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,500);

// ======================
// Sparkles
// ======================

const sparkleContainer=document.body;

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkleContainer.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},2000);

}

setInterval(createSparkle,700);

// ======================
// Heart Animation
// ======================

const heart=document.querySelector(".heart");

setInterval(()=>{

if(heart){

heart.style.transform="scale(1.15)";

setTimeout(()=>{

heart.style.transform="scale(1)";

},300);

}

},1800);

// ======================
// Auto Gallery (Optional)
// ======================

setInterval(()=>{

if(document.getElementById("galleryPage").classList.contains("active")){

if(galleryIndex<gallery.length-1){

galleryIndex++;

showGallery();

}

}

},7000);

// ======================
// Keyboard Shortcuts
// ======================

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

if(document.getElementById("galleryPage").classList.contains("active")){

nextPhoto.click();

}

}

});

// ======================
// Initial Setup
// ======================

showPage("welcome");

console.log("The Last Bloom Loaded Successfully ❤️");

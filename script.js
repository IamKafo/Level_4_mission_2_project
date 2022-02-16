
//------globalScope------

let button = document.getElementById('BUTTON');
let enterEmail = document.querySelector('#second');
let submit = document.querySelector('#submit-Btn');
let card = document.querySelector('#profile');

//-----Bottom of Card -----
let game = document.querySelector('#GameR');
let about = document.querySelector('#About');
let music = document.querySelector('#Music');

let gamePage = document.querySelector('#gamingPage');
let aboutPage = document.querySelector('#aboutPage');
let musicPage = document.querySelector('#musicPage');
//------Closing Button---------------
let gameCloseButton = document.querySelector('#game-close-button');
let aboutCloseButton = document.querySelector('#close-button');
let musicCloseButton = document.querySelector('#music-close-button');

// ----- Removing Profile Card & Adding Name and Email------
button.addEventListener('click', () => {
  enterEmail.classList.toggle('reveal');
  button.classList.toggle('hide');
  card.classList.toggle('hide');

});
// ------After Submition -- Returns to Profile ----
submit.addEventListener('click', () => {
  submit.classList.toggle('hide');
  
});

// -------Different Pages-------
game.addEventListener('click', () => {
  gamePage.classList.toggle('reveal');
  card.classList.toggle('hide');
});

about.addEventListener('click', () => {
  aboutPage.classList.toggle('reveal');
  card.classList.toggle('hide');
});
music.addEventListener('click', () => {
  musicPage.classList.toggle('reveal');
  card.classList.toggle('hide');
});
// ------------Close Button -----------
gameCloseButton.addEventListener('click', () => {
  card.classList.toggle('hide');
  gamePage.classList.toggle('hide');
  card.classList.toggle('reveal');
  
});

aboutCloseButton.addEventListener('click', () => {
  aboutPage.classList.toggle('hide');
  card.classList.toggle('hide');
  button.classList.toggle('reveal');

});
musicCloseButton.addEventListener('click', () => {
  musicPage.classList.toggle('hide');
  card.classList.toggle('hide');
  
});
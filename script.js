'use strict'

// --------------------------------------Меню---------------------------------
const optionCollection = document.querySelectorAll('.option');

for(let el of optionCollection){
  el.addEventListener('click', optionSelect);
}

  let select = optionCollection[0];
function optionSelect() {
  if(select) {
    select.classList.toggle('active');
  }
  this.classList.toggle('active');
  select = this;
  }

const startBtn = document.getElementById('start-button');
const easyGame = document.querySelector('.easy-option__cards');
const mediumGame = document.querySelector('.medium-option__cards');
const hardGame = document.querySelector('.hard-option__cards');

const menu = document.querySelector('.start-wrap');

startBtn.addEventListener('click', function() {
  console.log(`Начали игру. ${select.dataset.name} уровень`);
  
  if(select.dataset.name === 'легкий'){
    easyGame.style.display = "flex";
    menu.style.display = "none";
    } else if(select.dataset.name === 'средний'){
    mediumGame.style.display = "flex";
    menu.style.display = "none";
    } else {
    hardGame.style.display = "flex";
    menu.style.display = "none";
  }
}
);
// --------------------------------------Переворачивание карты --------------------

let card = document.getElementsByClassName('card');

for(let el of card){
  el.addEventListener('click',  cardClick);
}

function cardClick(){
  this.classList.add('flip');
  this.addEventListener('click', returnToMenu);
};

function returnToMenu(){
  this.parentNode.style.display = "none";
  menu.style.display = "block";
}
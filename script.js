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
const tableCards = document.querySelector('.table_cards');
const menu = document.querySelector('.start-wrap');

startBtn.addEventListener('click', function() {
  console.log(`Начали игру. ${select.dataset.name} уровень`);
  
  if(select.dataset.name === 'легкий'){
    createCard(3);
    menu.style.display = "none";
    } else if(select.dataset.name === 'средний'){
    createCard(6);
    menu.style.display = "none";
    } else {
    createCard(10);
    menu.style.display = "none";
  }
}
);
//---------------------------------------Создание карт-----------------------------
function createCard(el) {
  for (let i=0; i < el; i++){
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="back-card"></div>
    <div class="gameover-card"></div>
    `;
    tableCards.appendChild(card);
  }
}
// --------------------------------------Переворачивание карты --------------------

let cardSelected = document.getElementsByClassName('card');

for(let el of cardSelected){
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
//-------------------------------------------
'use strict';

const optionCollection = document.querySelectorAll('.option');

const startBtn = document.getElementById('start-button');
const gameWrap = document.querySelector('.game-wrap');
const menu = document.querySelector('.start-wrap');

let select = optionCollection[0];

function optionSelect() {
  if(select) {
    select.classList.toggle('active');
  }
  this.classList.toggle('active');
  select = this;
  }

for(let el of optionCollection){
  el.addEventListener('click', optionSelect);
}

function createCard(el, cards) {
  const tableCards = document.createElement('div');
  tableCards.className = `table_cards ${cards}`;
  for (let i=0; i < el; i++){
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <div class="back-card"></div>
    <div class="gameover-card"></div>
    `;
    tableCards.appendChild(card);
  }
  gameWrap.appendChild(tableCards);
}

function startGame() {
  console.log(`Начали игру. ${select.dataset.name} уровень`);
  if(select.dataset.name === 'легкий'){
    createCard(3, 'three-card');
    init();
    menu.style.display = "none";
    } else if(select.dataset.name === 'средний'){
    createCard(6, 'six-card');
    init();
    menu.style.display = "none";
    } else {
    createCard(10, 'ten-card');
    init();
    menu.style.display = "none";
  }
}

startBtn.addEventListener('click', startGame);

function returnToMenu(){
  let tableField = document.querySelector('.table_cards');
  tableField.remove(tableField.children);
  menu.style.display = "block";
}

function cardClick(){
  let cards = document.querySelectorAll('.card');
  this.classList.add('flip');
  cards.forEach(item =>
    item.addEventListener('click', returnToMenu));
}

function init(){
  let cards = document.querySelectorAll('.card');
  console.log(`Кол-во карт на столе - ${cards.length}`);

  function getRandomBug(max){
    let i = Math.floor(Math.random() * Math.floor(max));
    cards[i].children[1].style.backgroundImage = 'url(./img/Card-bug.png)';
    console.log(`рандомная цифра из количества карт - ${i}`);
  }
  getRandomBug(cards.length);

    cards.forEach(item =>
    item.addEventListener('click', cardClick));
}


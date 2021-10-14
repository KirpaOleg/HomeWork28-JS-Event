// 1)Сделать квадрат по центру страницы, рядом 4 кнопки (up, down, left,right). При клике на соответствующую кнопку квадрат приходит в движение. Далее проделать аналогичное для клавиш на клавиатуре. 
// 2) При нажатии на пробел квадрат увеличивается, когда пробел отпускаем его величина фиксируется (нажали когда было 50 px, когда отпустили 250px) 

const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');
const box = document.querySelector('.box');


console.log(btnLeft);
console.log(btnRight);
console.log(btnUp);
console.log(btnDown);
console.log(box);

btnUp.addEventListener('mousedown', () => {
  box.classList.add('move-up');
}); 
btnUp.addEventListener('mouseup', () => {
  box.classList.remove('move-up');
}); 

btnLeft.addEventListener('mousedown', () => {
  box.classList.add('move-left');
}); 
btnLeft.addEventListener('mouseup', () => {
  box.classList.remove('move-left');
}); 

btnDown.addEventListener('mousedown', () => {
  box.classList.add('move-down');
}); 
btnDown.addEventListener('mouseup', () => {
  box.classList.remove('move-down');
}); 

btnRight.addEventListener('mousedown', () => {
  box.classList.add('move-right');
}); 
btnRight.addEventListener('mouseup', () => {
  box.classList.remove('move-right');
}); 

const handleKeysDown = (event) => {
  console.log(`Кнопка ${event.key} Код ${event.keyCode}`);
  if (event.keyCode === 38) {
    box.classList.add('move-up');
  }
  if (event.keyCode === 37) {
    box.classList.add('move-left');
  }
  if (event.keyCode === 40) {
    box.classList.add('move-down');
  }
  if (event.keyCode === 39) {
    box.classList.add('move-right');
  }
  if (event.keyCode === 32) {
    box.classList.add('change-size');
  }
  
};
document.addEventListener('keydown', handleKeysDown);

const handleKeysUp = (event) => {
  console.log(`Кнопка ${event.key} Код ${event.keyCode}`);
  if (event.keyCode === 38) {
    box.classList.remove('move-up');
  }
  if (event.keyCode === 37) {
    box.classList.remove('move-left');
  }
  if (event.keyCode === 40) {
    box.classList.remove('move-down');
  }
  if (event.keyCode === 39) {
    box.classList.remove('move-right');
  } 
  if (event.keyCode === 32) {
    // let rect = box.getBoundingClientRect();
    // let boxStyles = getComputedStyle(box);
    // boxStyles.width = rect.width;
    // // box.style.height = rect.height;

    // console.log(boxStyles.width);
    // console.log(rect.width);
    // // console.log(rect.height);

    box.classList.remove('change-size');
  }

};
document.addEventListener('keyup', handleKeysUp);


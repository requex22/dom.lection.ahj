function promptBoardSize(){
  let result = prompt('Введите размер поля')

  if (result < 4){
    alert('Поле слишком маленькое, введите новое значение');
    result = prompt('Введите размер поля');
  }

  return result;
}

function getRandomNumber(min, max){
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}






const body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', `
  <div class="gameBoard"></div>
`);

const boardSize = promptBoardSize();
const gameBoard = body.querySelector('.gameBoard');

for (let i = 0; i < boardSize * boardSize; i++){
  gameBoard.insertAdjacentHTML("afterbegin", `
    <div class="cell"></div>
  `)
}

const cells = gameBoard.querySelectorAll('.cell');


gameBoard.style.width = (cells[0].offsetWidth + 20) * boardSize + 'px';

setInterval(() => {
  cells.forEach(item => item.classList.remove('cellWithGoblin'));

  cells[getRandomNumber(0, cells.length)].classList.add('cellWithGoblin');
}, 1000);
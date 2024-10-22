import runGame from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

function generateQuestion() {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function runEven() {
  const gameLogic = { generateQuestion, description };
  runGame(gameLogic);
}

export default runEven;

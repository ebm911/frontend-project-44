import runGame from '../index.js';

function gcd(a, b) {
  let one = a;
  let two = b;
  while (two !== 0) {
    const temp = two;
    two = one % two;
    one = temp;
  }
  return one;
}

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return { question, correctAnswer };
}

const description = 'Find the greatest common divisor of given numbers.';

function runGcd() {
  const gameLogic = { generateQuestion, description };
  runGame(gameLogic);
}

export default runGcd;

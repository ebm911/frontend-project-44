import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;

function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function runGame(gameLogic) {
  const name = welcomeUser();
  console.log(gameLogic.description);

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const { question, correctAnswer } = gameLogic.generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}

export default runGame;

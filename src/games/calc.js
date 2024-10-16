function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let question;
  let correctAnswer;

  switch (operator) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = (num1 + num2).toString();
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = (num1 - num2).toString();
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = (num1 * num2).toString();
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }

  return { question, correctAnswer };
}

const description = 'What is the result of the expression?';

export { generateQuestion, description };

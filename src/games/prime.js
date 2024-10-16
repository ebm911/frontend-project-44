function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function generateQuestion() {
  const num = Math.floor(Math.random() * 100) + 1;
  const question = num.toString();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { question, correctAnswer };
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { generateQuestion, description };

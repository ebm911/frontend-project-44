// src/games/gcd.js

function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();
    return { question, correctAnswer };
  }
  
  const description = 'Find the greatest common divisor of given numbers.';
  
  export { generateQuestion, description };
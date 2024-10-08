// src/games/progression.js

function generateProgression(length, start, step) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
}

function hideElement(progression) {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  const newProgression = [...progression]; // Создаем копию массива
  newProgression[hiddenIndex] = '..';
  return { progression: newProgression, hiddenValue };
}

function generateQuestion() {
  const length = Math.floor(Math.random() * 6) + 5; // 5 to 10
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;

  const progression = generateProgression(length, start, step);
  const { progression: hiddenProgression, hiddenValue } = hideElement(progression);

  const question = hiddenProgression.join(' ');
  const correctAnswer = hiddenValue.toString();

  return { question, correctAnswer };
}

const description = 'What number is missing in the progression?';

export { generateQuestion, description };

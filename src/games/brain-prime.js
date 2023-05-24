import startGame from '../index.js';

import getRandomInt from '../getRandomIn.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num;
};

const generateRound = () => {
  const num = getRandomInt(0, 100);
  const question = String(num);
  const correctAnswer = prime(num) ? 'yes' : 'no';
  return [question, String(correctAnswer)];
};

const runBrainProgression = () => {
  startGame(generateRound, description);
};
export default runBrainProgression;

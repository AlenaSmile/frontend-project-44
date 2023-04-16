import startGame from './index.js';

import getRandomInt from './getRandomIn.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomInt(0, 100) + 1;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => {
  startGame(generateRound, description);
};

export default runBrainEven;

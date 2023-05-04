import startGame from '../index.js';

import getRandomInt from '../getRandomIn.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return (num1 + num2);
};

const generateRound = () => {
  const num1 = getRandomInt(0, 100) + 1;
  const num2 = getRandomInt(0, 100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

const runBrainGcd = () => {
  startGame(generateRound, description);
};
export default runBrainGcd;

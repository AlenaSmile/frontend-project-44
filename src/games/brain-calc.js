import startGame from '../index.js';

import getRandomInt from '../getRandomIn.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, simbol) => {
  switch (simbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Error!');
  }
};

const generateRound = () => {
  const num1 = getRandomInt(0, 100) + 1;
  const num2 = getRandomInt(0, 100) + 1;
  const operator = ['+', '-', '*'];
  const randomSign = operator[getRandomInt(0, operator.length - 1)];
  const question = `${num1} ${randomSign} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, randomSign));
  return [question, correctAnswer];
};

const runBrainCalc = () => {
  startGame(generateRound, description);
};

export default runBrainCalc;

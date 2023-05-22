import startGame from '../index.js';

import getRandomInt from '../getRandomIn.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNum, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + step * i);
  }
  return progression;
};

const generateRound = () => {
  const firstNum = getRandomInt(1, 30) + 1;
  const progressionLength = getRandomInt(5, 10);
  const progressionStep = getRandomInt(1, 10);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const progression = getProgression(firstNum, progressionStep, progressionLength);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const runBrainProgression = () => {
  startGame(generateRound, description);
};
export default runBrainProgression;

export const getPlayedHandsEveryTurn = (input: string) => {
  return input.split(/\r?\n|\r|\n/g);
};

export const splitHand = (hand: string) => {
  return hand.split(" ") as [FirstPlayerHand, SecondPlayerHand];
};

export type FirstPlayerHand = "A" | "B" | "C";
export type SecondPlayerHand = "X" | "Y" | "Z";
export type RockPaperScissor = "rock" | "paper" | "scissor";

export const A = "A";
export const B = "B";
export const C = "C";
export const X = "X";
export const Y = "Y";
export const Z = "Z";

export const ROCK = "rock";
export const PAPER = "paper";
export const SCISSOR = "scissor";

export const getEquivelent = (hand: FirstPlayerHand | SecondPlayerHand) => {
  switch (hand) {
    case A:
    case X:
      return ROCK;
    case B:
    case Y:
      return PAPER;
    case C:
    case Z:
      return SCISSOR;
  }
};

export const whoBeatsWhoTable: Array<[RockPaperScissor, RockPaperScissor]> = [
  [ROCK, SCISSOR],
  [SCISSOR, PAPER],
  [PAPER, ROCK],
];

const getResult = (
  firstPlayerHand: RockPaperScissor,
  secondPlayerHand: RockPaperScissor
): { firstPlayerResult: number; secondPlayerResult: number } => {
  for (let element of whoBeatsWhoTable) {
    if (element[0] === firstPlayerHand && element[1] === secondPlayerHand) {
      return {
        firstPlayerResult: 6,
        secondPlayerResult: 0,
      };
    }
    if (element[1] === firstPlayerHand && element[0] === secondPlayerHand) {
      return {
        firstPlayerResult: 0,
        secondPlayerResult: 6,
      };
    }
  }
  return {
    firstPlayerResult: 3,
    secondPlayerResult: 3,
  };
};

const getHandPoint = (rockPaperScissor: RockPaperScissor) => {
  switch (rockPaperScissor) {
    case ROCK:
      return 1;
    case PAPER:
      return 2;
    case SCISSOR:
      return 3;
  }
};

export const getScores = (
  firstPlayerHand: RockPaperScissor,
  secondPlayerHand: RockPaperScissor
): { firstPlayerTurnScore: number; secondPlayerTurnScore: number } => {
  const { firstPlayerResult, secondPlayerResult } = getResult(
    firstPlayerHand,
    secondPlayerHand
  );
  return {
    firstPlayerTurnScore: firstPlayerResult + getHandPoint(firstPlayerHand),
    secondPlayerTurnScore: secondPlayerResult + getHandPoint(secondPlayerHand),
  };
};

export const getScoresOfEachPlayerInTheEnd = (input: string) => {
  const handsArray = getPlayedHandsEveryTurn(input);
  const scores = handsArray.reduce<{
    firstPlayerScore: number;
    secondPlayerScore: number;
  }>(
    (sum, hand) => {
      const { firstPlayerScore, secondPlayerScore } = sum;
      const [firstPlayerHand, secondPlayerHand] = splitHand(hand);
      const { firstPlayerTurnScore, secondPlayerTurnScore } = getScores(
        getEquivelent(firstPlayerHand),
        getEquivelent(secondPlayerHand)
      );

      return {
        firstPlayerScore: firstPlayerScore + firstPlayerTurnScore,
        secondPlayerScore: secondPlayerScore + secondPlayerTurnScore,
      };
    },
    { firstPlayerScore: 0, secondPlayerScore: 0 }
  );
  return scores.secondPlayerScore;
};

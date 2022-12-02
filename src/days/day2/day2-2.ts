import {
  A,
  B,
  C,
  FirstPlayerHand,
  getEquivelent,
  getPlayedHandsEveryTurn,
  getScores,
  RockPaperScissor,
  SecondPlayerHand,
  splitHand,
  whoBeatsWhoTable,
  X,
  Y,
  Z,
} from "./day2-1";

const getHandFromStrategy = (
  firstPlayerHand: FirstPlayerHand,
  strategy: SecondPlayerHand
): RockPaperScissor => {
  const firstPlayerEquivelentHand = getEquivelent(firstPlayerHand);
  switch (strategy) {
    case X:
      return whoBeatsWhoTable.find(
        (element) => element[0] === firstPlayerEquivelentHand
      )![1];
    case Y:
      return firstPlayerEquivelentHand;
    case Z:
      return whoBeatsWhoTable.find(
        (element) => element[1] === firstPlayerEquivelentHand
      )![0];
  }
};

export const scoreWithStrategyGuide = (input: string): number => {
  const handsArray = getPlayedHandsEveryTurn(input);
  const scores = handsArray.reduce<{
    firstPlayerScore: number;
    secondPlayerScore: number;
  }>(
    (score, hand) => {
      const { firstPlayerScore, secondPlayerScore } = score;
      const [firstPlayerHand, strategy] = splitHand(hand);
      const secondPlayerHand = getHandFromStrategy(firstPlayerHand, strategy);
      const { firstPlayerTurnScore, secondPlayerTurnScore } = getScores(
        getEquivelent(firstPlayerHand),
        secondPlayerHand
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

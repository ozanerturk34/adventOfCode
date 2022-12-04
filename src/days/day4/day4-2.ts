import { getInputArray } from "../../utils";
import { getLimits, LimitRange, separateRanges } from "./day4-1";

const doesOneRangeHasAnyOverlapWithOther = (
  firstRange: LimitRange,
  secondRange: LimitRange
): boolean => {
  const firstLowerLimit = firstRange[0];
  const firstUpperLimit = firstRange[1];
  const secondLowerLimit = secondRange[0];
  const secondUpperLimit = secondRange[1];
  return (
    (firstLowerLimit <= secondUpperLimit &&
      firstUpperLimit >= secondLowerLimit) ||
    (firstLowerLimit >= secondUpperLimit && firstUpperLimit <= secondLowerLimit)
  );
};

export const getNumberOfPairsWithAnyOverlappedSections = (
  input: string
): number => {
  const rangePairsStr = getInputArray(input);
  const rangePairs = rangePairsStr.map((pair) =>
    separateRanges(pair).map((section) => getLimits(section))
  );
  return rangePairs.reduce<number>((sum, pair) => {
    if (doesOneRangeHasAnyOverlapWithOther(pair[0], pair[1])) {
      return sum + 1;
    }
    return sum;
  }, 0);
};

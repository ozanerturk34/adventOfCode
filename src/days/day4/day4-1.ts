import { getInputArray } from "../../utils/index";

export type LimitRange = [number, number];
type Section = [string, string];

export const separateRanges = (row: string): Section => {
  const [firstSection, secondSection] = row.split(",");
  if (!firstSection || !secondSection) {
    throw new Error("Wrong row");
  }
  return [firstSection, secondSection];
};

export const getLimits = (sectionRange: string): LimitRange => {
  const [firstNumberStr, secondNumberStr] = sectionRange.split("-");
  if (!firstNumberStr || !secondNumberStr) {
    throw new Error("Wrong section range");
  }
  const firstNumber = parseInt(firstNumberStr);
  const secondNumber = parseInt(secondNumberStr);
  if (!isFinite(firstNumber) || !isFinite(secondNumber)) {
    throw new Error("Range values are not numbers");
  }
  return [firstNumber, secondNumber];
};

const doesOneRangeFullyContainTheOther = (
  firstRange: LimitRange,
  secondRange: LimitRange
): boolean => {
  const firstLowerLimit = firstRange[0];
  const firstUpperLimit = firstRange[1];
  const secondLowerLimit = secondRange[0];
  const secondUpperLimit = secondRange[1];
  return (
    (firstLowerLimit <= secondLowerLimit &&
      firstUpperLimit >= secondUpperLimit) ||
    (firstLowerLimit >= secondLowerLimit && firstUpperLimit <= secondUpperLimit)
  );
};

export const getNumberOfFullyOverlappingRangePairs = (
  input: string
): number => {
  const rangePairsStr = getInputArray(input);
  const rangePairs = rangePairsStr.map((pair) =>
    separateRanges(pair).map((section) => getLimits(section))
  );
  return rangePairs.reduce<number>((sum, pair) => {
    if (doesOneRangeFullyContainTheOther(pair[0], pair[1])) {
      return sum + 1;
    }
    return sum;
  }, 0);
};

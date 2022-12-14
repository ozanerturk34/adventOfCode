import { getArrayOfTotalCaloriesPerElf } from "./day1-1";

const sortArrayOfTotalCaloriesPerElf = (input: string): number[] => {
  const arrayOfCaloriesPerElf = getArrayOfTotalCaloriesPerElf(input);
  return arrayOfCaloriesPerElf.sort((a, b) => b - a);
};

export const getTotalCaloriesOfFirstNElvesWithMostCalorie = (
  input: string,
  n: number
): number => {
  const sortedArrayOfCaloriesPerElf = sortArrayOfTotalCaloriesPerElf(input);
  const caloriesOfFirstNElves = sortedArrayOfCaloriesPerElf.slice(0, n);
  return caloriesOfFirstNElves.reduce((sum, val) => sum + val, 0);
};

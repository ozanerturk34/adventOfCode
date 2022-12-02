import { realInput, testInput } from "./inputs/day-1";

const getArrayOfCalories = (input: string): string[] =>
  input.split(/\r?\n|\r|\n/g);

export const getArrayOfTotalCaloriesPerElf = (input: string): number[] => {
  const arrayOfCalories = getArrayOfCalories(input);
  return arrayOfCalories.reduce<{
    caloriesPerElf: number[];
    caloriesOfCurrentElf: number;
  }>(
    (sum, val) => {
      const { caloriesPerElf, caloriesOfCurrentElf } = sum;
      const calorie = parseInt(val);
      if (!!isFinite(calorie)) {
        if (!caloriesPerElf.length) {
          return {
            caloriesPerElf: [],
            caloriesOfCurrentElf: caloriesOfCurrentElf + calorie,
          };
        }
        return {
          caloriesPerElf: caloriesPerElf
            .slice(0, caloriesPerElf.length - 1)
            .concat([caloriesPerElf[caloriesPerElf.length - 1]]),
          caloriesOfCurrentElf: caloriesOfCurrentElf + calorie,
        };
      } else {
        return {
          caloriesPerElf: [...caloriesPerElf, caloriesOfCurrentElf],
          caloriesOfCurrentElf: 0,
        };
      }
    },
    { caloriesPerElf: [], caloriesOfCurrentElf: 0 }
  ).caloriesPerElf;
};

const elfWithMostCalories = (input: string) =>
  Math.max(...getArrayOfTotalCaloriesPerElf(input));

console.log(elfWithMostCalories(realInput));

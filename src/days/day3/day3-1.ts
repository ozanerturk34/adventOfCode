import { getInputArray } from "../../utils";

const splitRucksack = (row: string) => {
  const length = row.length;
  return [row.slice(0, length / 2), row.slice(length / 2)];
};

export const getPriorityOfItemType = (letter: string): number => {
  const charCode = letter.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    return charCode - 38;
  }
  return charCode - 96;
};

const getRucksackResult = (row: string): number => {
  const [firstComponent, secondComponent] = splitRucksack(row);
  for (let letter1 of firstComponent) {
    for (let letter2 of secondComponent) {
      if (letter1 === letter2) {
        return getPriorityOfItemType(letter1);
      }
    }
  }
  throw new Error("can't reach case error");
};

export const getSumOfPriorityOfRecurringInventoryInRucksacks = (
  input: string
): number => {
  const allRucksacks = getInputArray(input);
  return allRucksacks.reduce<number>((sum, rucksack) => {
    return sum + getRucksackResult(rucksack);
  }, 0);
};

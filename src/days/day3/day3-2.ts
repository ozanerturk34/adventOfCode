import { getInputArray } from "../../utils";
import { getPriorityOfItemType } from "./day3-1";

type GroupOfRucksacks = [string, string, string];
const getGroups = (input: string): GroupOfRucksacks[] => {
  const rucksacksArray = getInputArray(input);
  return rucksacksArray.reduce<Array<string[]>>((sum, val, index) => {
    if ((index + 1) % 3 === 1) {
      return [...sum, [val]];
    }
    sum[sum.length - 1] = [...sum[sum.length - 1], val];
    return sum;
  }, []) as GroupOfRucksacks[];
};

const getPriorityOfRecurringItemTypeInGroup = ([
  firstRucksack,
  secondRucksack,
  thirdRucksack,
]: GroupOfRucksacks): number => {
  for (let letter1 of firstRucksack) {
    for (let letter2 of secondRucksack) {
      if (letter1 === letter2) {
        for (let letter3 of thirdRucksack) {
          if (letter1 === letter3) {
            return getPriorityOfItemType(letter1);
          }
        }
      }
    }
  }
  throw new Error("can't reach case error");
};

export const getTotalNumberOfRecurringInventoryInRucksacks = (
  input: string
): number => {
  const groups = getGroups(input);
  return groups.reduce<number>(
    (sum, group) => sum + getPriorityOfRecurringItemTypeInGroup(group),
    0
  );
};

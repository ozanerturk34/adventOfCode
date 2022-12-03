import { elfWithMostCalories } from "./days/day1/day1-1";
import { getTotalCaloriesOfFirstNElvesWithMostCalorie } from "./days/day1/day1-2";
import { getScoresOfEachPlayerInTheEnd } from "./days/day2/day2-1";
import { scoreWithStrategyGuide } from "./days/day2/day2-2";
import { getSumOfPriorityOfRecurringInventoryInRucksacks } from "./days/day3/day3-1";
import { getTotalNumberOfRecurringInventoryInRucksacks } from "./days/day3/day3-2";

import { day1input } from "./inputs/day-1";
import { day2_1input, day2_2input } from "./inputs/day-2";
import { day3_1input, day3_2input } from "./inputs/day-3";

console.log("Day1-1", elfWithMostCalories(day1input));
console.log(
  "Day1-2",
  getTotalCaloriesOfFirstNElvesWithMostCalorie(day1input, 3)
);

console.log("Day2-1", getScoresOfEachPlayerInTheEnd(day2_1input));
console.log("Day2-2", scoreWithStrategyGuide(day2_2input));

console.log(
  "Day3-1",
  getSumOfPriorityOfRecurringInventoryInRucksacks(day3_1input)
);

console.log(
  "Day3-2",
  getTotalNumberOfRecurringInventoryInRucksacks(day3_2input)
);

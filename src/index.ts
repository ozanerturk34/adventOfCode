import { elfWithMostCalories } from "./days/day1/day1-1";
import { getTotalCaloriesOfFirstNElvesWithMostCalorie } from "./days/day1/day1-2";
import { getScoresOfEachPlayerInTheEnd } from "./days/day2/day2-1";
import { scoreWithStrategyGuide } from "./days/day2/day2-2";
import { day1input } from "./inputs/day-1";
import { day2_1input, day2_2input } from "./inputs/day-2";

console.log("Day1-1", elfWithMostCalories(day1input));
console.log(
  "Day1-2",
  getTotalCaloriesOfFirstNElvesWithMostCalorie(day1input, 3)
);

console.log("Day2-1", getScoresOfEachPlayerInTheEnd(day2_1input));
console.log("Day2-2", scoreWithStrategyGuide(day2_2input));

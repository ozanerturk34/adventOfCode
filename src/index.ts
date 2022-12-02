import { elfWithMostCalories } from "./days/day1/day1-1";
import { getTotalCaloriesOfFirstNElvesWithMostCalorie } from "./days/day1/day1-2";
import { day1input } from "./inputs/day-1";

console.log("Day1-1", elfWithMostCalories(day1input));
console.log(
  "Day1-2",
  getTotalCaloriesOfFirstNElvesWithMostCalorie(day1input, 3)
);

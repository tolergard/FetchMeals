// Humblebee assignment
import { fetchMealsStartingWithLetterG } from "./fetchMealsFromApi.js";
import { displayMeals } from "./displayMeals.js";

async function fetchAndDisplayMeals() {
  const meals = await fetchMealsStartingWithLetterG();
  displayMeals(meals);
}

fetchAndDisplayMeals();

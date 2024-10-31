// Humblebee assignment

// Made a function to display the meals on the web page to see that everything works as intended
export function displayMeals(meals) {
  const container = document.getElementById("meals-container");

  meals.forEach((meal) => {
    const titleOfMeal = document.createElement("h2");
    titleOfMeal.textContent = meal.title;
    container.appendChild(titleOfMeal);

    const listOfIngredients = document.createElement("ul");

    meal.ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("li");
      ingredientItem.textContent = `${ingredient.measurement} of ${ingredient.ingredient}`;
      listOfIngredients.appendChild(ingredientItem);
    });
    container.appendChild(listOfIngredients);
  });
}

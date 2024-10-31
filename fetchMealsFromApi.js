// Humblebee assignment
export async function fetchMealsStartingWithLetterG() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=g"
    );
    const data = await response.json();

    if (!data.meals) {
      alert("Couldn't find any meals starting on the letter G");
      return [];
    }

    const meals = data.meals.map((meal) => {
      const ingredients = [];
      // Chose 20 because when I looked at the data in Insomnia there seemed to be a maximum number of 20
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measurement = meal[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push({
            ingredient: ingredient,
            measurement: measurement,
          });
        }
      }
      // Return the title of the meal and the ingredients with measurements
      return {
        title: meal.strMeal,
        ingredients: ingredients,
      };
    });

    return meals;
  } catch (error) {
    console.error(error);
  }
}

const searchFood = async () => {
  const searchField = document.getElementById("input-search");
  const value = searchField.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  searchField.value = "";

    const res = await fetch(url);
    const data = await res.json();
    displayMeals(data.meals);
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById("card-group");
    mealsContainer.textContent = '';
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <div onclick="mealDetails('${meal.idMeal}')" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(
                      0,
                      200
                    )}</p>
                </div>
            </div>
        `;
    mealsContainer.appendChild(div);
  });
};

const mealDetails = async meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
    
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.meals[0]);
};

const displayDetails = (meal) => {
    const detailsDiv = document.getElementById("card-details");
    detailsDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
            <a href="${
              meal.strYoutube
            }" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
};

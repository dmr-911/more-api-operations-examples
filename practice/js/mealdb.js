document.getElementById('error').setAttribute('hidden', true);
const spinner = () => {
    const spinnerDiv = document.getElementById('spinner');
    spinnerDiv.removeAttribute('hidden');
    setTimeout(() => spinnerDiv.setAttribute('hidden', true), 1000);
}

const getMeals = async () => {
    const search = document.getElementById('search-input');
    const value = search.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    search.value = '';
    document.getElementById("error").setAttribute("hidden", true);
    
    spinner();

    try {
         const res = await fetch(url);
        const data = await res.json();
        displayMeals(data.meals);
    }
    catch (error) {
        displayError(error);
    }
}

const displayError = error => {
    document.getElementById("error").removeAttribute('hidden');
    console.log(error);
}

const newCard = (parentId, meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
            <div onclick="mealDetails('${meal.idMeal}')" class="card">
                        <img src="${
                          meal.strMealThumb
                        }" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(
                              0,
                              200
                            )}</p>
                        </div>
            </div>
        `;
    parentId.appendChild(div);
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals');
    mealsContainer.textContent = '';
    document.getElementById('meal-details').textContent = '';
    meals.forEach(meal => {
        newCard(mealsContainer, meal);
    })
}
const mealDetails = async meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
}

const displayMealDetails = meal => {
    const mealDetailsContainer = document.getElementById('meal-details');
    newCard(mealDetailsContainer, meal);
}
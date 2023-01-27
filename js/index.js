const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';

// Fetching DOM objects
const x = {
    container: document.getElementById("xDish"),
    name: document.getElementById("xName"),
    image: document.getElementById("xImg"),
    dish: {}
};
const y = {
    container: document.getElementById("yDish"),
    name: document.getElementById("yName"),
    image: document.getElementById("yImg"),
    dish: {}
};

async function fetchData() {
    try {
        var promise = await fetch(api_url);
        var data = await promise.json();
        return data.meals[0];
    }
    catch (error) {
        // TODO: HandleError();
        console.log(error);
    }
}

function postMeal(dish, meal) {
    dish.name.innerHTML = meal.strMeal;
    dish.image.src = meal.strMealThumb;
    dish.dish = meal;
}

async function fillDishes(dishes) {
    while (dishes.length < 3) {
        dishes.unshift(await fetchData());
    }
}
async function startup(dishes) {
    for (let i = 0; i < 3; i++) {
        dishes.unshift(await fetchData());
    }
    postMeal(x, dishes.pop());
    postMeal(y, dishes.pop());
}

function main() {
    var dishes = [];
    startup(dishes);
    
    console.log(dishes);
}

main();


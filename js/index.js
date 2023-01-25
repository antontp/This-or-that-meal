const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';

// Fetching DOM objects
const x = {
    container: document.getElementById("xDish"),
    name: document.getElementById("xName"),
    image: document.getElementById("xImg")
}

const y = {
    container: document.getElementById("yDish"),
    name: document.getElementById("yName"),
    image: document.getElementById("yImg")
}


async function fetchData() {
    return await fetch(api_url);
}

async function promiseToData(promise) {
    var data = await promise.json();
    return data.meals[0];
}

function postMeal(dish, meal) {
    dish.name.innerHTML = meal.strMeal;
    dish.image.src = meal.strMealThumb;
}
// Startup function
async function startup() {
    fetchData()
        .then(promiseToData)
        .then(dish => {
            postMeal(x, dish)
        })
        .catch(error => {
            console.log(error)
        });
    
    fetchData()
        .then(promiseToData)
        .then(dish => {
            postMeal(y, dish)
        })
        .catch(error => {
            console.log(error)
        });
}

startup();


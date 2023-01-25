const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';

async function fetchData() {
    var data = await (await fetch(api_url)).json();
    console.log(data.meals[0]);
    const pEl = document.getElementById("fetch").innerHTML = JSON.stringify(data.meals[0]);
}

fetchData();
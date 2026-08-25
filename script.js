const foodForm = document.getElementById("food-form");
const foodItems = document.getElementById("food-items");
const totalCalories = document.getElementById("total-calories");
const resetButton = document.getElementById("reset-button");

let foods = [];
let total = 0;

function saveFoods() {
    document.cookie = `foods=${encodeURIComponent(JSON.stringify(foods))}; max-age=604800; path=/`;
}

function loadFoods() {
    const cookies = document.cookie.split("; ");

    const foodCookie = cookies.find(cookie =>
        cookie.startsWith("foods=")
    );

    if (foodCookie) {
        const cookieValue = foodCookie.split("=")[1];

        try {
            foods = JSON.parse(decodeURIComponent(cookieValue));
        } catch (error) {
            foods = [];
        }
    }

    calculateTotal();
    displayFoods();
}

function addFood(category, name, calories) {

    const food = {
        id: Date.now(),
        category: category,
        name: name,
        calories: Number(calories)
    };

    foods.push(food);

    saveFoods();
    calculateTotal();
    displayFoods();
}

function removeFood(id) {

    foods = foods.filter(function(food) {
        return food.id !== id;
    });

    saveFoods();
    calculateTotal();
    displayFoods();
}

function updateFood(id, newCalories) {

    const food = foods.find(function(food) {
        return food.id === id;
    });

    if (food) {
        food.calories = Number(newCalories);
    }

    saveFoods();
    calculateTotal();
    displayFoods();
}

function calculateTotal() {

    total = foods.reduce(function(sum, food) {
        return sum + Number(food.calories);
    }, 0);

    totalCalories.textContent = total;
}

function displayFoods() {

    foodItems.innerHTML = "";

    foods.forEach(function(food) {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                ${food.name} 
                (${food.category})
                - ${food.calories} kcal
            </span>

            <button class="update-button" data-id="${food.id}">
                Update
            </button>

            <button class="remove-button" data-id="${food.id}">
                Remove
            </button>
        `;

        foodItems.appendChild(li);
    });
}

foodForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const category = document.getElementById("food-category").value;
    const name = document.getElementById("food-name").value;
    const calories = document.getElementById("calories").value;

    addFood(category, name, calories);

    foodForm.reset();
});

foodItems.addEventListener("click", function(event) {

    const id = Number(event.target.dataset.id);

    // Remove button
    if (event.target.classList.contains("remove-button")) {

        removeFood(id);
    }

    // Update button
    if (event.target.classList.contains("update-button")) {

        const newCalories = prompt("Enter the new calorie amount:");

        if (newCalories !== null && newCalories !== "") {
            updateFood(id, newCalories);
        }
    }
});




resetButton.addEventListener("click", function() {

    foodForm.reset();

    foods = [];

    total = 0;

    foodItems.innerHTML = "";

    totalCalories.textContent = "0";

    saveFoods();
});




async function fetchCalorieData() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        const data = await response.json();

        console.log("Calorie API data:", data);

    } catch (error) {

        console.error("Error fetching calorie data:", error);
    }
}



loadFoods();


fetchCalorieData()
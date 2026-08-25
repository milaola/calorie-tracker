# Calorie Tracker 
A simple calorie tracker that allows user to add, view and remove food records while keeping track of their total calorie intake. 
## Features 
-Display all added food items
-Calculate and display total calories
-Remove individual food records
-Reset the entire calorie tracker 
-Save food records using localStorage
-Retrive simulated calorie sata using Fetch API
-Add food items by category, name and calorie amount

## Technologies used 
- HTML5 - Used to create the structure of the application
- CSS3 - Used to style the application
- JavaScript (ES6+) - Used for the application logic
- DOM Manipulation - Used to dynamically update the food list and calorie total
- Event Listeners - Used to respond to user actions
- localStorage - Used to store food records persistently
- Fetch API - Used to simulate retrieving calorie data
- Git - Used for version control

## Food Categories
The tracker supports the following categories:

- Fruits
- Carbohydrates
- Vegetables
- Proteins
- Grains
- Dairy
- Snacks
- Drinks

## How it Works
1. Select a food Category. 
2. Enter the name of the food. 
3. Enter the number of Calories
5. Click  **Add Food**
5. The food appears in the added foods list.
6. The total calorie count is automatically updated.
7. Use **Update** to change the calorie amount.
8. Use **Remove** to delete an individual food.
9. Use **Reset** to clear all food records.

Food records are saves in the browser using localStorage, so they remain available when the page is refreshed. 

##Project Structure

``text
calorie-tracker

index.html
style.css
script.js
README.md

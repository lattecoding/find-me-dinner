
const restaurantsByCuisine = {
  "Italian": [
      "Dominos",
      "Olive Garden",
      "Angelos"
  ],
  "Mexican": [
      "Frontera",
      "Taco Bell",
      "Mexican Grill"
  ]
  "Indian": [
    "Restauant Indian 1",
    "Restuarant indiano 2",
    "Restuarnt india 3"
  ]
  "Chinese": [
    "Chinese Food 1",
    "China Palace 2",
    "China restuarnt 3"
  ]
};

function appendRestaurantsByCuisine(cuisineType) {
  let restaurantContainer = document.getElementById("restaurant-container");
  let restaurants = restaurantsByCuisine[cuisineType];

  restaurants.forEach(restaurantName => {
      let restaurantDiv = document.createElement("div");
      restaurantDiv.classList.add("restaurant");

      let nameElement = document.createElement("h2");
      nameElement.textContent = restaurantName;

      restaurantDiv.appendChild(nameElement);

      restaurantContainer.appendChild(restaurantDiv);
  });
}

// Call the function to append Italian restaurants
appendRestaurantsByCuisine("Italian");

const btnMexican = document.querySelector('#mexican');
btnMexican.addEventListener('click', function () {
appendRestaurantsByCuisine("Mexican");
});

// const btnIndian = document.querySelector('#indian');
// // Listen for a click event on toggle switch
// btnIndian.addEventListener('click', function () {
//   // If mode is dark, apply light background
 
// });

// const btnItalian = document.querySelector('#italian');
// // Listen for a click event on toggle switch
// btnItalian.addEventListener('click', function () {
//   // If mode is dark, apply light background
 
// });

// const btnChinese = document.querySelector('#chinese');
// // Listen for a click event on toggle switch
// btnChinese.addEventListener('click', function () {
//   // If mode is dark, apply light background
 
// });
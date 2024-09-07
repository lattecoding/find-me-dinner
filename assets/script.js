

const restaurants = [
  {
  type: "Italian",
  name: "Bertucci's"
},
  {
    type: "Italian",
    name: "Olive Garden"
  },
  {
    type: "Italian",
    name: "Angelos"
  },
  {
    type: "Mexican",
    name: "Boxcar Cantinna"
  },
  {
    type: "Mexican",
    name: "Brasitas"
  },
  {
    type: "Mexican",
    name: "Mexicue"
  },  
  {
    type: "Indian",
    name: "Chutney"
  },
  {
    type: "Indian",
    name: "Tawa"
  },
  {
    type: "Indian",
    name: "Musafir"
  },
  {
    type: "Chinese",
    name: "First wok"
  },
  {
    type: "Chinese",
    name: "Smoky Noodles"
  },
  {
    type: "Chinese",
    name: "China Palace"
  }
];

const selectedRestType = "";


//function findRestaurants() {
 // const restaurantType = document.getElementById('restaurantType').value;
  //const zipCode = document.getElementById('zipCode').value;
  
  //const filteredRestaurants = restaurants[restaurantType].map(restaurant => `${restaurant} - ${zipCode}`);
  
  //const restaurantList = document.getElementById('restaurantList');
  //restaurantList.innerHTML = `<h2>Restaurants in ${restaurantType} near ${zipCode}:</h2>`;
  
  //filteredRestaurants.forEach(restaurant => {
    //const p = document.createElement('p');
    //p.textContent = restaurant;
    //restaurantList.appendChild(p);
  //});
//}



//const zipCode = document.getElementById('zipCode').value;

function appendRestaurantsByCuisine(cuisineType) {
 selectedRestType = cuisineType;
 console.log("selectedRestType:"+selectedRestType);
  // let restaurantContainer = document.getElementById("restaurant-container");
  // let restaurants = restaurantsByCuisine[cuisineType];

  // restaurants.forEach(restaurantName => {
  //     let restaurantDiv = document.createElement("div");
  //     restaurantDiv.classList.add("restaurant");

  //     let nameElement = document.createElement("h2");
  //     nameElement.textContent = restaurantName;

  //     restaurantDiv.appendChild(nameElement);

  //     restaurantContainer.appendChild(restaurantDiv);
  // });
}



const btnMexican = document.querySelector('#mexican');
btnMexican.addEventListener('click', function () {
appendRestaurantsByCuisine("Mexican");
});

const btnIndian = document.querySelector('#indian');
// // Listen for a click event on toggle switch
btnIndian.addEventListener('click', function () {
  appendRestaurantsByCuisine("Indian");

 
});

const btnItalian = document.querySelector('#italian');

 btnItalian.addEventListener('click', function () {
  appendRestaurantsByCuisine("Italian");

 
});

 const btnChinese = document.querySelector('#chinese');

btnChinese.addEventListener('click', function () {
  appendRestaurantsByCuisine("Chinese");

 
 });
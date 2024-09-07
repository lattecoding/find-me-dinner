let filteredRestaurants = []

const restaurants = [
  {
  type: "Italian",
  name: "Bertuccis"
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
 console.log('selectedRestType:'+cuisineType);
 filteredRestaurants = restaurants.filter(x => x.type === cuisineType);
 //filteredRestaurants variable has all the restaurants filtered by selected cuisine type

  console.log(filteredRestaurants);
  // let restaurantContainer = document.getElementById("restaurant-container");


  // filteredRestaurants.forEach(name => {
  //     let restaurantDiv = document.createElement("div");
  //     restaurantDiv.classList.add("restaurant");

  //     let nameElement = document.createElement("h2");
  //     nameElement.textContent = restaurantName;

  //     restaurantDiv.appendChild(nameElement);

  //     restaurantContainer.appendChild(restaurantDiv);
  // });
}



const btnMexican = document.querySelector("#mexican");
btnMexican.addEventListener('click', function () {
  console.log("Mexican button clicked");
appendRestaurantsByCuisine("Mexican");
});

const btnIndian = document.querySelector("#indian");
// // Listen for a click event on toggle switch
btnIndian.addEventListener('click', function () {
  console.log("Indian button clicked");
  appendRestaurantsByCuisine("Indian");

 
});

const btnItalian = document.querySelector("#italian");

 btnItalian.addEventListener('click', function () {
  console.log("Italian button clicked");
  appendRestaurantsByCuisine("Italian");

 
});

 const btnChinese = document.querySelector("#chinese");

btnChinese.addEventListener('click', function () {
  console.log("Chinese button clicked");
  appendRestaurantsByCuisine("Chinese");

 
 });

 const btnResults = document.querySelector("#resultsButton");

 btnResults.addEventListener('click', function () {
  let params = ''
  for (let i = 0; i<filteredRestaurants.length;i++) {
    params = params+filteredRestaurants[i].name+','
  }
  window.location.href = "../results.html?restaurants="+params
})
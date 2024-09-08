let resultRestaurants = JSON.parse(localStorage.getItem("result"));
console.log(
  "filtered result restauranta are" + JSON.stringify(resultRestaurants)
);

let restaurantContainer = document.getElementById("restaurant-container");

resultRestaurants.forEach((restaurant) => {
  let restaurantDiv = document.createElement("div");
  restaurantDiv.classList.add("col");

  //Beging appending name property of the current restaurant
  let nameElement = document.createElement("h4");
  nameElement.textContent = restaurant.name;
  restaurantDiv.appendChild(nameElement);
  //End appending name property of the current restaurant

  //Conitue appending other restaurants propeties
  let addressline1Element = document.createElement("h4");
  addressline1Element.textContent = restaurant.addressline1;
  restaurantDiv.appendChild(addressline1Element);

  let addressline2Element = document.createElement("h4");
  addressline2Element.textContent = restaurant.addressline2;
  restaurantDiv.appendChild(addressline2Element);

  let zipcodeElement = document.createElement("h4");
  zipcodeElement.textContent = restaurant.zipcode;
  restaurantDiv.appendChild(zipcodeElement);

  let websiteElement = document.createElement("h4");
  websiteElement.textContent = restaurant.website;
  restaurantDiv.appendChild(websiteElement);

  let phoneElement = document.createElement("h4");
  phoneElement.textContent = restaurant.phone;
  restaurantDiv.appendChild(phoneElement);

  //End appending other restaurant properties

  //Finally append the current restaurant to the restaurant container
  restaurantContainer.appendChild(restaurantDiv);
});

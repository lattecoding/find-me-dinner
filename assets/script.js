const restaurants = [
  {
    type: "Italian",
    name: "Angelo's Pizza",
    addressline1: "2705 Main Street",
    addressline2: "Glastonbury, CT",
    zipcode: "06101",
    website: "www.angelospizzact.com",
    phone: "860-657-4401",
  },
  {
    type: "Italian",
    name: "Krust Pizza Bourbon Bar",
    addressline1: "686 Main Street",
    addressline2: "Middletown, CT",
    zipcode: "06101",
    website: "www.krustpizzabar.com",
    phone: "860-358-9816",
  },
  {
    type: "Italian",
    name: "Luna Pizza",
    addressline1: "999 Farmington ave",
    addressline2: "West Hartford, CT",
    zipcode: "06101",
    website: "www.lunapizzawh.com",
    phone: " 860-233-1625",
  },
  {
    type: "Mexican",
    name: "Boxcar Cantinna",
    addressline1: "44 Old Field Point Road",
    addressline2: "Greenwich, CT ",
    zipcode: "06101",
    website: "www.boxcarcantina.com",
    phone: "203-323-3176",
  },
  {
    type: "Mexican",
    name: "Brasitas",
    addressline1: "954 E Main st.",
    addressline2: "Stamford CT",
    zipcode: "06101",
    website: "www.Brasitas.com",
    phone: "203-661-4774",
  },
  {
    type: "Mexican",
    name: "Mexicue",
    addressline1: "15 Harbor Point rd",
    addressline2: "Stamford CT",
    zipcode: "06101",
    website: "www.mexicue.com",
    phone: "475-525-1700",
  },
  {
    type: "Indian",
    name: "Chutney",
    addressline1: "211 Main st.",
    addressline2: "Stamford CT",
    zipcode: "06101",
    website: "www.chutney.com",
    phone: "203-614-8374",
  },
  {
    type: "Indian",
    name: "Tawa",
    addressline1: "487 Glenbrook Rd,",
    addressline2: "Stamford, CT",
    zipcode: "06101",
    website: "www.thetawa.com",
    phone: "203-359-8977",
  },
  {
    type: "Indian",
    name: "Naan",
    addressline1: "361 Post rd W",
    addressline2: "Westport CT",
    zipcode: "06101",
    website: "www.thenaan.com",
    phone: "203-557-6667",
  },
  {
    type: "Chinese",
    name: "First wok",
    addressline1: "14 Danbury rd",
    addressline2: "Wilton CT",
    zipcode: "06101",
    website: "www.firstwok.com",
    phone: "203-761-9886",
  },
  {
    type: "Chinese",
    name: "Smoky Noodles",
    addressline1: "75 Pine st",
    addressline2: "New Canaan CT",
    zipcode: "06101",
    website: "www.smokynoodlesct.com",
    phone: "203-920-1552",
  },
  {
    type: "Chinese",
    name: "China Palace",
    addressline1: "10 columbus cir",
    addressline2: "Faifield CT",
    zipcode: "06101",
    website: "www.chinapalace.com",
    phone: "203-762-7789",
  },
];

//const zipCode = document.getElementById('zipCode').value;

function appendRestaurantsByCuisine(cuisineType, enteredZip) {
  let resultRestaurants = restaurants.filter(
    (x) => x.type === cuisineType && x.zipcode === enteredZip
  );
  //filteredRestaurants variable has all the restaurants filtered by selected cuisine type

  console.log(resultRestaurants);
  localStorage.setItem("result", JSON.stringify(resultRestaurants));

  // Redirect to another page within the same website
  window.location.href = "/results.html";

}

const btnMexican = document.querySelector("#mexican");
btnMexican.addEventListener("click", function () {
  // checkUserInput()
  var enteredZip = document.getElementById("zipcode").value;
  appendRestaurantsByCuisine("Mexican", enteredZip);
});

const btnIndian = document.querySelector("#indian");
// // Listen for a click event on toggle switch
btnIndian.addEventListener("click", function () {
  // checkUserInput()
  var enteredZip = document.getElementById("zipcode").value;
  appendRestaurantsByCuisine("Indian", enteredZip);
});

const btnItalian = document.querySelector("#italian");
btnItalian.addEventListener("click", function () {
  // checkUserInput()
  var enteredZip = document.getElementById("zipcode").value;
  appendRestaurantsByCuisine("Italian", enteredZip);
});

const btnChinese = document.querySelector("#chinese");
btnChinese.addEventListener("click", function () {
  // checkUserInput()
  var enteredZip = document.getElementById("zipcode").value;
  appendRestaurantsByCuisine("Chinese", enteredZip);
});

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

// let checkUserInput = () => {
//   let userInput = document.getElementById('zipcode').value;
//   if(!userInput) {
//     console.log('modal should show here')
//   }
  
// }
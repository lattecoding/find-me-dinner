
const restaurants = [
    {
    type: "Italian",
    name: "Bertuccis",
    address: "124 Address Way",
    URL: "https://www.bertuccis.com/"
  },
    {
    type: "Italian",
    name: "Olive Garden",
    address: "124 Address Way",
    URL: "https://www.bertuccis.com/"
    },
    {
    type: "Italian",
    name: "Angelos",
    address: "124 Address Way",
    URL: "https://www.bertuccis.com/"
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

  window.onload=(event)=>{
   const queryString=window.location.search
   console.log(queryString) 
   const names = queryString.trim().slice(13).split(',')
   console.log(names)

   let filteredRestaurants = restaurants.filter(item => names.includes(item.name)) 
   console.log(filteredRestaurants)

let restaurant1 = document.createElement('div')
let name1 = document.createElement('h4')
name1.innerHTML = filteredRestaurants[0].name
console.log(name1)

let address1 = document.createElement('p')
address1.innerHTML = filteredRestaurants[0].address

let aLink = document.createElement('a')
aLink.href = filteredRestaurants[0].URL
let button1 = document.createElement('button')
button1.innerHTML = 'View Menu'
button1.className = 'btn btn-light'

restaurant1.appendChild(name1)
restaurant1.appendChild(address1)
restaurant1.appendChild(aLink)
aLink.appendChild(button1)
document.getElementById('restaurant1').appendChild(restaurant1)

/* <div class="row align-items-start">
<div class="col">
  <h3>3 Miles</h3>
  <h4>Krust Pizza Bourbon Bar</h4>
  <p>
    686 Main Street <br />
    Middletown, CT 06457 <br />
    860-358-9816
  </p>
  <button style="outline: none">
    <a href="https://krustpizzabar.com/" class="btn btn-light"
      >View Menu</a
    >
  </button>
</div>
<div class="col">
  <h3>6.4 Miles</h3>
  <h4>Luna Pizza</h4>
  <p>
    <br />
    999 Farmington ave <br />
    West Hartford, CT 06107<br />
    860-233-1625
  </p>
  <button style="outline: none">
    <a href="https://www.lunapizzawh.com/" class="btn btn-light"
      >View Menu</a
    >
  </button>
</div>
<div class="col">
  <h3>9.1 Miles</h3>
  <h4>Angelo's Pizza</h4>
  <br />
  <p>
    2705 Main Street <br />
    Glastonbury, CT 06033 <br />
    860-657-4401
  </p>
  <a href="https://www.angelospizzact.com/">
    <button class="btn btn-light">View Menu</button>
  </a>
</div>
</div> */}
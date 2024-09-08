
const restaurants = [
    {
    type: "Italian",
    name: "Angelos",
    address: "2705 Main St, Glastonbury, CT 06033",
    URL: "https://www.angelospizzact.com/"
  },
    {
    type: "Italian",
    name: "Olive Garden",
    address: "1441 New Britain Ave, West Hartford, CT 06110",
    URL: "https://www.olivegarden.com/"
    },
    {
    type: "Italian",
    name: "Bertuccis",
    address: "2882 Main Street, Glastonbury, CT, 06033",
    URL: "https://www.bertuccis.com/"
    },
    {
      type: "Mexican",
      name: "Boxcar Cantinna",
      address: "44 Old Field Point Rd, Greenwich, CT 06830",
      URL: "https://www.boxcarcantina.com/"
    },
    {
      type: "Mexican",
      name: "Brasitas",
      address: "430 Main Ave, Norwalk, CT 06851",
      URL: "https://www.brasitas.com/"
    },
    {
      type: "Mexican",
      name: "Mexicue",
      address: "15 Harbor Point Rd. Stamford, CT 06902",
      URL: "https://www.mexicue.com/location/mexicue-stamford/"
    },  
    {
      type: "Indian",
      name: "Chutney",
    },
    {
      type: "Indian",
      name: "Tawa",
    },
    {
      type: "Indian",
      name: "Musafir",
    },
    {
      type: "Chinese",
      name: "First wok",
    },
    {
      type: "Chinese",
      name: "Smoky Noodles",
    },
    {
      type: "Chinese",
      name: "China Palace",
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
name1.innerHTML = filteredRestaurants[0].name1
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

let restaurant2 = document.createElement('div')
let name2 = document.createElement('h4')
name2.innerHTML = filteredRestaurants[1].name2
console.log(name2)

let address2 = document.createElement('p')
address2.innerHTML = filteredRestaurants[1].address2

let aLink2 = document.createElement('a')
aLink2.href = filteredRestaurants[1].URL
let button2 = document.createElement('button2')
button2.innerHTML = 'View Menu'
button2.className = 'btn btn-light'

restaurant2.appendChild(name2)
restaurant2.appendChild(address2)
restaurant2.appendChild(aLink2)
aLink2.appendChild(button2)
document.getElementById('restaurant2').appendChild(restaurant2)


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
const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

seattle.calculateSales();
console.log(seattle);

//const test = randomNumber(seattle.minCust, seattle.maxCust);
//this.custmersPerHour.push(randomNumber);
//console.log(test);

//const cookieSales = document.getElementById("cookieSales");

//const div = document.createElement("div");
//Store name h2 - seattle
//const h2 = document.createElement("h2");
//h2.textcontext = Seattle.name;
//div.appendChild(h2);

// min max customers. Random np. customers p/ hour.

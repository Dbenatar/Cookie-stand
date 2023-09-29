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

const table = document.getElementById("cookieStore");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Store(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}
Store.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);

    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);

    this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
  }
};

Store.prototype.render = function () {
  this.calculateSales();

  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = this.location;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  const totalTd = document.createElement("td");
  totalTd.textContent = this.totalCookieSold;
  tr.appendChild(totalTd);

  table.appendChild(tr);
};

const seattle = new Store("Seattle", 23, 65, 6.3);

const tokyo = new Store("Tokyo", 3, 24, 1.2);

const dubai = new Store("Dubai", 11, 38, 3.7);

const paris = new Store("Paris", 20, 38, 2.3);

const lima = new Store("Lima", 2, 16, 4.6);

seattle.calculateSales();
console.log(seattle);

tokyo.calculateSales();
console.log(tokyo);

dubai.calculateSales();
console.log(dubai);

paris.calculateSales();
console.log(paris);

lima.calculateSales();
console.log(lima);

const cookieStore = document.getElementById("cookieStore");

// const h2 = document.createElement("h2");
// h2.textContent = this.location;
// console.log(this.location);
// cookieStore.appendChild(h2);

const ul = document.createElement("ul");
for (let i = 0; i < this.hours; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours.length[i]}: ${this.totalCookieSold[i]} cookies`;
  ul.appendChild(li);
}
cookieStore.appendChild(ul);
const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours.length[i];
  headerRow.appendChild(th);
}

const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

table.appendChild(headerRow);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// const H2 = document.createElement("h2");
// H2.textContent = this.location;
// console.log(tokyo.location);
// cookieStore.appendChild(tokyoH2);

// const tokyoUl = document.createElement("ul");
// for (let i = 0; i < hours.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
//   tokyoUl.appendChild(li);
// }
// cookieStore.appendChild(tokyoUl);

// const dubaiH2 = document.createElement("h2");
// dubaiH2.textContent = dubai.location;
// console.log(dubai.location);
// cookieStore.appendChild(dubaiH2);

// const dubaiUl = document.createElement("ul");
// for (let i = 0; i < hours.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]} cookies`;
//   dubaiUl.appendChild(li);
// }
// cookieStore.appendChild(dubaiUl);

// const parisH2 = document.createElement("h2");
// parisH2.textContent = paris.location;
// console.log(paris.location);
// cookieStore.appendChild(parisH2);

// const parisUl = document.createElement("ul");
// for (let i = 0; i < hours.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = `${hours[i]}: ${paris.cookiesPerHour[i]} cookies`;
//   parisUl.appendChild(li);
// }
// cookieStore.appendChild(parisUl);

// const limaH2 = document.createElement("h2");
// limaH2.textContent = lima.location;
// console.log(lima.location);
// cookieStore.appendChild(limaH2);

// const limaUl = document.createElement("ul");
// for (let i = 0; i < hours.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = `${hours[i]}: ${lima.cookiesPerHour[i]} cookies`;
//   limaUl.appendChild(li);
// }
// cookieStore.appendChild(limaUl);

const form = document.getElementById("newstore");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const location = event.target.name.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const avgCookiesPerCust = event.target.avgCookiesPerCust.value;

  const newStore = new Store(location, minCust, maxCust, avgCookiesPerCust);

  newStore.render();
});

const myButton = document.querySelector("button");

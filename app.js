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
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

const tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

const dubai = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

const paris = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

const lima = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

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

const seattleH2 = document.createElement("h2");
seattleH2.textContent = seattle.location;
console.log(seattle.location);
cookieStore.appendChild(seattleH2);

const seattleUl = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  seattleUl.appendChild(li);
}
cookieStore.appendChild(seattleUl);

const tokyoH2 = document.createElement("h2");
tokyoH2.textContent = tokyo.location;
console.log(tokyo.location);
cookieStore.appendChild(tokyoH2);

const tokyoUl = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
  tokyoUl.appendChild(li);
}
cookieStore.appendChild(tokyoUl);

const dubaiH2 = document.createElement("h2");
dubaiH2.textContent = dubai.location;
console.log(dubai.location);
cookieStore.appendChild(dubaiH2);

const dubaiUl = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]} cookies`;
  dubaiUl.appendChild(li);
}
cookieStore.appendChild(dubaiUl);

const parisH2 = document.createElement("h2");
parisH2.textContent = paris.location;
console.log(paris.location);
cookieStore.appendChild(parisH2);

const parisUl = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${paris.cookiesPerHour[i]} cookies`;
  parisUl.appendChild(li);
}
cookieStore.appendChild(parisUl);

const limaH2 = document.createElement("h2");
limaH2.textContent = lima.location;
console.log(lima.location);
cookieStore.appendChild(limaH2);

const limaUl = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${lima.cookiesPerHour[i]} cookies`;
  limaUl.appendChild(li);
}
cookieStore.appendChild(limaUl);

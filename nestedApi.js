// Countries

const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (data) => {
  const countriesDiv = document.getElementById("countries");
  data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("country");
    const h3 = document.createElement("h3");
    h3.innerText = `Country Name: ${element.name.common}`;
    div.appendChild(h3);
    const p = document.createElement("p");
    p.innerText = `Capital Name: ${element.capital}`;
    div.appendChild(p);
    const button = document.createElement("button");
    button.setAttribute(
      "onclick",
      `loadCountryByName('${element.name.common}')`
    );
    button.innerText = `Details`;
    div.appendChild(button);
    countriesDiv.appendChild(div);
    // console.log(element.capital);
  });
};
const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};
const displayCountryDetails = (country) => {
  // console.log(country);
  const countryDiv = document.getElementById("country-details");
  const h4 = document.createElement("h4");
  h4.innerText = country.name.common;
  countryDiv.appendChild(h4);
  const p = document.createElement("p");
  p.innerText = `population: ${country.population}`;
  countryDiv.appendChild(p);
  const img = document.createElement("img");
  img.setAttribute("src", `${country.flags.png}`);
  countryDiv.appendChild(img);
};

// // dubbies

// const loadBuddies = () => {
//   fetch("https://randomuser.me/api/?results=5")
//     .then((res) => res.json())
//     .then((data) => displayBuddies(data));
// };
// loadBuddies();
// const displayBuddies = (data) => {
//   console.log(data);
//   const buddies = data.results;
//   const buddiesDiv = document.getElementById("buddies");
//   for (const buddy of buddies) {
//     const p = document.createElement("p");
//     p.innerText = ` name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}, email: ${buddy.email}`;
//     buddiesDiv.appendChild(p);
//   }
// };
// Kanye quotes

const loadQuotes = () => {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
};
function displayQuotes(data) {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = data.quote;
  //   console.log(data);
}

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className) {
  const html = `
  <article class="country ${className}">
          <img class="country__img " src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} mi people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }, ${data.currencies[0].symbol}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  console.log(country);

  const foreign = new XMLHttpRequest();
  foreign.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  foreign.send();

  foreign.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data, 'neighbour');
  });
};

const getCountryData = function (country) {
  const nationality = new XMLHttpRequest();
  nationality.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  nationality.send();

  nationality.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
    getCountryAndNeighbour(data.borders[0]);
  });
};

getCountryData('brazil');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

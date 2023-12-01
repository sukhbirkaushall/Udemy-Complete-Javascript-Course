//Fetch API
const request = fetch('https://restcountries.com/v3.1/name/india');
// console.log(request)

// CONSUMING PROMISES
const getCountryData = function (country) {
    //country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            
            //CHAINING PROMISES
            const neighbour = data[0].borders[0];
            if (!neighbour) return;

            //country 2
            return fetch(`https://restcountries.com/v3.1/name/${country}`)
        })
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'))
}
getCountryData('india')



const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
    const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getJSON= function(url, errorMsg ='Something went wrong'){
return fetch(url).then((response) => {
    console.log(response)
    //THROWING ERRORS MANUALLY
    if (!response.ok) 
    throw new Error(`${errorMsg} ${response.status}`
)
return response.json()
})

}

//HANDLING REJECTED PROMISES
const getCountryData = function (country) {
    //country 1
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    //     .then((response) => {
    //         console.log(response)
    //         //THROWING ERRORS MANUALLY
    //         if (!response.ok) 
    //         throw new Error(`Country not found ${response.status}`)

    //         return response.json()
    //     })
        .then((data) => {
            renderCountry(data[0]);
        })
        .catch(err => {
            renderError(`Something went wrong ${err}`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
}
btn.addEventListener('click', function () {
    getCountryData('india')
})


const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};

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
    // countriesContainer.style.opacity = 1;
}


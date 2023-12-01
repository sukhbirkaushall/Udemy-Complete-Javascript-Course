const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    //   console.log(res)
    const data = await res.json()
    // console.log(data);
    renderCountry(data[0])

}
whereAmI('India');
whereAmI('USA')
// console.log('First')


const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
    // const lang = Object.values(data.languages);

    const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <div class="country__name " title="${data.name.official}">${data.name.official}</div>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)} </p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}
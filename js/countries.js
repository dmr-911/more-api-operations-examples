const loadCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.currencies[0].name}</p>
        <button onclick="countryDetails('${country.name}')">Details</button>
           `;
        countriesDiv.appendChild(div);
    })
}

const countryDetails = country => {
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data));
}
const displayDetails = country => {
    const details = document.getElementById('country-details');
    details.innerHTML = `
        <h4> Name : ${country[0].name}</h4>
        <p> Population : ${country[0].population}</p>
        <p> Currency : ${country[0].currencies[0].name}</p>
        <img width='200' src='${country[0].flag}' />
    `
}
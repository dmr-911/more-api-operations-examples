const getCountries = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    displayCountries(data);
}
getCountries();
const displayCountries = countries => {
    const countryContainer = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${country.name}</h5>
                        <p class="card-text">${country.currencies[0].name}</p>
                        <img width="200" src="${country.flag}">
                        <a onclick="getDetails('${country.name}')" class="btn btn-primary">Details</a>
                    </div>
                </div>
        `;
        countryContainer.appendChild(div);
    })
}

const getDetails = async countries => {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${countries}`)
    const data = await res.json();
    displayDetails(data);
}
const displayDetails = country => {
    const detailsContainer = document.getElementById('country-details');
    detailsContainer.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${country[0].name}</h5>
                    <p class="card-text">${country[0].currencies[0].name}</p>
                    <p class="card-text">Population : ${country[0].population}</p>
                    <p class="card-text">Area : ${country[0].area} km2</p>
                    <img width="200" src="${country[0].flag}" >
                </div>
        </div>
    `;
}
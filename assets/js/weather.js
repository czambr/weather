import { weather_data } from './data.js';


let loadDayForecastData = (ind) => {
    let ciudad = weather_data[ind];

    let ElementCity = document.getElementById('city');
    let ElementTempMax = document.getElementById('maxtemperature');
    let ElementTempMin = document.getElementById('mintemperature');
    let ElementCloudiness = document.getElementById('cloudiness');
    let ElementWind = document.getElementById('wind');
    let ElementRainfall = document.getElementById('rainfall');
    let ElementDate = document.getElementById('date');

    ElementCity.innerHTML = ciudad.city;
    ElementTempMax.innerHTML = ciudad.maxtemperature;
    ElementTempMin.innerHTML = ciudad.mintemperature;
    ElementCloudiness.innerHTML = ciudad.cloudiness;
    ElementWind.innerHTML = ciudad.wind;
    ElementRainfall.innerHTML = ciudad.rainfall;
    ElementDate.innerHTML = ciudad.date;

    let ElementTempLate = document.getElementById('late_temperature');
    let ElementIconLate = document.getElementById('late_icon');
    let ElementTempLate_forecast = document.getElementById('late_forecast');
    let ElementTempLate_text = document.getElementById('late_text');
    ElementTempLate.innerHTML = ciudad.forecast_today[0].temperature;
    ElementIconLate.innerHTML = ciudad.forecast_today[0].icon;
    ElementTempLate_forecast.innerHTML = ciudad.forecast_today[0].forecast;
    ElementTempLate_text.innerHTML = ciudad.forecast_today[0].text;

    let ElementTempNight = document.getElementById('night_temperature');
    let ElementIconNight = document.getElementById('night_icon');
    let ElementTempNight_forecast = document.getElementById('night_forecast');
    let ElementTempNight_text = document.getElementById('night_text');
    ElementTempNight.innerHTML = ciudad.forecast_today[1].temperature;
    ElementIconNight.innerHTML = ciudad.forecast_today[1].icon;
    ElementTempNight_forecast.innerHTML = ciudad.forecast_today[1].forecast;
    ElementTempNight_text.innerHTML = ciudad.forecast_today[1].text;

}

let loadWeekForecastData = (ind) => {
    let ciudad = weather_data[ind]

    let arrayForecastWeek = ciudad.forecast_week;
    let listOfElements = document.getElementsByClassName('list-group');
    listOfElements[0].innerHTML = ' ';

    for (let ind in arrayForecastWeek) {
        let object = arrayForecastWeek[ind];
        let plantilla = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                            <div class="d-flex flex-column">
                                <h6 class="mb-1 text-dark font-weight-bold text-sm">${object.text}</h6>
                                <span class="text-xs">${object.date}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="font-weight-bold text-dark mx-2">${object.temperature.max}</span> |  <span class="text-dark mx-2">${object.temperature.min}</span>
                                <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${object.icon}</i></div>
                            </div>
                        </li>`;
        listOfElements[0].innerHTML += plantilla;   
    };
}

let loadCitysForecastData = () => {
    let ElementOptions = document.getElementById('dropdownMenuButton');
    ElementOptions.innerHTML = '<option value="" selected disabled hidden>Seleccione una ciudad</option>';

    for (let ind in weather_data){  
        let city = weather_data[ind].city;
        let tag = `<option class="dropdown-item" value="${city.trim().toLowerCase()}">${city.trim()}</option>`;
        ElementOptions.innerHTML += tag;
    };   
}

let selectForecastData = (cityParameter) => {
    let arrayCities = [];
    for (let ind in weather_data){  
        arrayCities.push(weather_data[ind].city.trim().toLowerCase());
    };
    let indCity = arrayCities.indexOf(cityParameter);

    loadDayForecastData(indCity);
    let element = document.getElementById('loadinfo');
    element.addEventListener('click', () => {
        loadWeekForecastData(indCity)
    });

}

// ==> PARTE 1: Carga masiva de datos
// loadDayForecastData();
// loadWeekForecastData();
// loadCitysForecastData();

// ==> PARTE 2: Callbacks realizados
/*
document.addEventListener("DOMContentLoaded", loadDayForecastData());
let element = document.getElementById('loadinfo');
element.addEventListener('click', loadWeekForecastData);
*/


// ==> PARTE 3: Carga de datos en función de la ciudad.
document.addEventListener("DOMContentLoaded", () => {
    loadCitysForecastData();
    let element = document.getElementById('dropdownMenuButton');
    element.addEventListener('click', (city) => {
        selectForecastData(city.target.value); 
    });
});



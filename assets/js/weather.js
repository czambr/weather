import { weather_data } from './data.js';


let loadDayForecastData = () => {
    let [ciudad1, ciudad2, ciudad3] = weather_data;

    let ElementCity = document.getElementById('city');
    let ElementTempMax = document.getElementById('maxtemperature');
    let ElementTempMin = document.getElementById('mintemperature');
    let ElementCloudiness = document.getElementById('cloudiness');
    let ElementWind = document.getElementById('wind');
    let ElementRainfall = document.getElementById('rainfall');
    let ElementDate = document.getElementById('date');

    ElementCity.innerHTML = ciudad1.city;
    ElementTempMax.innerHTML = ciudad1.maxtemperature;
    ElementTempMin.innerHTML = ciudad1.mintemperature;
    ElementCloudiness.innerHTML = ciudad1.cloudiness;
    ElementWind.innerHTML = ciudad1.wind;
    ElementRainfall.innerHTML = ciudad1.rainfall;
    ElementDate.innerHTML = ciudad1.date;

    let ElementTempLate = document.getElementById('late_temperature');
    let ElementIconLate = document.getElementById('late_icon');
    let ElementTempLate_forecast = document.getElementById('late_forecast');
    let ElementTempLate_text = document.getElementById('late_text');
    ElementTempLate.innerHTML = ciudad1.forecast_today[0].temperature;
    ElementIconLate.innerHTML = ciudad1.forecast_today[0].icon;
    ElementTempLate_forecast.innerHTML = ciudad1.forecast_today[0].forecast;
    ElementTempLate_text.innerHTML = ciudad1.forecast_today[0].text;

    let ElementTempNight = document.getElementById('night_temperature');
    let ElementIconNight = document.getElementById('night_icon');
    let ElementTempNight_forecast = document.getElementById('night_forecast');
    let ElementTempNight_text = document.getElementById('night_text');
    ElementTempNight.innerHTML = ciudad1.forecast_today[1].temperature;
    ElementIconNight.innerHTML = ciudad1.forecast_today[1].icon;
    ElementTempNight_forecast.innerHTML = ciudad1.forecast_today[1].forecast;
    ElementTempNight_text.innerHTML = ciudad1.forecast_today[1].text;

}

let loadWeekForecastData = () => {

    let [ciudad1, ciudad2, ciudad3] = weather_data;

    let arrayForecastWeek = ciudad1.forecast_week;
    let listOfElements = document.getElementsByClassName('list-group');

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


loadDayForecastData();
loadWeekForecastData();
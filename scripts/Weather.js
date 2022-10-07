import { getTransientState, getParks, fetchWeatherForecast, getWeather } from "./dataAccess.js"

//Function generates html for the weather display
export const showWeather = () => {
    const transientState = getTransientState()
    const parks = getParks()
    let html = ""
    //if a park is selected...
    if (transientState.parkId) {
        //.then append string containing html
        const forecastArray = getWeather()
        forecastArray.forEach((forecast) => {
            html += `
                    <div class="daily_forecast">
                        <div class="forecast_date">${forecast.date}</div>
                        <img src="${forecast.icon}">
                        <div class="forecast_details">
                            <div class="forecast_description">${forecast.description}</div>
                            <div class="forecast_temp">${forecast.temp}°</div>
                            <dvi class="forecast_humidity">${forecast.humidity}% Humidity</div>
                        </div>
                    </div>`
        })
    }
    return html
}
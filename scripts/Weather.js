import { getTransientState, getParks, fetchWeatherForecast, getWeather } from "./dataAccess.js"

//Function generates html for the weather display
export const showWeather = () => {
    const transientState = getTransientState()
    const parks = getParks()
    let html = "<table>"
    //if a park is selected...
    if (transientState.parkId) {
        //.then append string containing html
        const forecastArray = getWeather()
        forecastArray.forEach((forecast) => {
            html += `
                    <div class="daily_forecast">
                        <tr>
                        <th><img src="${forecast.icon}"></th>
                        <td><b><div class="forecast_date">${forecast.date}</div></b>
                        <div class="forecast_details">
                            <div class="forecast_description">${forecast.description}</div>
                            <div class="forecast_temp">${forecast.temp}°</div>
                            <div class="forecast_humidity">${forecast.humidity}% Humidity</div></td>
                            </tr>
                        </div>
                    </div>`
        })
    }
    html += `</table>`
    return html
}
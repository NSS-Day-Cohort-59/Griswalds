import { fetchBizarraries, fetchParks, fetchEateries, fetchItineraries, fetchWeatherForecast, getWeather } from "./dataAccess.js"
import { HolidayRoad } from "./HolidayRoad.js"
// Purposefully left out fetchWeather, because that gets called when the user selects a park

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    Promise.all([ // Promise.all waits for a response from every promise before moving to the .then
        fetchParks(),
        fetchEateries(),
        fetchBizarraries(),
        fetchItineraries()
    ])
        .then(
            () => {
                mainContainer.innerHTML = HolidayRoad()
            }
        )
}

renderHTML() //* Note: Be careful how many times you refresh the page, because we are rate limited, and it uses one fetch each time*

mainContainer.addEventListener(
    "stateChanged",
    event => {
        renderHTML()
    }
)
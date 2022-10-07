import { Dropdowns } from "./dropdowns.js"
import { SavedItineraries } from "./itinerary.js"
import { CreateItinerary } from "./preview.js"
import { showWeather } from "./Weather.js";


export const HolidayRoad = () => {
    return `
    <section class="itineraries">
    <section class="dropdown-section" id="dropdowns">
    <h1>Holiday Road - Itinerary Form</h1>
        ${Dropdowns()}
    </section>
    <section class="preview-section" id="itineraryForm">
        ${CreateItinerary()}
    </section>
    <section class="saved-section" id="completedItinerary">
        <h2>Saved Itineraries</h2>
        ${SavedItineraries()}
        </section>
        <section class="weather" id="weather">
        <h5>Weather</h5>
        <div class="weather_display" id="weatherDisplay">${showWeather()}</div>
    </section></section></section>
    `
}

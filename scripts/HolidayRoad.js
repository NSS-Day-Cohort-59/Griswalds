import { Dropdowns } from "./dropdowns.js"
import { SavedItineraries } from "./itinerary.js"
import { CreateItinerary } from "./preview.js"


export const HolidayRoad = () => {
    return `
    <section class="itineraries">
    <section class="main-sections" id="dropdowns">
    <h1>Holiday Road - Itinerary Form</h1>
        ${Dropdowns()}
    </section>
    <section class="main-sections" id="itineraryForm">
        ${CreateItinerary()}
    </section>
    <section class="main-sections" id="completedItinerary">
        <h2>Saved Itineraries</h2>
        ${SavedItineraries()}
    </section></section></section>

    <footer>
        <p>Copyright 2022 bla bla bla don't copy us and stuff</p>
    </footer>
    `
}

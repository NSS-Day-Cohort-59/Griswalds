import { Dropdowns } from "./dropdowns.js"
import { SavedItineraries } from "./itinerary.js"
import { CreateItinerary } from "./preview.js"


export const HolidayRoad = () => {
    return `
    <h1>Holiday Road - Itinerary Form</h1>
    <section class="main-sections" id="dropdowns">
        ${Dropdowns()}
    </section>
    <section class="main-sections" id="itineraryForm">
        ${CreateItinerary()}
    </section>
    <section class="main-sections" id="completedItinerary">
        <h2>Saved Itineraries</h2>
        ${SavedItineraries()}
    </section>

    <footer>
        <p>Copyright 2022 bla bla bla don't copy us and stuff</p>
    </footer>
    `
}

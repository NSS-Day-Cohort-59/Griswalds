import { SavedItineraries } from "./itinerary.js"
import { CreateItinerary } from "./preview.js"


export const HolidayRoad = () => {
    return `
    <section class="itineraries">
    <section class="itineraryForm">
    <h1>Holiday Road - Itinerary Form</h1>
        ${CreateItinerary()}
    </section>
    <section class="completedItinerary">
        <h2>Saved Itineraries</h2>
        ${SavedItineraries()}
    </section></section>

    <footer>
        <p>Copyright 2022 bla bla bla don't copy us and stuff</p>
    </footer>
    `
}

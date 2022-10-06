import { SavedItineraries } from "./itinerary.js"
import { CreateItinerary } from "./preview.js"


export const HolidayRoad = () => {
    return `
    <h1>Holiday Road - Itinerary Form</h1>
    <section class="itineraryForm">
        ${CreateItinerary()}
    </section>
    <section class="completedItinerary">
        <h2>Saved Itineraries</h2>
        ${SavedItineraries()}
    </section>
    `
}

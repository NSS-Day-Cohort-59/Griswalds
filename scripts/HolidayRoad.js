import { SavedItineraries } from "./itinerary"
import { CreateItinerary } from "./preview"


export const HolidayRoad = () => {
    return `
    <center><h1>Holiday Road - Itinerary Form</h1>
    <section class="itineraryForm">
        ${CreateItinerary()}
    </section>
    <section class="completedItinerary">
        <h2>Saved Itineraries</h2>
        ${SavedItineraries()}
    </section></center>
    `
}

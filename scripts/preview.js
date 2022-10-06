import { transientState } from "./dataAccess.js";
import { Buttons } from "./buttons.js"
import { showWeather } from "./Weather.js"
import { Dropdowns } from "./dropdowns.js";


export const CreateItinerary = () => {
    let html = `<section id="preview-section">
    ${Buttons()}
    ${showWeather()}
    <button class="save_btn" id="submitItinerary">Save Itinerary</button>`
    // name of park && details button containing address and description
    // name of bizarrarie && details button containing city, state, description, and amenities (souvenirs and restrooms)
    // name of eaterie && details button containing city, state, description and amenities 
    // (wheelchairAccessible, petFriendly, wifi, diaperFacility, playground, and restrooms)
    // 5 day weather forecast for park location

    // submit itinerary button


    return html += `</section>`
}

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitItinerary") {
        // Get what the user typed into the form fields
        const park = transientState.selectedPark
        const bizarrerie = transientState.selectedbizarrerie
        const eaterie = transientState.selectedEaterie

        // Make an object out of the user input
        const dataToSendToAPI = {
            parkId: park,
            bizarrerieId: bizarrerie,
            eaterieId: eaterie
        }

        // Send the data to the API for permanent storage
        saveItinerary(dataToSendToAPI)
    }
})
import { setPark, setBizarrarie, setEaterie, transientState } from "./dataAccess";

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitItinerary") {
        // Get what the user typed into the form fields
        const park = transientState.selectedPark
        const bizarrarie = transientState.selectedBizarrarie
        const eaterie = transientState.selectedEaterie

        // Make an object out of the user input
        const dataToSendToAPI = {
            parkId: park,
            bizarrarieId: bizarrarie,
            eaterieId: eaterie
        }

        // Send the data to the API for permanent storage
        saveItinerary(dataToSendToAPI)
    }
})
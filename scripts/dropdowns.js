import { setPark, setBizarrerie, setEaterie, transientState, getParks, getBizarreries, getEateries } from "./dataAccess.js"


export const Dropdowns = () => {
    const parks = getParks()
    const bizarreries = getBizarreries()
    const eateries = getEateries()
    let html = `<div class="field">
            <label class="label" for="park">National Parks</label>
            <select class="park" name="park">
            <option value="0">Choose National Park</option>`
    parks.map(
        park => {
            html += `<option value="${park.id}">${park.name}</option>`
        }
    ).join("")
    html += `
            </select> 
        </div>
        <div class="field">
        <label class="label" for="bizarrerie">Bizarreries</label>
        <select class="bizarrerie" name="bizarrerie">
        <option value="0">Choose Bizarrerie</option>`
    bizarreries.map(
        bizarrerie => {
            html += `<option value="${bizarrerie.id}">${bizarrerie.name}</option>`
        }
    ).join("")
    html += `
        </select>
    </div>
    <div class="field">
    <label class="label" for="eaterie">Eateries</label>
    <select class="eaterie" name="eaterie">
    <option value="0">Choose Eaterie</option>`
    eateries.map(
        eaterie => {
            html += `<option value="${eaterie.id}">${eaterie.name}</option>`
        }
    ).join("")
    html += `
    </select>
</div>`

    return html

}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "park") {
            const parkID = parseInt(event.target.value)
            setPark(parkID)
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "bizarrerie") {
            const bizarrerieID = parseInt(event.target.value)
            setBizarrerie(bizarrerieID)
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "eaterie") {
            const eaterieID = parseInt(event.target.value)
            setEaterie(eaterieID)
        }
    }
)

//Listener enables save button when all three dropdowns have been selected
//Listen for change
document.addEventListener("change", e => {
    //Store all dropdown elements in variables
    const parkDropdown = document.querySelector(".park")
    const bizarrerieDropdown = document.querySelector(".bizarrerie")
    const eateryDropdown = document.querySelector(".eaterie")
    //If park, eatery and bizarrery selected...
    if (parseInt(parkDropdown.value) && parseInt(bizarrerieDropdown.value) && parseInt(eateryDropdown.value)) {
        //Store save button element in variable
        const saveButton = document.querySelector("#submitItinerary")
        //Set "disabled" to false on save button element
        saveButton.disabled = false
    }
})
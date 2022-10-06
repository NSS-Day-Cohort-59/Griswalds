import { setPark, setbizarrerie, setEaterie, transientState, getParks, getbizarreries, getEateries } from "./dataAccess.js"


export const Dropdowns = () => {
    const parks = getParks()
    const bizarreries = getbizarreries()
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
        <label class="label" for="bizarrerie">bizarreries</label>
        <select class="bizarrerie" name="bizarrerie">
        <option value="0">Choose bizarrerie</option>`
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
    "click",
    (event) => {
        if (event.target.name === "park") {
            const parkID = event.target.value
            setPark(parkID)
        }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "bizarrerie") {
            const bizarrerieID = event.target.value
            setbizarrerie(bizarrerieID)
        }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "eaterie") {
            const eaterieID = event.target.value
            setEaterie(eaterieID)
        }
    }
)

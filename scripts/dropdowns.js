import { setPark, setBizarrarie, setEaterie, transientState, getParks, getBizarraries, getEateries } from "./dataAccess.js"


export const Dropdowns = () => {
    const parks = getParks()
    const bizarraries = getBizarraries()
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
        <label class="label" for="bizarrarie">Bizarraries</label>
        <select class="bizarrarie" name="bizarrarie">
        <option value="0">Choose Bizarrarie</option>`
    bizarraries.map(
        bizarrarie => {
            html += `<option value="${bizarrarie.id}">${bizarrarie.name}</option>`
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
        if (event.target.name === "bizarrarie") {
            const bizarrarieID = event.target.value
            setBizarrarie(bizarrarieID)
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

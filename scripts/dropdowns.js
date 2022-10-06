import { setPark, setBizarrerie, setEaterie, getParks, getBizarreries, getEateries, getTransientState } from "./dataAccess.js"


export const Dropdowns = () => {
    const isSelected = (id, keyName) => {
        return transientState[keyName] === id ? `selected` : `` 
    }

    const transientState = getTransientState()
    const parks = getParks()
    const bizarreries = getBizarreries()
    const eateries = getEateries()
    
    let html = `<div class="field">
            <label class="label" for="park">National Parks</label>
            <select class="park" name="park">
            <option value="0" hidden>Choose National Park</option>`
    parks.map(
        park => {
            html += `<option value="${park.id}" ${isSelected(park.id, "parkId")}>${park.name}</option>`
        }
    ).join("")
    html += `
            </select> 
        </div>
        <div class="field">
        <label class="label" for="bizarrerie">Bizarreries</label>
        <select class="bizarrerie" name="bizarrerie">
        <option value="0" hidden>Choose Bizarrerie</option>`
    bizarreries.map(
        bizarrerie => {
            html += `<option value="${bizarrerie.id}" ${isSelected(bizarrerie.id, "bizarrerieId")}>${bizarrerie.name}</option>`
        }
    ).join("")
    html += `
        </select>
    </div>
    <div class="field">
    <label class="label" for="eaterie">Eateries</label>
    <select class="eaterie" name="eaterie">
    <option value="0" hidden>Choose Eaterie</option>`
    eateries.map(
        eaterie => {
            html += `<option value="${eaterie.id}" ${isSelected(eaterie.id, "eaterieId")}>${eaterie.businessName}</option>`
    
        }
    ).join("")
    html += `
    </select>
</div>`

    return html
    
}

const mainContainer = document.querySelector("#container")

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "park") {
            const parkID = event.target.value
            setPark(parkID) // We don't parseInt this one because its ID is a string in our database

            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "bizarrerie") {
            const bizarrerieID = event.target.value
            setBizarrerie(parseInt(bizarrerieID))

            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "eaterie") {
            const eaterieID = event.target.value
            setEaterie(parseInt(eaterieID))

            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

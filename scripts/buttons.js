import { getTransientState, getParks, getBizarreries, getEateries } from "./dataAccess.js"


export const Buttons = () => {
    const bizarreries = getBizarreries(),
        parks = getParks(),
        eateries = getEateries(),
        transientState = getTransientState()
    let html = ``

    html += parks.map(park => {
        if (park.id === transientState.parkId) {
            return `<article class="preview-article" id="park-preview">
                <h4>${park.name}</h4>
                <button type="button" id="park-btn" class="preview-btn">Park Info</button>
                <div class="info-div" id="park-info">
                
                </div>
            </article>`
        }
    }).join("")

    html += bizarreries.map(bizarrerie => {
        if (bizarrerie.id === transientState.bizarrerieId) {
            return `<article class="preview-article" id="bizarrerie-preview">
                <h4>${bizarrerie.name}</h4>
                <button type="button" id="bizarrerie-btn" class="preview-btn">Bizarrerie Info</button>
                <div class="info-div" id="bizarrerie-info">
                
                </div>
            </article>`
        }
    }).join("")

    html += eateries.map(eaterie => {
        if (eaterie.id === transientState.eaterieId) {
            return `<article class="preview-article" id="eaterie-preview">
                <h4>${eaterie.businessName}</h4>
                <button type="button" id="eaterie-btn" class="preview-btn">Eaterie Info</button>
                <div class="info-div" id="eaterie-info">
                
                </div>
            </article>`
        }
    }).join("")

    return html
}

const mainContainer = document.querySelector("#container")

let parkDisplay = 1
let bizarrerieDisplay = 1
let eaterieDisplay = 1

export const resetInfoButtons = () => {
    parkDisplay !== 1 ? parkDisplay = 1 : null
    bizarrerieDisplay !== 1 ? bizarrerieDisplay = 1 : null
    eaterieDisplay !== 1 ? eaterieDisplay = 1 : null
}

mainContainer.addEventListener(
    "click",
    event => {
        if (event.target.id === "park-btn") {
            if (parkDisplay === 1) {
                const parks = getParks(),
                    transientState = getTransientState(),
                    park = parks.find(park => park.id === transientState.parkId)

                document.querySelector("#park-info").innerHTML = `<h4 style="margin-bottom: 0rem; height: fit-content; text-decoration: underline">Address</h4>
                ${park.address.line1} | ${park.address.city}, ${park.address.stateCode} ${park.address.postalCode}
                <h4 style="margin-bottom: 0rem; height: fit-content; text-decoration: underline">Description</h4><p style="margin-top: 0rem; height: fit-content">${park.description}</p>`

                parkDisplay++

                document.querySelector("#bizarrerie-info").innerHTML = ``
                document.querySelector("#eaterie-info").innerHTML = ``
                bizarrerieDisplay = 1
                eaterieDisplay = 1
            } else {
                document.querySelector("#park-info").innerHTML = ""
                parkDisplay--
            }
        } else if (event.target.id === "bizarrerie-btn") {
            if (bizarrerieDisplay === 1) {
                const bizarreries = getBizarreries(),
                    transientState = getTransientState(),
                    bizarrerie = bizarreries.find(bizarrerie => bizarrerie.id === transientState.bizarrerieId)

                document.querySelector("#bizarrerie-info").innerHTML = `<h4 style="margin-bottom: 0rem; height: fit-content; text-decoration: underline">Address</h4>
                ${bizarrerie.city}, ${bizarrerie.state}
                <h4 style="margin-bottom: 0rem; height: fit-content; text-decoration: underline">Description</h4><p style="margin-top: 0rem; height: fit-content">${bizarrerie.description}</p>`

                bizarrerieDisplay++

                document.querySelector("#park-info").innerHTML = ``
                document.querySelector("#eaterie-info").innerHTML = ``
                parkDisplay = 1
                eaterieDisplay = 1
            } else {
                document.querySelector("#bizarrerie-info").innerHTML = ""
                bizarrerieDisplay--
            }
        } else if (event.target.id === "eaterie-btn") {
            if (eaterieDisplay === 1) {
                const eateries = getEateries(),
                    transientState = getTransientState(),
                    eaterie = eateries.find(eaterie => eaterie.id === transientState.eaterieId)

                document.querySelector("#eaterie-info").innerHTML = `<h4 style="margin-bottom: 0rem; height: fit-content; text-decoration: underline">Address</h4>
                ${eaterie.city}, ${eaterie.state}
                <h4 style="margin-bottom: 0rem; height: fit-content; text-decoration: underline">Description</h4><p style="margin-top: 0rem; height: fit-content">${eaterie.description}</p>`

                eaterieDisplay++

                document.querySelector("#bizarrerie-info").innerHTML = ``
                document.querySelector("#park-info").innerHTML = ``
                bizarrerieDisplay = 1
                parkDisplay = 1
            } else {
                document.querySelector("#eaterie-info").innerHTML = ""
                eaterieDisplay--
            }
        }

    }
)
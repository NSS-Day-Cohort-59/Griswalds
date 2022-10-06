import { getItineraries, getParks, getBizarreries, getEateries } from "./dataAccess.js"

export const convertRequestToListElement = (itinerary) => {

        let HTMLString = ""
        const parks = getParks()
        const bizarreries = getBizarreries()
        const eateries = getEateries()

        //Matches the itinerary park to a park ID
        let matchingPark = parks.find(park => park.id === itinerary.parkId) 

        //Matches the itinerary park to a bizarrerie ID
        let matchingBizarrerie = bizarreries.find(bizarrerie => bizarrerie.id === itinerary.bizarrerieId) 

        //Matches the itinerary park to an eaterie ID
        let matchingEaterie = eateries.find(eaterie => eaterie.id === itinerary.eaterieId) 

    if( itinerary.id % 2 !== 0 ) {
    HTMLString += `<li class="color1">
        <div>Selected National Park: ${matchingPark.name}</div>
        <div>Selected Bizarrerie: ${matchingBizarrerie.name}</div>
        <div>Selected Eaterie: ${matchingEaterie.businessName}</div>
        <div>Itinerary ID: ${itinerary.id}</div>
    </li>
    `}
    else {HTMLString += `<li class="color2">
    <div>Selected National Park: ${matchingPark.name}</div>
    <div>Selected Bizarrerie: ${matchingBizarrerie.name}</div>
    <div>Selected Eaterie: ${matchingEaterie.businessName}</div>
    <div>Itinerary ID: ${itinerary.id}</div>
</li>
`
    }
    return HTMLString
}

export const SavedItineraries = () => {
    
    const itineraries = getItineraries()

    let html = `
    <ul class="list_item">
        ${itineraries.map(convertRequestToListElement).join("")
    }
    </ul>
`

return html

    }
    
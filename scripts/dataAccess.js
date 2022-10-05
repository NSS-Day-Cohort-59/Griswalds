const applicationState = {
    parks: [

    ],
    bizarraries: [

    ],
    eateries: [

    ],
    weather: [

    ],
    itineraries: []

}


export const transientState = {

}


export const setPark = (parkId) => {
    transientState.selectedPark = parkId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setBizarrarie = (bizarrarieId) => {
    transientState.selectedBizarrarie = bizarrarieId

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setEaterie = (eaterieId) => {
    transientState.selectedEaterie = eaterieId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

const bizarrarieAPI = "http://holidayroad.nss.team/bizarreries"

export const fetchBizarraries = () => {
    return fetch(`${bizarrarieAPI}`)
        .then(response => response.json())
        .then(
            (Requests) => {
                // Store the external state in application state
                applicationState.bizarraries = Requests
            }
        )
}

const eaterieAPI = "http://holidayroad.nss.team/eateries"

export const fetchEateries = () => {
    return fetch(`${eaterieAPI}`)
        .then(response => response.json())
        .then(
            (Requests) => {
                // Store the external state in application state
                applicationState.eateries = Requests
            }
        )
}

//Functions for exporting copies of data from application state
export const getParks = () => applicationState.parks.map(park => ({ ...park }))
export const getBizarraries = () => applicationState.bizarraries.map(bizarrary => ({ ...bizarrary }))
export const getEateries = () => applicationState.eateries.map(eatery => ({ ...eatery }))
export const getItineraries = () => applicationState.itineraries.map(itinerary => ({ ...itinerary }))
export const getWeather = () => applicationState.weather.map(weatherObj => ({ ...weatherObj }))
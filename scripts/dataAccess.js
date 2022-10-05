import keyObj from "./Settings.js" // Imports the object that holds our API keys

const applicationState = {
    parks: [],
    bizarraries: [],
    eateries: [],
    itineraries: [],
    weather: [],
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

const bizarrarieAPI = "http://holidayroad.nss.team/bizarraries"

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

const parkAPI = "http://developer.nps.gov/api/v1"

const physicalParkAddress = (park) => {
    for (const address of park.addresses) {
        if (Object.values(address).includes("Physical")) {
            return address
        }
    }
}

export const fetchParks = () => {
    return fetch(`${parkAPI}/parks?api_key=${keyObj.npsKey}&limit=20`)
        .then(response => response.json())
        .then(
            (responseArr) => {
                const parks = responseArr.data // Grabs only the data for the parks
                for (const park of parks) {
                    const parkObj = {
                        id: park.id,
                        name: park.fullName,
                        address: physicalParkAddress(park),
                        description: park.description,
                        longitude: park.longitude,
                        latitude: park.latitude
                    }
                    applicationState.parks.push(parkObj)
                }
            }
        )
}

const itineraryAPI = `http://localhost:8088`

export const fetchItineraries = () => {
    return fetch(`${itineraryAPI}/itineraries`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.itineraries = [...data]
            }
        )
}
//Functions for exporting copies of data from application state
export const getParks = () => applicationState.parks.map(park => ({ ...park }))
export const getBizarraries = () => applicationState.bizarraries.map(bizarrary => ({ ...bizarrary }))
export const getEateries = () => applicationState.eateries.map(eatery => ({ ...eatery }))
export const getItineraries = () => applicationState.itineraries.map(itinerary => ({ ...itinerary }))
export const getWeather = () => applicationState.weather.map(weatherObj => ({ ...weatherObj }))

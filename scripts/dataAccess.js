import keyObj from "./Settings.js" // Imports the object that holds our API keys

const applicationState = {
    parks: [],
    bizarreries: [],
    eateries: [],
    itineraries: [],
    weather: [],
}


export let transientState = {

}

const mainContainer = document.querySelector("#container")

export const setPark = (parkId) => {
    transientState.parkId = parkId
}

export const setBizarrerie = (bizarrerieId) => {
    transientState.bizarrerieId = bizarrerieId
}

export const setEaterie = (eaterieId) => {
    transientState.eaterieId = eaterieId
}

const bizarrerieAPI = "http://holidayroad.nss.team/bizarreries"

export const fetchBizarreries = () => {
    return fetch(`${bizarrerieAPI}`)
        .then(response => response.json())
        .then(
            (Requests) => {
                // Store the external state in application state
                applicationState.bizarreries = Requests
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
                applicationState.parks = []
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

export const saveItinerary = (itineraryObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itineraryObj)
    }
    transientState = {}
    return fetch(`${itineraryAPI}/itineraries`, fetchOptions)
        .then(res => res.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

const weatherAPI = `http://api.openweathermap.org/data/2.5/forecast`

export const fetchWeatherForecast = (latitude, longitude) => {
    return fetch(`${weatherAPI}?lat=${latitude}&lon=${longitude}&appid=${keyObj.weatherKey}`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.weather = []

                const forecastArr = data.list.filter(obj => obj.dt_txt.includes("12:00:00"))

                for (const forecast of forecastArr) {
                    const forecastObj = {
                        temp: forecast.main.temp,
                        humidity: forecast.main.humidity,
                        description: forecast.weather.main,
                        date: forecast.dt,
                        icon: `http://openweathermap.org/img/wn/` + forecast.icon + `@2x.png`
                        // Temp, Humidity, General Description, Date
                        /* Possible known description(s): 
                        -Clouds
                        -Clear
                        -Rain
                        -Snow (Guessing on this one)
                        *The first 3 are the ones I found when checking 10+ different locations*
                        */
                    }

                    applicationState.weather.push(forecastObj)
                }
            }
        )
}

//Functions for exporting copies of data from application state
export const getParks = () => applicationState.parks.map(park => ({ ...park }))

export const getBizarreries = () => applicationState.bizarreries.map(bizarrery => ({ ...bizarrery }))

export const getEateries = () => applicationState.eateries.map(eatery => ({ ...eatery }))

export const getItineraries = () => applicationState.itineraries.map(itinerary => ({ ...itinerary }))

export const getWeather = () => applicationState.weather.map(weatherObj => ({ ...weatherObj }))

export const getTransientState = () => {
    return { ...transientState }
}
import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [location, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        .then(res=> res.json())
        .then(setLocations)
    }

return (
    <LocationContext.Provider value={{
        location, setLocations, getLocations
    }}>
        {props.children}
    </LocationContext.Provider>
)
}
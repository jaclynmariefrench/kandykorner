import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./Locations/LocationList"
import { LocationProvider } from "./Locations/LocationProvider"

export const KandyKorner = () => {
    return (
        <>
            <LocationProvider>
                <Route path="/locations">
                    <LocationList/>
                </Route>
            </LocationProvider>
        </>
    )
}
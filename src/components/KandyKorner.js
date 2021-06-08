import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./Locations/LocationList"
import { LocationProvider } from "./Locations/LocationProvider"
import { ProductProvider } from "./Products/ProductProvider";
import { ProductList } from "./Products/ProductList";

export const KandyKorner = () => {
    return (
        <>
            <LocationProvider>
                <Route path="/locations">
                    <LocationList/>
                </Route>
            </LocationProvider>
            <ProductProvider>
                <Route path="/products">
                    <ProductList/>
                </Route>
            </ProductProvider>
        </>
    )
}
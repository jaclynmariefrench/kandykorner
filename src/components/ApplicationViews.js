import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./Locations/LocationList"
import { LocationProvider } from "./Locations/LocationProvider"
import { ProductProvider } from "./Products/ProductProvider";
import { ProductList } from "./Products/ProductList";
import { ProductTypeProvider } from "./ProductType/ProductTypeProvider";

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList/>
                </Route>
            </LocationProvider>
            <ProductProvider>
                <ProductTypeProvider>
                <Route path="/products">
                    <ProductList/>
                </Route>
                </ProductTypeProvider>
            </ProductProvider>
        </>
    )
}
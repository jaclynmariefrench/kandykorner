import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./Locations/LocationList"
import { LocationProvider } from "./Locations/LocationProvider"
import { ProductProvider } from "./Products/ProductProvider";
import { ProductList } from "./Products/ProductList";
import { ProductTypeProvider } from "./ProductType/ProductTypeProvider";
import { EmployeeProvider } from "./Employees/EmployeeProvider";
import { EmployeeForm } from "./Employees/EmployeeForm";
import { EmployeeList } from "./Employees/EmployeeList";
import { CustomerOrderProvider } from "./CandyOrders/CustomerCandyProvider";
import { CustomerOrderList } from "./CandyOrders/CustomerOrderList";
import { CustomerProvider } from "./Customers/CustomerProvider";

export const ApplicationViews = () => {
    return (
        <>
        {/* LOCATIONS */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList/>
                </Route>
            </LocationProvider>
        {/* PRODUCTS */}
            <ProductProvider>
                <ProductTypeProvider>
                    <CustomerOrderProvider>
                <Route path="/products">
                    <ProductList/>
                </Route>
                    </CustomerOrderProvider>
                </ProductTypeProvider>
            </ProductProvider>
        {/* EMPLOYEES */}
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList/>
                    </Route>
                    <Route exact path="/employees/create">
                        <EmployeeForm/>
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        {/* CUSTOMER */}
            <CustomerOrderProvider>
                <ProductProvider>
                    <CustomerProvider>
                        <Route exact path="/cart">
                        <CustomerOrderList/>
                        </Route>
                    </CustomerProvider>
                </ProductProvider>
            </CustomerOrderProvider>
        </>
    )
}
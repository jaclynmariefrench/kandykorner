import React from "react";
import { Route, Router } from "react-router-dom";
import { LocationList } from "./Locations/LocationList";
import { LocationProvider } from "./Locations/LocationProvider";
import { ProductProvider } from "./Products/ProductProvider";
import { ProductList } from "./Products/ProductList";
import { ProductTypeProvider } from "./ProductType/ProductTypeProvider";
import { EmployeeProvider } from "./Employees/EmployeeProvider";
import { EmployeeForm } from "./Employees/EmployeeForm";
import { EmployeeList } from "./Employees/EmployeeList";
import { CustomerOrderProvider } from "./CandyOrders/CustomerCandyProvider";
import { CustomerOrderList } from "./CandyOrders/CustomerOrderList";
import { CustomerProvider } from "./Customers/CustomerProvider";
import { CustomerList } from "./Customers/CustomerList";
import { ProductSearch } from "./Products/InventorySearch";
import { KandyLanding } from "./KandyKorner/kandyKornerLanding";

export const ApplicationViews = () => {
  return (
    <>
      {/* LANDING */}
      <Route exact path="/">
        <KandyLanding />
      </Route>
      {/* LOCATIONS */}
      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>
      {/* PRODUCTS */}
      <ProductProvider>
        <ProductTypeProvider>
          <CustomerOrderProvider>
            <Route path="/products">
              <ProductSearch/>
              <ProductList />
            </Route>
          </CustomerOrderProvider>
        </ProductTypeProvider>
      </ProductProvider>
      {/* EMPLOYEES */}
      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>
      {/* CUSTOMER ORDER*/}
      <CustomerOrderProvider>
        <ProductProvider>
          <CustomerProvider>
            <Route exact path="/cart">
              <CustomerOrderList />
            </Route>
          </CustomerProvider>
        </ProductProvider>
      </CustomerOrderProvider>
      {/* CUSTOMER LIST */}
      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList/>
        </Route>
      </CustomerProvider>
    </>
  );
};

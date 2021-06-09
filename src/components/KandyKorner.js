import React from "react";
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./KandyKorner.css";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";

export const KandyKorner = () => {
  return (
    <>
    <Route
      render={() => {
        if (localStorage.getItem("kandy_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>

      
    </>
  );
};

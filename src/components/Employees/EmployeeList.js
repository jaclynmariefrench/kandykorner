import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { LocationContext } from "../Locations/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employees.css";

export const EmployeeList = () => {
  const { employee, setEmployees, getEmployees } = useContext(EmployeeContext);
  const { location, getLocations } = useContext(LocationContext);

  const history = useHistory()

  useEffect(() => {
    getEmployees().then(getLocations());
  }, []);

  return (
    <section className="employee_container">
      <header>
        <h2 className="title_employees">Employees</h2>
      </header>
      <button onClick={() => history.push("/employees/create")}>
        Hire Employee
      </button>
      <div className="EmployeeList">
        {employee.map((e) => {
          return (
            <>
              <section className="EmployeeDetail">
                <div>
                  <h3>{e.name}</h3>
                </div>
                <div>{e.location.name}</div>
              </section>
            </>
          );
        })}
      </div>
    </section>
  );
};


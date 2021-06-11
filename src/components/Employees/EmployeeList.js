import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { LocationContext } from "../Locations/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employees.css";

export const EmployeeList = () => {
  const { employee, releaseEmployee, getEmployees, setEmployees } = useContext(EmployeeContext);
  const { location, getLocations } = useContext(LocationContext);

  const history = useHistory()

  useEffect(() => {
    getEmployees().then(getLocations());
  }, []);

  const { employeeId } = useParams();

  // useEffect(() => {
  //   const thisEmployee = employee.find((e) => e.id === parseInt(employeeId)) || {
  //     location: {},
  //   };

  //   setEmployees(thisEmployee);
  // }, [employeeId]);

  const handleRelease = (employeeId) => {
    
    releaseEmployee(employeeId).then(() => {
      history.push("/employees");
    });
  };


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
              <section className="EmployeeDetail" value={e.id}>
                <div>
                  <h3>{e.name}</h3>
                </div>
                <div>{e.location.name}</div>
              <button onClick={()=> {
                handleRelease(e.id)
              }}>Fire Employee</button>
              </section>
              
            </>
          );
        })}
      </div>
    </section>
  );
};


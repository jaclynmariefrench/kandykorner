import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { LocationContext } from "../Locations/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { location, getLocations } = useContext(LocationContext);

  const [employee, setEmployees] = useState({});
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newEmployee = { ...employee };
    newEmployee[event.target.name] = event.target.value;
    setEmployees(newEmployee);
  };

  const handleSaveEmployee = () => {
    if (parseInt(employee.locationId) === 0) {
      window.alert("Please select a location");
    } else {
      addEmployee({
        name: employee.name,
        locationId: parseInt(employee.locationId),
      }).then(() => history.push("/employees"));
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">Add New Employee</h2>
      <fieldset>
        <div className="form_group">
          <label htmlFor="EmployeeName">Employee name:</label>
          <input
            type="text"
            id="EmployeeName"
            name="name"
            required
            autoFocus
            className="form_control"
            placeholder="Employee Name"
            onChange={handleControlledInputChange}
            defaultValue={employee.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form_group">
          <label htmlFor="location">Assign to location</label>
          <select
            value={employee.locationId}
            name="locationId"
            id="EmployeeLocation"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {location.map((l) => (
              <option key={l.id} value={l.id}>
                {l.address}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset></fieldset>
      <fieldset></fieldset>
      <fieldset></fieldset>
    </form>
  );
};

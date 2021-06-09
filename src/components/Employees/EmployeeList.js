import React, { useContext, useEffect } from "react";
import { LocationContext } from "../Locations/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeList = () => {
    const { employee, setEmployees, getEmployees } = useContext(EmployeeContext)
    const { location, getLocations } = useContext(LocationContext)

    useEffect(()=> { getEmployees().then(getLocations())}, []);

    return (
        <section className="EmployeeList">
            <h2>Employees</h2>
            {
                employee.map(e => {
                    return (
                        <>
                        <div>
                            <h3>{e.name}</h3>
                        </div>
                        <div>
                            {e.location.address}
                        </div>
                        </>
                    )
                })
            }
        </section>
    )

}
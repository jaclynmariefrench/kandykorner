import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { LocationContext } from "./LocationProvider";
import "./Locations.css"

export const LocationList = () => {
    const { location, setLocations, getLocations } = useContext(LocationContext)

    useEffect(()=> { getLocations() }, []);

    return (
        <section className="location_container">
          <header>
            <h2 className="title_location">Locations</h2>
              </header>  
           <div className="LocationList">
            {
                location.map(l => {
                    return (
                        <div className="LocationDetail">
                        <div>
                           <h3>{l.name}</h3> 
                        </div>
                        <div>
                            {l.address}
                        </div>
                        </div>
                    )
                })
            }    
           </div>
        </section>
    )

}


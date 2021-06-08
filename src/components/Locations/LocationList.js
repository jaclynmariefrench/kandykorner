import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";

export const LocationList = () => {
    const { location, setLocations, getLocations } = useContext(LocationContext)

    useEffect(()=> { getLocations() }, []);

    return (
        <section className="locationList">
            <h2>Locations</h2>
            {
                location.map(l => {
                    return (
                        <div>
                            {l.address}
                        </div>
                    )
                })
            }
        </section>
    )

}


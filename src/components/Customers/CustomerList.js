import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import "./Customers.css"

export const CustomerList = () => {
    const { customer, getCustomers } = useContext(CustomerContext)

    useEffect(()=> { getCustomers() }, []);

    return (
        <section className="customer_container">
          <header>
            <h2 className="title_Customer">Customers</h2>
              </header>  
           <div className="CustomerList">
            {
                customer.map(c => {
                    return (
                        <div className="CustomerDetail">
                        <div>
                           <h3>{c.name}</h3> 
                        </div>
                        <div>
                            {c.email}
                        </div>
                        </div>
                    )
                })
            }    
           </div>
        </section>
    )

}


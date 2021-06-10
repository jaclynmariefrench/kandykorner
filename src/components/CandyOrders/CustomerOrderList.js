import React, { useContext, useEffect } from "react";
import { CustomerOrderContext } from "./CustomerCandyProvider";
import "./CandyOrders.css"

export const CustomerOrderList = () => {
  const { customerOrder, getCustomerOrders } = useContext(CustomerOrderContext);
  


  useEffect(() => {
    getCustomerOrders()
  }, []);

  return (
    <section className="customerOrder_container">
      <header>
        <h2 className="title_CustomerOrders">Your Shopping Cart</h2>
      </header>
      <div className="CustomerOrderList">
        {customerOrder.map((o) => {
          return (
            <>
              <section className="customerOrderDetail">
                <div>
                  <b><h3>{o.customer.name}</h3></b>
                </div>
                <div>{o.product.name}</div>
              </section>
            </>
          );
        })}
      </div>
    </section>
  );
};
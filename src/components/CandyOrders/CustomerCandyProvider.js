import React, { useState, createContext } from "react"

export const CustomerOrderContext = createContext()

export const CustomerOrderProvider = (props) => {
    const [customerOrder, setCustomerOrders] = useState([])

    const getCustomerOrders = () => {
        return fetch("http://localhost:8088/customerOrders?_expand=product&_expand=customer")
        .then(res=> res.json())
        .then(setCustomerOrders)
    }

    const addCustomerOrder = customerOrderObj => {
        return fetch("http://localhost:8088/customerOrders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerOrderObj)
        })
        .then(getCustomerOrders)
    }

return (
    <CustomerOrderContext.Provider value={{
        customerOrder, setCustomerOrders, getCustomerOrders, addCustomerOrder
    }}>
        {props.children}
    </CustomerOrderContext.Provider>
)
}
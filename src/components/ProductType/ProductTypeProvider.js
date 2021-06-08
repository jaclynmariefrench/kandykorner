import React, { useState, createContext } from "react"

export const ProductTypeContext = createContext()

export const ProductTypeProvider = (props) => {
    const [productType, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(res=> res.json())
        .then(setProductTypes)
    }

return (
    <ProductTypeContext.Provider value={{
        productType, setProductTypes, getProductTypes
    }}>
        {props.children}
    </ProductTypeContext.Provider>
)
}
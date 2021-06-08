import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [product, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products?_expand=productType")
        .then(res=> res.json())
        .then(setProducts)
    }

return (
    <ProductContext.Provider value={{
        product, setProducts, getProducts
    }}>
        {props.children}
    </ProductContext.Provider>
)
}
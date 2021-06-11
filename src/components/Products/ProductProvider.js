import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [product, setProducts] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getProducts = () => {
        return fetch("http://localhost:8088/products?_expand=productType")
        .then(res=> res.json())
        .then(setProducts)
    }

return (
    <ProductContext.Provider value={{
        product, setProducts, getProducts, searchTerms, setSearchTerms
    }}>
        {props.children}
    </ProductContext.Provider>
)
}
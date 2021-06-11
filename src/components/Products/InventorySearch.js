import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import "./Products.css"

export const ProductSearch = () => {
  const { setSearchTerms } = useContext(ProductContext)

  return (
    <>
      Product search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an Product... " />
    </>
  )
}

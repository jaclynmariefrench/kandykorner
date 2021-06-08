import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider";
import { ProductTypeContext } from "../ProductType/ProductTypeProvider";

export const ProductList = () => {
    const { product, setProducts, getProducts } = useContext(ProductContext)
    const { productType, getProductTypes } = useContext(ProductTypeContext)

    useEffect(()=> { getProducts().then(getProductTypes()) }, []);

    return (
        <section className="productList">
            <h2>Products</h2>
            {
                product.map(p => {
                    return (
                        <>
                        <div>
                           <b> {p.name} </b> 
                        </div>
                        <div>
                            Price: {p.price}
                        </div>
                        <div>
                            Type of candy: {p.productType.name}
                        </div>
                        </>
                    )
                })
            }
        </section>
    )

}


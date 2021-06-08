import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider";

export const ProductList = () => {
    const { product, setProducts, getProducts } = useContext(ProductContext)

    useEffect(()=> { getProducts() }, []);

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


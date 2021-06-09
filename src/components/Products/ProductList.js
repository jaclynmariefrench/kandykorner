import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider";
import { ProductTypeContext } from "../ProductType/ProductTypeProvider";
import "./Products.css";

export const ProductList = () => {
  const { product, setProducts, getProducts } = useContext(ProductContext);
  const { productType, getProductTypes } = useContext(ProductTypeContext);

  useEffect(() => {
    getProducts().then(getProductTypes());
  }, []);

  return (
    <section className="product_container">
      <header className="title_product">
        <h2>Products</h2>
      </header>
      <div className="ProductList">
        {product.map((p) => {
          return (
            <div className="ProductDetail">
              <div>
                <b> {p.name} </b>
              </div>
              <div>Price: {p.price}</div>
              <div>Type of candy: {p.productType.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

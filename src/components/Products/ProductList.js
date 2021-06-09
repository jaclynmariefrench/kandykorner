import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider";
import { ProductTypeContext } from "../ProductType/ProductTypeProvider";
import "./Products.css";
import { CustomerOrderContext } from "../CandyOrders/CustomerCandyProvider";

export const ProductList = () => {
  const { product, setProducts, getProducts } = useContext(ProductContext);
  const { productType, getProductTypes } = useContext(ProductTypeContext);
  const { customerOrder, addCustomerOrder } = useContext(CustomerOrderContext)

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
              <button className="btn btn-primary" onClick={() => {
              addCustomerOrder()}}>Purchase</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

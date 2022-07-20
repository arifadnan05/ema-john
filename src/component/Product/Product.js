import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h4 className="name">{name}</h4>
        <p>
          <small>Seller By: </small>
          {seller}
        </p>
        <p>
          $<small>{price}</small>
        </p>
        <p>
          <small>{stock} Product Available Only</small>
        </p>
        <button className='shopping-btn' onClick={() => props.handleAddProduct(props.product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";

import "./productName.css";
const ProductCard = (props) => {
  const { imageSrc, alt, stock, price, totalSales, heading, lorem } = props;
  return (
    <>
      <div className="product-name ">
        <div className="heading">
          <img src={`${imageSrc}`} alt={`${alt}`} />
          <h6 className="h6">{heading}</h6>
        </div>

        <ul>
          <li className="text-dark">{stock} </li>
          <li className="fw-bold text-dark">{price}</li>
          <li className="text-dark">{totalSales} </li>
        </ul>
      </div>
    </>
  );
};

export default ProductCard;

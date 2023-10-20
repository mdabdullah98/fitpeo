import React from "react";

import "./productSell.css";

import { MdOutlineArrowDropDownCircle } from "react-icons/md";

import { CiSearch } from "react-icons/ci";

import ProductCard from "../productName/ProductCard";
const ProductSell = () => {
  return (
    <>
      <section className="prodcuct-sell-main">
        <div className="product-sell-child">
          <div className="product-sell-header">
            <h6 className="h6">Product Sell</h6>
            <div className="d-flex align-items-center">
              <form className="search-form fw-bold">
                <label htmlFor="search-input">
                  <CiSearch />
                </label>
                <input type="text" placeholder="search" id="search-input" />
              </form>

              <div className="chart-bar-quantity d-flex">
                <button>Quantity</button>
                <span>
                  <MdOutlineArrowDropDownCircle />
                </span>
              </div>
            </div>
          </div>

          <div className="product-name">
            <div className="heading">
              <h6 className="h6">Product Name</h6>
            </div>

            <ul>
              <li>stock </li>
              <li>Price</li>
              <li>Total Sales </li>
            </ul>
          </div>
          <hr />

          <ProductCard
            imageSrc={"./pexels-photo-1629236.jpeg"}
            alt={"pexels-photo"}
            stock={"32 in stock"}
            price={"45.99"}
            totalSales={"20"}
            heading={"Abstract 3D"}
            lorem={"Lorem ipsum dolor, sit amet consectetur "}
          />
          <ProductCard
            imageSrc={"./1000_F_628672385_fhGuSlq3OOogCrCy5lloS6eRAlikt3j9.jpg"}
            alt={"home"}
            stock={"32 in stock"}
            price={"45.99"}
            totalSales={"20"}
            heading={"Sarphens illustration"}
            lorem={"Lorem ipsum dolor, sit amet consectetur "}
          />
          <div className="product-sell-content"></div>
        </div>
      </section>
    </>
  );
};

export default ProductSell;

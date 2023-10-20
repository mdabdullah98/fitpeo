import React from "react";
import { ChartArray } from "../../utils/utils";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import "./ChartOverview.css";

const ChartOverview = () => {
  return (
    <section className="overview-main">
      <div className="chart-bar">
        <div className="w-100 d-flex justify-content-between my-3">
          <div className="chart-bar-heading">
            <h6 className="h6 m-0">Overview</h6>
            <p>Monthly Earning</p>
          </div>
          <div className="chart-bar-quantity">
            <button>Quantity</button>
            <span>
              <MdOutlineArrowDropDownCircle />
            </span>
          </div>
        </div>

        <div className="chart-bar-list-main ">
          <ul className="bar-grid">
            {ChartArray.map(({ height, month }, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    className={`bar`}
                    style={{
                      height: `${height}rem`,
                    }}
                  >
                    <span>{month}</span>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="total-customer">
        <div className="w-100 d-flex flex-column align-align-items-start my-3">
          <h6 className="h6 m-0">Customers</h6>
          <p className="text-muted">Customer that buy products</p>
        </div>
        <div className="outline-border">
          <img
            src="./1000_F_397022665_yhIPfdSaxy9B1qFy6YmejhUjR5tqec5T.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ChartOverview;

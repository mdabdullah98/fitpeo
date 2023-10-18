import React from "react";
import { ChartArray } from "../../utils/utils";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import "./ChartOverview.css";

const ChartOverview = () => {
  return (
    <section className="overview-main">
      <div className="overview-main-sec-div">
        <div className="overView-quality ">
          <h6 className="h6">Overview</h6>
          <div className="overview-dropdown">
            <button>
              Quantity{" "}
              <span className="ms-2">
                <MdOutlineArrowDropDownCircle />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="second-div"></div>
    </section>
  );
};

export default ChartOverview;

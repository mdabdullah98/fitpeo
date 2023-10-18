import React from "react";

import "./card.css";

import { headerChart } from "../../utils/utils";

const Card = () => {
  return (
    <div className="card-grid">
      {headerChart.map(
        (
          {
            title,
            money,
            updownArrow,
            percentage,
            month,
            icon,
            alt,
            bgColor,
            txtColor,
          },
          index
        ) => {
          return (
            <React.Fragment key={index}>
              <div className="header-card">
                <div className="card-thumbanail">
                  <div
                    className="back-circle"
                    style={{ background: `${bgColor}` }}
                  >
                    <img src={`${icon}`} alt={alt} />
                  </div>
                </div>
                <div className="card-content">
                  <h6 className="card-titles">{title}</h6>
                  <p className="card-prices ">{money}</p>
                  <div className="balance-details">
                    <span>{updownArrow}</span>
                    <span style={{ color: `${txtColor}` }}>{percentage}</span>
                    <span>{month}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }
      )}
    </div>
  );
};

export default Card;

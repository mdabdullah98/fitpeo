import React from "react";

import "./app.css";

import Header from "./components/header/Header";

import ChartOverview from "./components/chartOverView/ChartOverview";

import Dashboard from "./components/dashboard/Dashboard";

import ProductSell from "./components/productSell/ProductSell";

const App = () => {
  return (
    <>
      <section className="main-app-sec">
        <div className="dashboard">
          <Dashboard />
        </div>
        <div className="header-chartOverView-productSell">
          <Header />

          <ChartOverview />
          <ProductSell />
        </div>
      </section>
    </>
  );
};

export default App;

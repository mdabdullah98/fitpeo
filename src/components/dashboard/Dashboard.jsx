import { RiSettingsLine } from "react-icons/ri";

import { AiOutlineSetting } from "react-icons/ai";

import { FaKey } from "react-icons/fa";

import { BiUserCircle } from "react-icons/bi";

import { BsWallet2 } from "react-icons/bs";

import { BiRightArrow } from "react-icons/bi";

import { MdOutlineLiveHelp } from "react-icons/md";

import { FaPercentage } from "react-icons/fa";

import { AiOutlineDown } from "react-icons/ai";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="d-flex justify-content-center align-items-center">
        <span className="mx-1 mb-1 fs-5">
          <RiSettingsLine />
        </span>
        <h5 className="dashboard-brand h5 my-5">Dashboard</h5>
      </div>

      <ul className="dashboard-list">
        <li className="dashboard-item-list active">
          <div>
            <span className="me-lg-2 me-1 icon">
              <FaKey />
            </span>
            <span className="item-text">dashboard</span>
          </div>
        </li>

        <li className="dashboard-item-list ">
          <div>
            <span className="me-lg-2  me-1 icon">{<AiOutlineSetting />}</span>
            <span className="item-text">Product</span>
          </div>

          <span className=" carot-icon">
            <BiRightArrow />
          </span>
        </li>

        <li className="dashboard-item-list ">
          <div>
            <span className="me-lg-2  me-1 icon">
              <BiUserCircle />
            </span>
            <span className="item-text">Customers</span>
          </div>
          <span className=" carot-icon">
            <BiRightArrow />
          </span>
        </li>

        <li className="dashboard-item-list ">
          <div>
            <span className="me-lg-2 me-1 icon">
              <BsWallet2 />
            </span>
            <span className="item-text">Income</span>
          </div>
          <span className=" carot-icon">
            <BiRightArrow />
          </span>
        </li>

        <li className="dashboard-item-list ">
          <div>
            <span className="me-lg-2 me-1 icon">
              <FaPercentage />
            </span>
            <span className="item-text">Promote</span>
          </div>
          <span className=" carot-icon">
            <BiRightArrow />
          </span>
        </li>

        <li className="dashboard-item-list ">
          <div>
            <span className="me-lg-2 me-1 icon">
              <MdOutlineLiveHelp />
            </span>
            <span className="item-text">help</span>
          </div>
          <span className=" carot-icon">
            <BiRightArrow />
          </span>
        </li>
      </ul>

      <div className="user-progile-main">
        <div className="user-profile">
          <img src="./user.jpeg" alt="" />
          <div className="user-degination">
            <h6 className="h6">Evano</h6>
            <p>Project Manager</p>
          </div>

          <span>
            <AiOutlineDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

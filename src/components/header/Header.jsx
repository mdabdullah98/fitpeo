import { CiSearch } from "react-icons/ci";

import Card from "../card/Card";

import "./header.css";

const Header = () => {
  return (
    <>
      <section className="greet-user-search-main ">
        <div className="greet-user">
          <h6 className="h6">Hello Sharukh 👋</h6>

          <form className="search-form p-1">
            <label htmlFor="search-input">
              <CiSearch />
            </label>
            <input type="text" placeholder="search" id="search-input" />
          </form>
        </div>
        <Card />
      </section>
    </>
  );
};

export default Header;

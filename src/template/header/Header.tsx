import React, { useState } from "react";
import "./header.scss";

import Logo from "../../assets/images/logo.png";
import SearchIcon from "../../assets/images/search-icon.png";
import PageCentre from "../../components/PageCentre/PageCentre";

const Header = () => {
  const [menuShow, setMenuShow] = useState<boolean>(false);

  return (
    <header>
      <PageCentre>
        <div className="logo">
          <img alt={"Musicology"} src={Logo} />
        </div>
        <div className="links">
          <ul>
            <li>HOME</li>
            <li>PRODUCT</li>
            <li>PROMO</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="search">
          <img alt={"search icon"} src={SearchIcon} />
        </div>
        <div
          className="mobile-menu-button"
          onClick={() => setMenuShow(!menuShow)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {menuShow && (
          <div className="mobile-menu">
            <ul>
              <li>HOME</li>
              <li>PRODUCT</li>
              <li>PROMO</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
        )}
      </PageCentre>
    </header>
  );
};

export default Header;

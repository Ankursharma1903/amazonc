import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    // it doesnt take anything
    if (user) {
      auth.signOut(); // this will siogns out the current user from firebase
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
        {/* logo */}
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          {/* so if no user so push to the login page */}
          {/* so if we singout then it will not push us to the login page  */}
          {/* but when we click on signin then it will throw us to login page */}
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello , {user ? user.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
            {/* so if user is present then it will give the option of sign out otherwise it will say sign in */}
          </div>
        </Link>
        <Link to="/Orders">
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
            {/* we can write basket.length but putting ? is helpful because if value is wrong so it will easily terminate and not give error */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

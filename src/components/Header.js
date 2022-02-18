import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "../assets/stylesheets/Header.css";
import { auth } from "../firebase";

function Header() {

  const [{basket, user}, dispatch] = useStateValue()

  const logoutUser = () => {
    if(user){
      auth.signOut()
    }
  }

  return (
    <nav className="header">
      <Link to="/" className="header__link">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* first link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={logoutUser} className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        {/* second link */}
        <Link to="#" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>
      </div>
      {/*basket icon with number */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          {/* number of items in the basket */}
          <span className="header__optionLineTwo header__productCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;

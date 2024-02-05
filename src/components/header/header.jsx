import React from "react";
import "./header.css";
import { CartBlock } from "../cart-block/cart-block";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__stor-title">
           WoodTable Games
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};

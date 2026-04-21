import React from "react";
import './Header.css';
import './HeaderIcon.jsx';
import searchIcon from "../assets/search-button.png";
import cartIcon from "../assets/shopping-cart.png";
import HeaderIcon from "./HeaderIcon.jsx";

export default function Header (){
    return (
        <header className="header">

            <div>
                <span>M </span>
                <span>MiraiMono Hobby Shop</span>
            </div>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Mau belanja apa hari ini?"
                />
                <button className="search-btn">
                    <img src={searchIcon} alt="search" />
                </button>
            </div>

            <div className="header-right">
                <HeaderIcon icon="cart" />
                <HeaderIcon icon="history" />
                <HeaderIcon icon="heart" />
            </div>

            <line> | </line>

        </header>
    );
}
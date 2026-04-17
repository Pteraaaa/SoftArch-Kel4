import React from "react";
import './Header.css';

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
                <button>
                    🔍
                </button>
            </div>



        </header>
    );
}
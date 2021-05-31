import React from 'react';
import header from '../assets/nav_bar.png';
import backButton from '../assets/Back.png';
import searchIcon from '../assets/search.png';
import '../App.css';

const Header = () => {
    return (
        <div className="Header">
            <img src={header} alt="header" className="HeaderBar" />
            <img src={backButton} alt="back" className="BackButton" />
            <h3 className="TextRomanticComedy">Romantic Comedy</h3>
            <img src={searchIcon} alt="back" className="SearchIcon" />
        </div>
    );
}

export default Header;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa'; // Import de l'icône de flèche vers le bas

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fonction pour afficher ou masquer les sous-menus
    const toggleSubMenu = (event) => {
        const subMenu = event.currentTarget.querySelector('ul');
        if (subMenu) {
            subMenu.classList.toggle('open');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const navMenu = document.getElementById('nav-menu-container');
            const menuButton = document.getElementById('menu-button');
            if (navMenu && !navMenu.contains(event.target) && !menuButton.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header id="header">
            <div className="right-section">
                <a href="/">
                    <img
                        className="resize"
                        src={require('../images/Arev_Society__red-removebg-preview.png')}
                        alt="Arev Society logo"
                    />
                </a>
            </div>
            <div className="right-section">
                <nav id="nav-menu-container" className={`${menuOpen ? 'open' : ''}`}>
                    <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                        <li className="menu-has-children" onClick={toggleSubMenu}>
                            <a href="">Who we are </a>
                            <FaAngleDown style={{ marginBottom: '-6px', marginLeft: '-1px', color: '#0000FF' }} />
                            <ul>
                                <li>
                                    <a href="#our-mission">Our Mission</a>
                                </li>
                                <li>
                                    <a href="#our-partners">Our partners</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-has-children" onClick={toggleSubMenu}>
                            <a href="#">What we do</a>
                            <FaAngleDown style={{ marginBottom: '-6px', marginLeft: '-1px', color: '#0000FF' }} />
                            <ul>
                                <li>
                                    <a href="humanitarian-emergency">Humanitarian Emergency</a>
                                </li>
                                <li>
                                    <a href="women-empowerment">Women Empowerment</a>
                                </li>
                                <li>
                                    <a href="refugee-women-empowerment">Refugee Women</a>
                                </li>
                                <li>
                                    <a href="digital-Inequality">Digital Inequality</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-has-children" onClick={toggleSubMenu}>
                            <a href="insights" title="Arev Society Blog">
                                Insights
                            </a>
                            <FaAngleDown style={{ marginBottom: '-6px', marginLeft: '-1px', color: '#0000FF' }} />
                            <ul>
                                <li>
                                    <a href="women-empowerment-stories">Life stories</a>
                                </li>
                                <li>
                                    <a href="digital-literacy-initiative-for-vulnerable-women-in-armenia">Articles</a>
                                </li>
                            </ul>
                        </li>
                        <li clas>
                            <a href="#contact" onClick={() => ('contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div id="menu-button" className="menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header;

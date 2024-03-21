import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa'; // Import de l'icône de flèche vers le bas

class Header extends React.Component {

    render() {

        return (

            <header id="header">
                <div className="right-section">
                    <a href="index.html">
                        <img
                            className="resize"
                            src={require('../images/Arev_Society__red-removebg-preview.png')}
                            alt="Arev Society logo"
                        />
                    </a>
                </div>
                <div className="right-section">
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-has-children">
                                <a href="index.html">Who we are </a>
                                <FaAngleDown style={{ marginBottom: '-3.5px', marginLeft: '-10px', color: '#0000FF' }} /> {/* Icône de flèche vers le bas */}
                                <ul>
                                    <li>
                                        <a href="index.html#about">Our Mission</a>
                                    </li>
                                    <li>
                                        <a href="index.html#portfolio">Our partners</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-has-children">
                                <a href="#">What we do</a>
                                <FaAngleDown style={{ marginBottom: '-3.5px', marginLeft: '-10px', color: '#0000FF' }} /> {/* Icône de flèche vers le bas */}
                                <ul>
                                    <li>
                                        <Link to="humanitarian-emergency">Humanitarian Emergency</Link>
                                    </li>
                                    <li>
                                        <Link to="women-empowerment">Women Empowerment</Link>
                                    </li>
                                    <li>
                                        <Link to="refugee-women-empowerment">Refugee Women</Link>
                                    </li>
                                    <li>
                                        <Link to="digital-literacy">Digital Literacy</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-has-children">
                                <a href="women-empowerment-stories" title="Arev Society Blog">
                                    Life stories
                                </a>
                                <FaAngleDown style={{ marginBottom: '-3.5px', marginLeft: '-10px', color: '#0000FF' }} /> {/* Icône de flèche vers le bas */}
                                <ul>
                                    <li>
                                        <a href="women-empowerment-stories">Our beneficiaries</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="index.html#contact" onclick="scrollToSection('contact')">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div >
            </header >

        );
    }
}

export default Header;

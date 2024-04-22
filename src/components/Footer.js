import React from 'react'

class Header extends React.Component {

    render() {

        return (


            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-company">
                        <a href="index">
                            <img
                                className="footer-logo"
                                src={require('../images/Arev 03-1-red_light-blue.png')}
                                alt="This the Arev Society not for profit charity logo"
                            />
                        </a>
                        <p className="footer-text">
                            The Arev Society Inc. is a registered 501(c)(3)
                            <br />
                            <br />
                            tax-exempt charity | EIN: 32-05 12 318
                        </p>
                        <div className="social">
                            <p>
                                <a
                                    className="social-f"
                                    href="https://www.facebook.com/arevsociety/"
                                    target="_blank"
                                    title="Opens Arev Society's Facebook page"
                                >
                                    f
                                </a>
                                <a
                                    className="social-x"
                                    href="https://twitter.com/ArevSociety"
                                    target="_blank"
                                    title="Opens Arev Society's X page"
                                >
                                    X
                                </a>
                                <a
                                    className="social-m"
                                    href="https://medium.com/@arevsociety"
                                    target="_blank"
                                    title="Opens Arev Society's Medium page"
                                >
                                    M
                                </a>
                            </p>
                        </div>
                        <div className="footer-bottom-text">
                            Arev Society © 2024 |<a href="privacy">Privacy </a>|
                        </div>
                    </div>
                    <div className="footer--who-we-are">
                        <h3 className="footer--who-we-are-h3">
                            <a href="/">Who we are</a>
                        </h3>
                        <div className="footer-our-mission">
                            <a href="#about">Our mission</a>
                        </div>
                        <div className="footer-our-partners">
                            <a href="#portfolio">Our partners</a>
                        </div>
                    </div>
                    <div className="footer-projects">
                        <h3 className="footer-projects-h3">
                            <a href="women-empowerment">What we do</a>
                        </h3>
                        <div className="footer-emergency">
                            <a
                                href="humanitarian-emergency"
                                onclick="scrollToSection('stories')"
                            >
                                Humanitarian Emergency
                            </a>
                        </div>
                        <div className="footer-wp">
                            <a href="women-empowerment">Women Empowerment</a>
                        </div>
                        <div className="footer-wp">
                            <a href="refugee-women-empowerment">Refugee Women</a>
                        </div>
                        <div className="footer-wp">
                            <a href="digital-inequality">Digital Inequality</a>
                        </div>
                    </div>
                    <div className="footer-stories">
                        <h3 className="footer-stories-h3">
                            <a href="women-empowerment-stories" title="Arev Society Blog">
                                Life stories
                            </a>
                        </h3>
                        <div className="footer-wp-stories">
                            <a href="women-empowerment-stories" title="Arev Society Blog">
                                {" "}
                                Our beneficiaries
                            </a>
                        </div>

                    </div>
                    <div id="contact" className="footer-contact">
                        <h3 className="footer-contact-h3">Contact</h3>
                        <div className="footer-contact-title">
                            Arev Society Inc | Annik Klein - CEO
                        </div>
                        <div className="footer-contact-address-1">
                            20 W 64th St. Suite 35R New York NY 10023
                        </div>
                        <address>
                            <a className="phone-a" href="tel:++12129252507">
                                +1212 925 2507
                            </a>
                            <br />
                            <a className="mail-a" href="mailto:av@arevsociety.org">
                                av@arevsociety.org
                            </a>
                        </address>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Header
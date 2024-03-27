import React, { useState } from 'react';

const CookieBanner = () => {
    const [accepted, setAccepted] = useState(() => {
        // Vérifie s'il y a un cookie 'cookiesAccepted'
        const cookiesAccepted = document.cookie
            .split('; ')
            .find(row => row.startsWith('cookiesAccepted='));
        return cookiesAccepted ? cookiesAccepted.split('=')[1] === 'true' : false;
    });

    const acceptCookies = () => {
        // Définit le cookie 'cookiesAccepted' avec une expiration d'un an
        document.cookie = 'cookiesAccepted=true; max-age=' + 60 * 60 * 24 * 365;
        setAccepted(true);
    };

    const denyCookies = () => {
        // Définit le cookie 'cookiesAccepted' avec une expiration d'un an
        document.cookie = 'cookiesAccepted=false; max-age=' + 60 * 60 * 24 * 365;
        setAccepted(false);
        // Afficher une pop-up sur les appareils mobiles
        if (window.innerWidth <= 768) {
            alert("Cookies denied. Some features of the site may not work.");
        }
    };

    if (accepted) {
        return null;
    }

    return (
        <div id="cookies-banner">
            <p>
                We use cookies and other identifiers to help improve your online experience.
                By using our website you are agreeing to this. Read our privacy policy to
                find out what cookies are used for and how to change your settings.
            </p>
            <button id="accept-cookies" onClick={acceptCookies}>Accept</button>
            <button id="deny-cookies" onClick={denyCookies}>Deny</button>
        </div>
    );
};

export default CookieBanner;

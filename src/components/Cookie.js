import React from 'react';
import { useCookies } from 'react-cookie';

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(['cookieName']);

    // Définir un cookie
    const handleSetCookie = () => {
        setCookie('cookieName', 'cookieValue', { path: '/' });
    };

    // Obtenir un cookie
    const cookieValue = cookies.cookieName;

    // Supprimer un cookie
    const handleRemoveCookie = () => {
        removeCookie('cookieName');
    };

    return (
        <div>
            <button onClick={handleSetCookie}>Définir un cookie</button>
            <p>Valeur du cookie : {cookieValue}</p>
            <button onClick={handleRemoveCookie}>Supprimer le cookie</button>
        </div>
    );
}

export default App;

document.addEventListener('DOMContentLoaded', function () {
    var cookiesBanner = document.getElementById('cookies-banner');
    var acceptCookiesButton = document.getElementById('accept-cookies');
    var denyCookiesButton = document.getElementById('deny-cookies');

    // Check if the user has already accepted or denied cookies
    var cookiesAccepted = getCookie('cookiesAccepted');

    console.log('cookiesAccepted:', cookiesAccepted);

    if (!cookiesAccepted) {
        // Show the cookies banner
        cookiesBanner.style.display = 'block';

        // Add click event listener to the "Accept" button
        acceptCookiesButton.addEventListener('click', function () {
            // Set a cookie named 'cookiesAccepted' with a value of 'true'
            setCookie('cookiesAccepted', 'true', 365);

            console.log('Accept button clicked');

            // Hide the cookies banner
            cookiesBanner.style.display = 'none';
        });

        // Add click event listener to the "Deny" button
        denyCookiesButton.addEventListener('click', function () {
            // You can customize the behavior for denying cookies (e.g., show a message)
            alert('Cookies denied. Some features of the site may not work.');

            console.log('Deny button clicked');

            // Hide the cookies banner
            cookiesBanner.style.display = 'none';
        });
    }
    
    // Function to set a cookie
    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    // Function to get the value of a cookie
    function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});



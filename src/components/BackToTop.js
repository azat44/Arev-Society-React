import React, { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa'; // Import de l'icône de flèche vers le bas


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 2500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', toggleVisibility);

    return (
        <div>
            {isVisible &&
                <button className="back-to-top" onClick={scrollToTop}>
                    <FaAngleUp style={{ marginBottom: '-3px', marginLeft: '-1px', }} />
                </button>
            }
        </div>
    );
};

export default ScrollToTopButton;

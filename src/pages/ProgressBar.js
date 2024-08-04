import React, { useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      document.getElementById('progress-bar').style.width = `${scrollPercentage}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="progress-bar" className="progress-bar"></div>;
};

export default ProgressBar;

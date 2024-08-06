import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Insights.css';
import { Helmet } from 'react-helmet';

class Insights extends React.Component {
  componentDidMount() {
    document.title = 'Insights - Arev Society';
  }

  render() {
    return (
      <>
        <Helmet>
           {/* General tags */}
    <title>Arev Society Insights-Blog</title>
    <meta name="description" content="Explore Arev Society's blog for articles, reports, findings, and recommendations on women empowerment, digital literacy, and supporting vulnerable women including refugees and war widows in Armenia." />
    <meta name="keywords" content="Arev Society, Blog, articles, reports, findings, recommendations, Women empowerment, Digital Literacy, Vulnerable women, Refugees, war widows, Armenia, Armenian Fund for Sustainable Development" />
    <link rel="canonical" href="https://www.arevsociety.org/insights" />

    {/* Open Graph tags */}
    <meta property="og:title" content="Arev Society Insights-Blog" />
    <meta property="og:description" content="Explore Arev Society's blog for articles, reports, findings, and recommendations on women empowerment, digital literacy, and supporting vulnerable women including refugees and war widows in Armenia." />
    <meta property="og:url" content="https://www.arevsociety.org/insights" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.arevsociety.org/path-to-image.jpg" /> {/* Add the correct image URL */}

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Arev Society Insights-Blog" />
    <meta name="twitter:description" content="Explore Arev Society's blog for articles, reports, findings, and recommendations on women empowerment, digital literacy, and supporting vulnerable women including refugees and war widows in Armenia." />
    <meta name="twitter:image" content="https://www.arevsociety.org/path-to-image.jpg" /> {/* Add the correct image URL */}
        </Helmet>
        
        <section id="intro" style={{ backgroundImage: "url(images/avs_background.webp)" }}>
          <div className="intro-content">
            <h1><span>Insights</span></h1>
            <div />
          </div>
        </section>
        <div className="insights-container">
          <div className="insight-card">
            <Link to="/women-empowerment-stories">
              <div className="insight-image-container">
                <img src={require('../images/Arev-Society_Refugee-Women_Inisghts-Articles-for-website1.webp')} alt="Arev Society Articles-Collage with Vulnerable Refugee Women" className="insight-image" />
              </div>
            </Link>
            <h2 className="insight-title">Life Stories</h2>
            <p className="insight-description">Discover inspiring stories of our brave beneficiaries who strive to become self-sufficient and inspire change for a better future.</p>
          </div>
          <div className="insight-card">
            <Link to="/digital-literacy-initiative-for-vulnerable-women-in-armenia">
              <div className="insight-image-container">
                <img src={require('../images/Arev_Society_Women_Empowerment_Insights_Life_Stories_for_website.webp')} alt="Arev Society-Refugee Women-Articles-Collage Armenian Landscape" className="insight-image" />
              </div>
            </Link>
            <h2 className="insight-title">Articles</h2>
            <p className="insight-description">Explore our articles detailing our projects, their implementation, and our analysis of outcomes for continuous improvement.</p>
          </div>
        </div>
      </>
    );
  }
}

export default Insights;

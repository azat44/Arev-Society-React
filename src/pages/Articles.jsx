import React from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import '../pages/Articles1.css';

const articles = [
  { id: 1, title: 'Digital Literacy Initiative for Vulnerable Women in Armenia', description: 'Keywords: Women empowerment, Digital Literacy, Vulnerable women, Refugees, Armenia', date: 'July 31, 2024', readTime: '4 min read', image: 'Arev Society-Women-Empowerment-M_e.webp' },
  { id: 2, title: 'How Open Source Software Is Transforming Biomedicine', description: 'Open source software is essential for scientific discovery.', date: 'July 18, 2024', readTime: '6 min read', image: 'Arev Society-Women-Empowerment-L_u.webp' },
  // Add more articles here
];

class Articles extends React.Component {
    componentDidMount() {
        document.title = 'Articles - Arev Society';
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Atricles - Arev Society</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Read inspiring stories of women empowerment and the positive impact of Arev Society's initiatives. Discover real-life experiences that highlight the strength and resilience of women." />
                    <meta name="keywords" content="women empowerment stories, success stories, inspiring women, Arev Society initiatives" />
                    <meta name="author" content="Arev Society" />
                    <meta name="format-detection" content="telephone=no" />
                    <link rel="canonical" href="https://www.arevsociety.org/women-empowerment-stories"></link>
                </Helmet>
                <section id="intro" style={{ backgroundImage: "url(images/avs_background.webp)" }}>
                    <div className="intro-content">
                        <h1><span>Articles</span></h1>
                        <div />
                    </div>
                </section>
                <div className="home-container">
                    <div className="featured-article">
                        <img src={require(`../images/${articles[0].image}`)} alt={articles[0].title} className="featured-article-image" />
                        <div className="featured-article-content">
                            <h2 className="featured-article-title">{articles[0].title}</h2>
                            <p className="featured-article-description">{articles[0].description}</p>
                            <div className="featured-article-info">
                                <span className="featured-article-date">{articles[0].date}</span>
                                <span className="featured-article-read-time">{articles[0].readTime}</span>
                            </div>
                            <a href="digital-literacy-article">Read More</a>
                            </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Articles;

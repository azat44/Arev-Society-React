import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { Helmet } from "react-helmet";


class Beneficiaries extends React.Component {
    componentDidMount() {
        document.title = 'Life stories - Arev Society';
    }

    render() {
        return (
            <>
                <Helmet>
                    {/* General tags */}
    <title>Arev Society - Women Empowerment Stories</title>
    <meta name="description" content="Explore inspiring women empowerment stories from Arev Society, highlighting the resilience and strength of vulnerable women, refugees, and war widows in Armenia." />
    <meta name="keywords" content="Arev Society, Women empowerment stories, Vulnerable women, Refugees, war widows, Armenia" />
    <link rel="canonical" href="https://www.arevsociety.org/women-empowerment-stories" />

    {/* Open Graph tags */}
    <meta property="og:title" content="Arev Society - Women Empowerment Stories" />
    <meta property="og:description" content="Explore inspiring women empowerment stories from Arev Society, highlighting the resilience and strength of vulnerable women, refugees, and war widows in Armenia." />
    <meta property="og:url" content="https://www.arevsociety.org/women-empowerment-stories" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.arevsociety.org/path-to-image.jpg" /> {/* Add the correct image URL */}

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Arev Society - Women Empowerment Stories" />
    <meta name="twitter:description" content="Explore inspiring women empowerment stories from Arev Society, highlighting the resilience and strength of vulnerable women, refugees, and war widows in Armenia." />
    <meta name="twitter:image" content="https://www.arevsociety.org/path-to-image.jpg" /> {/* Add the correct image URL */}

                </Helmet>
                <section
                    id="intro"
                    style={{ backgroundImage: "url(images/avs_background.webp)" }}    >
                    <div className="intro-content">
                        <h1>
                            <span>Life</span> stories
                        </h1>
                        <div />
                    </div>
                </section>
                {/* #intro */}
                <main>
                    <div className="container-stories">
                        <div className="story-1">
                            <img
                                className="img-story-1"
                                src={require('../images/Arev Society-Women-Empowerment-M_e.webp')}
                                alt="Arev Society-Women Empowerment story in Armenia "
                            />
                            <p className="date-story-1">Women Empowerment</p>
                            <h3 className="title-story-1">
                                {" "}
                                <a href="women-empowerment-story-1">
                                    Meline’s challenging journey to find hope
                                </a>{" "}
                            </h3>
                            <div className="article-story-1">
                                When my husband was taken from me during the war, life became abruptly
                                tough, and I didn't know what to do or where to turn...
                                <a href="women-empowerment-story-1">Read the story</a>
                            </div>
                        </div>
                        <div className="story-2">
                            <img
                                className="img-story-2"
                                src={require('../images/Arev Society-Women-Empowerment-L_u.webp')}
                                alt="Arev Society-Women Empowerment story L_u "
                            />
                            <p className="date-story-2">Women Empowerment</p>
                            <h3 className="title-story-2">
                                <a href="women-empowerment-story-2">
                                    Who will push me, if not me?{" "}
                                </a>
                            </h3>
                            <div className="article-story-2">
                                Her village is not very far from Yerevan, but the roads in this
                                community are rugged and awful, as her life experiences after the
                                war...
                                <a href="women-empowerment-story-2">Read the story</a>
                            </div>
                        </div>
                        <div className="story-3">
                            <img
                                className="img-story-3"
                                src={require('../images/Arev Society-Women-Empowerment-B_a.webp')}
                                alt="Arev Society-Women Empowerment story-B_a in Armenia "
                            />
                            <p className="date-story-3">Women Empowerment</p>
                            <h3 className="title-story-3">
                                <a href="women-empowerment-story-3">
                                    I have no choice , but to continue{" "}
                                </a>
                            </h3>
                            <div className="article-story-3">
                                A few days later, they called me and invited me to a meeting with the
                                funding committee, where I would present my business plan...
                                <a href="women-empowerment-story-3">Read the story</a>
                            </div>
                        </div>
                        <div className="story-4">
                            <img
                                className="img-story-4"
                                src={require('../images/Arev Society-Women-Empowerment-T_a.webp')}
                                alt="Arev Society-Women Empowerment story in Armenia -T-a "
                            />
                            <p className="date-story-4">Women Empowerment</p>
                            <h3 className="title-story-4">
                                {" "}
                                <a href="women-empowerment-story-4">
                                    I know my way, my destination.
                                </a>
                            </h3>
                            <div className="article-story-4">
                                When we came here in July 2023, she was building new premises for
                                raising chickens, and to tell the truth, at the time...
                                <a href="women-empowerment-story-4">Read the story</a>
                            </div>
                        </div>
                        <div className="story-5">
                            <img
                                className="img-story-5"
                                src={require('../images/Arev Society-Women-Empowerment-Liza.webp')}
                                alt="Arev Society-Women Empowerment story in Armenia-L-a "
                            />
                            <p className="date-story-5">Women Empowerment</p>
                            <h3 className="title-story-5">
                                <a href="women-empowerment-story-5">
                                    A Mother’s Story of Resilience
                                </a>
                            </h3>
                            <div className="article-story-5">
                                Life can often take us down unexpected paths, forcing us to confront
                                unimaginable challenges. In the heart of Armenia, a story...
                                <a href="women-empowerment-story-5">Read the story</a>
                            </div>
                        </div>
                        <div className="story-6">
                            <img
                                className="img-story-6"
                                src={require('../images/Arev Society-Women-Empowerment-N_d.webp')}
                                alt="Arev Society-Women Empowerment story in Armenia-N_d "
                            />
                            <p className="date-story-6">Women Empowerment</p>
                            <h3 className="title-story-6">
                                <a href="women-empowerment-story-6">I need to stay strong</a>
                            </h3>
                            <div className="article-story-6">
                                
                                When news first arrived that Nvard's husband had gone missing during
                                the war, a deep sadness fell upon their household...
                                <a href="women-empowerment-story-6">Read the story</a>
                            </div>
                            
                        </div>
                        <div className="story-7">
                            <img
                                className="img-story-7"
                                src={require('../images/Arev-Society-Women-Empowerment-Story-07.webp')}
                                alt="Women Empowerment in Armenia - 07 - Arev Society "
                            />
                            <p className="date-story-7">Women Empowerment</p>
                            <h3 className="title-story-7">
                                <a href="women-empowerment-story-7">I am the author of my story</a>
                            </h3>
                            <div className="article-story-7">
                                
                            Anna’s peaceful life was paradise until the war took her husband away. 
                            Now, it was up to her to decide whether to give up and condemn her family...
                                <a href="women-empowerment-story-7">Read the story</a>
                            </div>
                            
                        </div>
                        <div className="story-8">
                            <img
                                className="img-story-8"
                                src={require('../images/Arev-Society-Women-Empowerment-Story-08.webp')}
                                alt="Women Empowerment in Armenia - 08 - Arev Society"
                            />
                            <p className="date-story-8">Women Empowerment</p>
                            <h3 className="title-story-8">
                                <a href="women-empowerment-story-8">I do not know the expression I cannot</a>
                            </h3>
                            <div className="article-story-8">
                                
                            The 2020 war in Artsakh has left Astghik’s, among many other vulnerable women’s, 
                            peaceful lives wholly ruptured. During those obscure and disheartening times...
                                <a href="women-empowerment-story-8">Read the story</a>
                            </div>
                            
                        </div>
                        <div className="story-9">
                            <img
                                className="img-story-9"
                                src={require('../images/Arev-Society-Women-Empowerment-Story-09.webp')}
                                alt="Women Empowerment in Armenia - 09 - Arev Society"
                            />
                            <p className="date-story-9">Women Empowerment</p>
                            <h3 className="title-story-9">
                                <a href="women-empowerment-story-9">I couldn't sit by idly and had to do something myself</a>
                            </h3>
                            <div className="article-story-9">
                                
                            Hasmik welcomed us to her mother's house in Sevan, Armenia, where she had arranged her atelier studio...
                                <a href="women-empowerment-story-9">Read the story</a>
                            </div>
                            
                        </div>
                        <div className="story-10">
                            <img
                                className="img-story-10"
                                src={require('../images/Arev-Society-Women-Empowerment-Story-10.webp')}
                                alt="Women Empowerment in Armenia - 10 - Arev Society"
                            />
                            <p className="date-story-10">Women Empowerment</p>
                            <h3 className="title-story-10">
                                <a href="women-empowerment-story-10">Zhanna’s Life Story</a>
                            </h3>
                            <div className="article-story-10">
                                
                            I was the happiest woman in the world when my husband was still by my side. 
                            His mere presence was enough for me to wake up each day with gratitude...
                                <a href="women-empowerment-story-10">Read the story</a>
                            </div>
                            
                        </div>
                        <div className="story-11">
                            <img
                                className="img-story-11"
                                src={require('../images/Arev-Society-Women-Empowerment-Story-11.webp')}
                                alt="Women Empowerment in Armenia - 11 - Arev Society"
                            />
                            <p className="date-story-11">Women Empowerment</p>
                            <h3 className="title-story-11">
                                <a href="women-empowerment-story-11">I had to become someone who would pull us together</a>
                            </h3>
                            <div className="article-story-11">
                                
                            used to be fearless and proud. When my family and I fled from Artsakh to Armenia, 
                            I had lost all hope of a stable, happy life...
                                <a href="women-empowerment-story-11">Read the story</a>
                            </div>
                            
                        </div>
                        <div className="story-12">
                            <img
                                className="img-story-12"
                                src={require('../images/Arev-Society-Women-Empowerment-Story-12.webp')}
                                alt="Women Empowerment in Armenia - 12 - Arev Society"
                            />
                            <p className="date-story-12">Women Empowerment</p>
                            <h3 className="title-story-12">
                                <a href="women-empowerment-story-12">They share our joy and sorrow- From Artsakh to Shgarshik</a>
                            </h3>
                            <div className="article-story-12">
                                
                            We arrived directly from Artsakh (Nagorno-Karabakh) in late September 2023 without anything 
                            because we didn't have enough time to prepare...
                                <a href="women-empowerment-story-12">Read the story</a>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </main>
            </>
        )
    }
}

export default Beneficiaries;

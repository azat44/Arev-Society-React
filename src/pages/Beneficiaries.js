import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { Helmet } from "react-helmet";


class Beneficiaries extends React.Component {
    componentDidMount() {
        document.title = 'Women Empowerment Stories - Arev Society';
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Women Empowerment Stories - Arev Society</title>

                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Read inspiring stories of women empowerment and the positive impact of Arev Society's initiatives. Discover real-life experiences that highlight the strength and resilience of women." />
                    <meta name="keywords" content="women empowerment stories, success stories, inspiring women, Arev Society initiatives" />
                    <meta name="author" content="Arev Society" />
                    <meta name="format-detection" content="telephone=no" />

                    <link rel="canonical" href="https://www.arevsociety.org/women-empowerment-stories"></link>
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
                            <p className="date-story-1">November 08, 2023</p>
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
                            <p className="date-story-2">October 24, 2023</p>
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
                            <p className="date-story-3">November 02, 2023</p>
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
                            <p className="date-story-4">November 02, 2023</p>
                            <h3 className="title-story-6">
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
                            <p className="date-story-5">October 24, 2023</p>
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
                            <p className="date-story-6">October 24, 2023</p>
                            <h3 className="title-story-6">
                                <a href="women-empowerment-story-6">I need to stay strong</a>
                            </h3>
                            <div className="article-story-6">
                                0
                                When news first arrived that Nvard's husband had gone missing during
                                the war, a deep sadness fell upon their household...
                                <a href="women-empowerment-story-6">Read the story</a>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Beneficiaries;

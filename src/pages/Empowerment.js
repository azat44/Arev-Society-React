import React from "react"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

class Empowerment extends React.Component {
    componentDidMount() {
        document.title = 'Women Empowerment - Arev Society';
    }
    render() {
        return (
            <>
                <>
                    <Helmet>
                        <title>Women Empowerment - Arev Society</title>

                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta
                            name="description"
                            content="Explore how Arev Society is empowering women and fostering positive change. Learn about our initiatives and success stories in women empowerment." />
                        <meta
                            name="keywords"
                            content="women empowerment, gender equality, women's rights, Arev Society initiatives" />
                        <meta name="author" content="Arev Society" />
                        <meta name="format-detection" content="telephone=no" />

                        <link rel="canonical" href="https://www.arevsociety.org/women-empowerment"></link>
                    </Helmet>
                    <section
                        id="intro"
                        style={{ backgroundImage: "url(images/avs_background.webp)" }}
                    >
                        <div className="intro-content">
                            <h1>
                                <span>Women</span> empowerment
                            </h1>
                            <div />
                        </div>
                    </section>
                    {/* #intro */}
                    <main>
                        <div className="container-stories-page">
                            <div className="article-story-page">
                                <h1
                                    className="title-story-page"
                                    title="Arev Society Women empowerment in Armenia "
                                >
                                    <strong>Women Empowerment in Armenia</strong>
                                </h1>
                                The Arev Society and the

                                <a style={{ marginLeft: '5px', marginRight: '5px' }} href="https://af4sd.org" target="_blank">

                                    Armenian Fund for Sustainable Development
                                </a>
                                have worked with vulnerable women since 2020 in Armenia when a terrible
                                war shattered families and destinies. <br />
                                <br />
                                Thousands of women became widows or found themselves with disabled
                                husbands who were not in a physical capacity to work anymore.
                                <br />
                                <br />
                                More than 70 % of vulnerable women are unemployed and have only State
                                allowance, which is insufficient for a decent life. They were always
                                dependent on their husbands because of their inadequate knowledge of
                                entrepreneurial skills and ignorance of job market requirements.
                                <br />
                                <br />
                                The absence of relevant skills and professional experience worsens women's
                                vulnerability. Confined to the domestic sphere, relegating their talents
                                and aspirations, they were excluded as candidates for employment and
                                stable income. <br />
                                <br />
                                Almost all the beneficiaries we met were in despair and dreadfully lost
                                with a precarious present and an uncertain future. <br />
                                <br />
                                While implementing humanitarian emergency aid projects in Armenia, we have
                                identified a real need among women from war victim families seeking
                                employment or creating small businesses. Small business creation is one of
                                the best ways to achieve social and economic integration, which has
                                several advantages. <br />
                                <br />
                                This type of activity in the form of micro-business doesn’t require heavy
                                investment, and running a small business with simplified administrative
                                procedures and almost inexistent taxation is an opportunity to succeed.{" "}
                                <br />
                                <br />
                                Time management flexibility suits our beneficiaries, many of whom are not
                                able to become salaried employees because their husbands are severely
                                disabled and need permanent assistance, or they have small children, and
                                most jobs require incompatible working hours.
                                <br />
                                <br />
                                For these reasons, in 2022, with the support of the Fisher family,
                                together with the
                                <a style={{ marginLeft: '5px', marginRight: '5px' }} href="https://af4sd.org" target="_blank" title="Opens AF4SD webpage">
                                    Armenian Fund for Sustainable Development
                                </a>
                                we launched a women's empowerment project and helped several women from
                                war victim families to become self-sufficient. <br />
                                <br />
                                <p className="back-link">
                                    <a href="women-empowerment-stories">
                                        Back to Women empowerment stories
                                    </a>
                                </p>
                            </div>
                        </div>
                    </main>

                </>
            </>
        )
    }
}

export default Empowerment
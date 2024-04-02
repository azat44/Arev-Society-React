import React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet";

class Refugee extends React.Component {
    componentDidMount() {
        document.title = 'Refugee Women Empowerment - Arev Society';
    }
    render() {
        return (
            <>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta
                        name="description"
                        content="Arev Society partners with the Armenian Fund for Sustainable Development on an empowerment project for women refugees from Artsakh, providing resources and vocational training." />
                    <meta
                        name="keywords"
                        content="refugee women empowerment, Artsakh refugees, vocational training, Armenian charity, Arev Society, nonprofit help" />
                    <meta name="robots" content="index, follow" />
                    <meta name="revisit-after" content="7 days" />
                    <meta name="author" content="Arev Society" />
                    <meta
                        property="og:title"
                        content="Refugee Women Empowerment - Arev Society" />
                    <meta
                        property="og:description"
                        content="Arev Society partners with the Armenian Fund for Sustainable Development on an empowerment project for women refugees from Artsakh, providing resources and vocational training." />

                    <meta name="format-detection" content="telephone=no" />

                    <link rel="canonical" href="https://www.arevsociety.org/refugee-women-empowerment"></link>
                </Helmet>
                <section
                    id="intro"
                    style={{ backgroundImage: "url(images/avs_background.webp)" }}
                    alt="Arev Society background">
                    <div className="intro-content">
                        <h1>
                            <span>Refugee</span> women
                        </h1>
                        <div />
                    </div>
                </section>
                <main>
                    <div className="container-stories-page">
                        <div className="article-story-page">
                            <h1
                                className="title-story-page"
                                title="Supporting Women Refugees in Armenia "
                            >
                                <strong>Refugee Women Empowerment</strong>
                            </h1>
                            The Arev Society is proud to announce our new collaboration in 2024 with
                            the
                            <a href="https://af4sd.org" target="_blank" style={{ marginRight: '5px', marginLeft: '5px' }}>
                                Armenian Fund for Sustainable Development (AF4SD)
                            </a>
                            on an impactful new project supporting refugee women from Artsakh.
                            <br />
                            <br />
                            Beginning <strong>February 1st, 2024,</strong> we will provide
                            management and reporting assistance to the AF4SD as they fund
                            income-generating agricultural projects for vulnerable refugee women
                            forcibly displaced by recent conflicts. <br />
                            <br />
                            To launch this exciting initiative, the Arev Society and AF4SD are
                            jointly hosting a two-day training workshop on February 1st and 2nd
                            focused on building the entrepreneurial skills of women participating in
                            the program. During intensive two-day sessions, future beneficiaries
                            will develop business plans, receive coaching on accounting basics, and
                            gain the knowledge necessary to transform their ideas into sustainable
                            livelihoods. <br />
                            <br />
                            After the workshop, trainees will submit their business plans to the
                            AF4SD to be considered for funding. A joint Funding Committee formed by
                            the AF4SD Board and the Arev Society Director will select the most
                            viable proposals to support with grants through in-kind contributions.
                            <br />
                            <br />
                            By combining training, funding, and mentorship, this program aims to
                            empower refugee women to achieve financial stability and independence
                            through entrepreneurship. All projects will be in the agricultural
                            sector, and before funding, an assessment will be carried out by the
                            project team at the business location. <br />
                            <br />
                            Alongside income-generating activities, some of the beneficiaries will
                            be able to request funds for their vocational training, which could not
                            be limited to the agricultural sector. <br />
                            <br />
                            To obtain professional training funding, they need to demonstrate how
                            this training, once completed, will help them be more competitive in the
                            job market and why they need these skills to achieve financial
                            stability. <br />
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

        )
    }
}

export default Refugee
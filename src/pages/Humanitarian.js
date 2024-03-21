import React from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

class Humanitarian extends React.Component {
    componentDidMount() {
        document.title = 'Humanitarian Emergency - Arev Society';
    }
    render() {


        return (


            <>
                <>
                    <Helmet>

                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta
                            name="description"
                            content="Learn about Arev Society's response to humanitarian emergencies. Discover our efforts in providing aid, support, and relief during times of crisis." />
                        <meta
                            name="keywords"
                            content="humanitarian emergency, crisis response, aid and relief, Arev Society initiatives" />
                        <meta name="author" content="Arev Society" />
                        <meta name="format-detection" content="telephone=no" />

                        <link rel="canonical" href="https://www.arevsociety.org/humanitarian-emergency" />

                    </Helmet>
                    <section
                        id="intro"
                        style={{ backgroundImage: "url(images/avs_background.webp)" }}
                        alt="Arev Society background"
                    >
                        <div className="intro-content">
                            <h1>
                                <span>Humanitarian</span> emergency
                            </h1>
                            <div />
                        </div>
                    </section>
                    <main>
                        <div className="container-stories-page">
                            <div className="article-story-page">
                                <h1
                                    className="title-story-page"
                                    title="Arev Society Humnitraian crisis in Armenia "
                                >
                                    <strong>Armenia's Humanitarian Crisis</strong>
                                </h1>
                                In the aftermath of the 2020 war between Armenia and Azerbaijan, an
                                influx of displaced people overwhelmed Armenia's resources and
                                infrastructure, creating a severe humanitarian emergency. <br />
                                <br />
                                Managing a humanitarian emergency project to distribute food and
                                essential items requires a well-organized and strategic approach.
                                <br />
                                <br />
                                The Arev Society hurried to support the
                                <a href="https://af4sd.org" target="_blank">
                                    Armenian Fund for Sustainable Development (AF4SD)
                                </a>
                                to conduct a thorough needs assessment to understand the specific needs
                                of the affected population.
                                <br />
                                <br />
                                We managed to gather data on the number of people, their locations, and
                                their most urgent requirements in some of the districts of Yerevan and
                                neighboring communities. <br />
                                <br />
                                We established effective coordination mechanisms with other humanitarian
                                organizations and local authorities to avoid duplication of efforts and
                                ensure a comprehensive response. We put in place a registration system
                                to verify and record the identities of beneficiaries.
                                <br />
                                <br />
                                This helped maintain accountability and ensured that aid reached those
                                in need with dignity and efficiency. Together with our partners, we
                                distributed 1000 people monthly first-aid packages in one year. <br />
                                <br />
                                <strong>Ongoing Crisis for Displaced Armenians</strong>
                                <br />
                                <br />
                                The situation remains dire for over 100,000 Armenians displaced from
                                Artsakh (Nagorno-Karabakh) in September 2023. Fleeing violence,
                                persecution, and threats of ethnic cleansing at the hands of Azerbaijani
                                forces, these refugees urgently left their homes to safeguard their
                                lives. <br />
                                <br />
                                Despite initial humanitarian aid and support from the Armenian
                                government, funding and assistance are set to end on March 2024. Without
                                continued income and resources, sustainable settlement for these
                                displaced people will be incredibly difficult. <br />
                                <br />
                                Compounding these challenges is the trauma of having their lives
                                uprooted so violently. Many refugees have been separated from family
                                members, seen violence first-hand, and lost their homes and livelihoods.
                                This turmoil leaves emotional scars and practical hurdles for creating
                                stability. <br />
                                <br />
                                Our organization partnered with the
                                <a href="https://af4sd.org" target="_blank">
                                    AF4SD{" "}
                                </a>{" "}
                                to empower the displaced and mitigate this humanitarian crisis. As in
                                2021, together, we intend to launch vocational training and financial
                                support for small business creation for displaced women to help them
                                gain skills, resources, and autonomy to exist independently. These
                                programs aim to be part of the solution - offering paths for sustainable
                                resettlement.
                                <br />
                                <br />
                                The road ahead is long and difficult for these refugees and aid
                                organizations like ours. Additional funding, volunteers, resources, and
                                public awareness are still desperately needed. <br />
                                <br />
                                Make an impact, support us! <br />
                                <br />
                                <p className="back-link">
                                    <a href="women-empowerment"> Back to Women empowerment</a>
                                </p>
                            </div>
                        </div>
                    </main>
                </>

            </>
        )
    }
}

export default Humanitarian
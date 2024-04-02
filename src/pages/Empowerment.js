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
                                    title="Supporting Women Refugees in Armenia "
                                >
                                    <strong>Refugee Women Empowerment</strong>
                                </h1>
                                The Arev Society is proud to announce our new collaboration in 2024 with the
                                <a href="https://af4sd.org" style={{ marginRight: '5px', marginLeft: '5px' }}>
                                    Armenian Fund for Sustainable Development (AF4SD)
                                </a>
                                on an impactful new project supporting refugee women from Artsakh.
                                <br />
                                <br />
                                Beginning <strong>February 1st, 2024,</strong> we will provide management
                                and reporting assistance to the AF4SD as they fund income-generating
                                agricultural projects for vulnerable refugee women forcibly displaced by
                                recent conflicts. <br />
                                <br />
                                To launch this exciting initiative, the Arev Society and the AF4SD jointly
                                hosted training workshops in February and March 2024. The workshops focused
                                on building the entrepreneurial skills of women participating in the
                                program. During intensive two-day sessions, future beneficiaries developed
                                business plans, received coaching on accounting basics and gained the
                                knowledge necessary to transform their ideas into sustainable livelihoods.
                                <br />
                                <br />
                                After the workshop, trainees will submit their business plans to the AF4SD
                                to be considered for funding. A joint Funding Committee formed by the AF4SD
                                Board and the Arev Society Director will select the most viable proposals to
                                support with grants through in-kind contributions.
                                <br />
                                <br />
                                By combining training, funding, and mentorship, this program aims to empower
                                refugee women to achieve financial stability and independence through
                                entrepreneurship. All projects will be in the agricultural sector, and
                                before funding, an assessment will be carried out by the project team at the
                                business location. <br />
                                <br />
                                Alongside income-generating activities, some of the beneficiaries will be
                                able to request funds for their vocational training, which could not be
                                limited to the agricultural sector. <br />
                                <br />
                                To obtain professional training funding, they need to demonstrate how this
                                training, once completed, will help them be more competitive in the job
                                market and why they need these skills to achieve financial stability. <br />
                                <br />
                                <p>
                                    <strong>
                                        Why is small business creation the best way to economically empower
                                        refugee women?
                                    </strong>
                                    <br />
                                    <br />
                                    <strong>Economic aspects</strong>
                                    <br />
                                    <br />
                                    The creation of small businesses empowers not only vulnerable women but
                                    also the community. Establishing workplaces and generating strong
                                    relationships between multiple economic agents, such as local employees,
                                    suppliers, and service providers, actively stimulates the local economy.{" "}
                                    <br />
                                    <br />
                                    In the grand scheme, their input is pivotal in decreasing poverty rates,
                                    creating a win-win situation for all involved. Setting up a
                                    micro-enterprise is not the only way to achieve socio-economic
                                    integration. Still, it is one of the most suitable means for refugees,
                                    especially when it is a micro-business activity, because it doesn’t
                                    require complex administrative procedures, and taxation is almost
                                    non-existent. Another reason to opt for small business creation is the
                                    reduced initial investment required, even with limited resources. <br />
                                    <br />
                                    However, for refugee women, this mission is challenging to accomplish. The
                                    existing micro-credit schemes and unsecured business loans often have
                                    high-interest rates, which can cripple the business from the outset.{" "}
                                    <br />
                                    <br />
                                    <strong>Social aspects</strong> <br />
                                    <br />
                                    Becoming an entrepreneur and actively engaging in a work environment helps
                                    refugee women escape stigma and prejudice and obtain a more respectable
                                    social position. <br />
                                    <br />
                                    Moreover, it gives them access to the entrepreneurial community, enlarging
                                    their social network and providing a valuable experience exchange. Thanks
                                    to income-generating activities, refugee women reduce their dependence on
                                    social assistance and ensure better access to education, health care,
                                    better nutrition, and decent housing.
                                    <br />
                                    <br />
                                    <strong>Psychological aspects</strong>
                                    <br />
                                    <br />
                                    One of the most vital aspects of supporting small business creation is
                                    undoubtedly its psychological impact. Aiding women in creating their
                                    businesses is the best way to encourage them to heal from all the horrible
                                    events they have lived through. It helps ease the pain of loss by
                                    assisting them in doing the things they love and enjoy, making them feel
                                    part of a bigger, brighter future, which they actively contribute to, and
                                    letting them feel as valued and important as they are. Moreover, economic
                                    well-being grants them independence, dignity, and pride in their
                                    achievements. They thrive and stand bravely on their own two feet. These
                                    women can even change people around them by serving as an immaculate
                                    example of resilience and courage. <br />
                                    <br />
                                    <strong>Personal aspects </strong>
                                    <br />
                                    <br />
                                    Time and resource management flexibility is very well suited to refugees
                                    with family commitments or particular constraints. For example, we have
                                    many female beneficiaries of our similar projects who will not be able to
                                    become salaried employees because their husbands are severely disabled and
                                    need permanent assistance, or they have small children, and most jobs
                                    require incompatible working hours. <br />
                                    <br />
                                    The Refugee Economic Empowerment project provides in-kind contribution
                                    grants to finance the acquisition of essential equipment and livestock,
                                    enabling these women to launch and sustain their entrepreneurial ventures.
                                </p>
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
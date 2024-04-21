import React, { useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'; // Import de l'icône de validation

class Home extends React.Component {


    render() {


        return (

            <>
                <section
                    id="intro"
                    alt="Arev Society background">
                    <div className="intro-content">
                        <h1>
                            Make<span> an impact!</span>
                            <br />
                        </h1>
                        <div />
                    </div>
                </section>
                {/* #intro */}
                <main id="main">
                    {/*==========================
About Section
============================*/}
                    <section id="about" className="wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 about-img">
                                    <img
                                        className='landing-page-img'
                                        src={require('../images/Arev_Society_Charity_not-for-profit_red.webp')}
                                        alt="Arev Soiciety landing picture"
                                    />
                                </div>
                                <div className="col-lg-6 content">
                                    <h1 className="our-mission-h1">OUR MISSION</h1>
                                    <h3>
                                        <strong>The Arev Society </strong> fosters and encourages
                                        philanthropy and solidarity of American people in support of
                                        vulnerable Armenians worldwide by supporting and financing
                                        initiatives for
                                    </h3>
                                    <ul>
                                        <li>
                                            <FaCheckCircle style={{ color: 'orange', fontSize: '18px', marginRight: '5px', marginBottom: '-3px' }} />

                                            promotion of
                                            social and public welfare,
                                        </li>
                                        <li>
                                            <FaCheckCircle style={{ color: 'orange', fontSize: '18px', marginRight: '5px', marginBottom: '-3px' }} />

                                            fighting social,
                                            economic, and digital inequalities,
                                        </li>
                                        <li>
                                            <FaCheckCircle style={{ color: 'orange', fontSize: '18px', marginRight: '5px', marginBottom: '-3px' }} />

                                            empowerment of
                                            vulnerable women, children, elderly, and other vulnerable layers
                                            of society,
                                        </li>
                                        <li>
                                            <FaCheckCircle style={{ color: 'orange', fontSize: '18px', marginRight: '5px', marginBottom: '-3px' }} />


                                            alleviation of
                                            poverty by reinforcing capacities and creating income-generating
                                            activities.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* #about */}
                    {/*==========================
Our Portfolio Section
============================*/}
                    <section id="portfolio" className="wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
                        <div className="container">
                            <div className="section-header">
                                <h2>Women Empowerment</h2>
                                <p>
                                    The
                                    <strong> Arev Society </strong> and the{" "}
                                    <a
                                        href="https://www.af4sd.org/en/vulnerable-people-armenia-armenian-fund-for-sustainable-development/"
                                        target="_blank "
                                        title="Opens the AF4SD page"
                                    >
                                        {" "}
                                        Armenian Fund for Sustainable Development (AF4SD)
                                    </a>
                                    have worked with vulnerable women since 2020 in Armenia when a
                                    terrible war shattered families and destinies. Thousands of women
                                    became widows or found themselves with disabled husbands who were
                                    not in a physical capacity to work anymore. In 2023 , with the
                                    support of the <strong> Fisher family</strong>, we launched a
                                    women's empowerment project and helped several women from war victim
                                    families to become{" "}
                                    <a href="women-empowerment">self-sufficient.</a>
                                </p>
                                <p>
                                    {" "}
                                    A new collaboration in <strong>2024</strong> with the Armenian Fund
                                    for Sustainable Development (AF4SD) on an impactful new project
                                    supporting{" "}
                                    <a href="refugee-women-empowerment">
                                        refugee women from Artsakh has been launched.
                                    </a>{" "}
                                </p>
                            </div>
                        </div>
                    </section>
                    {/*==========================
Services Section
============================*/}
                    <section id="stories" data-aos="fade-up" data-aos-duration="600">
                        <div className="container">
                            <div className="section-header" >
                                <h2>Humanitarian emergency</h2>
                                <p>
                                    In the aftermath of the devastating 2020 war in the South Caucasus
                                    region, Armenia faced a humanitarian crisis with a significant
                                    number of forcibly displaced people seeking refuge and assistance.
                                    The
                                    <strong> Arev Society </strong> rallied with the
                                    <a
                                        href="https://www.af4sd.org/en/vulnerable-people-armenia-armenian-fund-for-sustainable-development/"
                                        target="_blank "
                                        title="Opens the AF4SD page"
                                        style={{ marginRight: '5px' }}
                                    >
                                        {" "}
                                        Armenian Fund for Sustainable Development
                                    </a>
                                    to provide critical first aid assistance to the forcibly displaced
                                    Armenian people.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="600">
                                    <div className="box wow fadeInLeft" >
                                        <h4 className="title">
                                            <a href="">Humanitarian Crisis</a>
                                        </h4>
                                        <p className="description">
                                            The
                                            <strong> Armenian people</strong>'s defense of Artsakh lasted
                                            over thirty years and cost tens of thousands of lives. The
                                            horrific war of 2020 and the three-year threat of permanent
                                            ethnic cleansing forced Armenians to flee their homeland. Over
                                            200,000 found refuge in Armenia, creating a humanitarian
                                            emergency.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="box wow fadeInRight">
                                        <h4 className="title">
                                            <a href="">Our assistance</a>
                                        </h4>
                                        <p className="description">
                                            The
                                            <strong> American people </strong>, along with other friendly
                                            nations of Armenia, mobilized to ease suffering and resolve the
                                            plight of forcibly displaced people. We supported our local
                                            partners in Armenia to make the first needs assessment and
                                            organize the first aid distribution.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                        <h4 className="title">
                                            <a href="">Management support </a>
                                        </h4>
                                        <p className="description">
                                            The
                                            <strong> Arev Society </strong> played a critical role in
                                            providing project management expertise during challenging times
                                            for humanitarian aid projects, ensuring smooth execution, clear
                                            reporting, and improving lives. Thanks to this intervention,
                                            hundreds of forcibly displaced families received the first
                                            assistance they desperately needed.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                        <h4 className="title">
                                            <a href="">Tailored response</a>
                                        </h4>
                                        <p className="description">
                                            Understanding the unique struggles of internally displaced
                                            people goes beyond theory. The <strong>Arev Society</strong>{" "}
                                            proves this with its proactive approach, exemplified by
                                            identification of critical food insecurity issues. We recognize
                                            that these challenges require not just aid, but custom-designed
                                            and comprehensive solutions tailored to each specific situation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* #services */}
                    {/*==========================
Women Empowerment
============================*/}
                    <section id="women" data-aos="fade-up" data-aos-duration="600">
                        <div className="container">
                            <div className="section-header">
                                <h2>Our Partners</h2>
                                <p>
                                    Behind every successful project are the stories of lives
                                    transformed, and these stories are co-authored by our partners and
                                    donors. We are thankfull to the <strong> Fisher family </strong>for
                                    their generous support and the
                                    <a
                                        href="https://af4sd.org"
                                        target="_blank"
                                        title="Opens AF4SD webpage"
                                        style={{ marginRight: '5px', marginLeft: '5px' }}
                                    >
                                        Armenian Fund for Sustainable Development
                                    </a>
                                    for implementing our life-changing projects.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="box wow fadeInLeft">
                                        <h4 className="title">
                                            <a href="">Context</a>
                                        </h4>
                                        <p className="description">
                                            While implementing humanitarian emergency aid projects in
                                            Armenia, we have identified a real need among women from war
                                            victim families seeking employment or creating small businesses.
                                            More than 70 % of vulnerable women are unemployed and have only
                                            State allowance, which is insufficient for a decent life. They
                                            were always dependent on their husbands because of their
                                            insufficient knowledge of entrepreneurial skills and ignorance
                                            of job market requirements.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="box wow fadeInRight">
                                        <h4 className="title">
                                            <a href="">Vulnerability </a>
                                        </h4>
                                        <p className="description">
                                            The absence of relevant skills and education worsen women's
                                            vulnerability. Confined to the domestic sphere, relegating their
                                            talents and aspirations, they were excluded as candidates for
                                            employment and stable income. For this reason, support from
                                            nonprofit organizations in building their financial independence
                                            could play a pivotal role. Achieving this self-sufficiency
                                            through economic empowerment becomes easy when you are supported
                                            and motivated.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                        <h4 className="title">
                                            <a href="">Our objectives</a>
                                        </h4>
                                        <p className="description">
                                            Financial independence for a woman is not just about earning
                                            money; it’s about gaining autonomy, dignity, and the capacity to
                                            support herself financially without relying on others for her
                                            personal and her family’s basic needs and well-being. It allows
                                            them to make informed decisions that benefit themselves and
                                            their families, breaking the cycle of poverty.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                        <h4 className="title">
                                            <a href="">Our support</a>
                                        </h4>
                                        <p className="description">
                                            To find the right actors, reinforce professional skills, and
                                            understand how small businesses should be run and managed, we
                                            equipped these women with the tools necessary to launch
                                            income-generating activities successfully. We created a
                                            supportive environment through targeted interventions that built
                                            self-confidence and fostered resilience and belief in the
                                            future.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>




        )
    }
}

export default Home
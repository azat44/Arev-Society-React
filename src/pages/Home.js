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
                    <section id="our-mission" className="wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 about-img">
                                    <img
                                        className='landing-page-img'
                                        src={require('../images/Arev_Society_Charity_not-for-profit_red.webp')}
                                        alt="Arev Society landing picture"
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
                                    <p>
                                        We strive to reduce vulnerable people's dependence on social assistance and help them avoid social exclusion. Self-sufficiency is not just a matter of finance; it also means access to quality education, better healthcare, and a decent standard of living.
                                    </p>
                                    <p>
                                        Overall, the Arev Society's initiatives aim to create a more equitable and inclusive society by supporting vulnerable people's social, economic, and digital empowerment.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* #about */}
                    {/*==========================
Our Portfolio Section
============================*/}
                    <section id="our-partners" className="wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
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
                                        style={{ marginRight: '5px' }}                                    >
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
                                <h2>WHY FOCUS ON WOMEN?</h2>
                                <p>
                                In an era where progress and equality are often touted as hallmarks of modern
                society, we find ourselves confronting a stark reality: the persistent economic
                marginalization of women. While working with <strong><a href="https://www.arevsociety.org/women-empowerment" target="_blank" title="Opens the women empowerment page">war victims </a></strong>
                and <strong><a href="https://www.arevsociety.org/refugee-women-empowerment" target="_blank" title="Opens the refugee women empowerment page">refugee families</a></strong>,
                 we are compelled to confront uncomfortable truths about women affected by war and forced
                displacement, whose struggles are magnified by the loss of support systems and
                access to essential resources.
            </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="600">
                                    <div className="box wow fadeInLeft" >
                                        <h4 className="title">
                                            <a href="">Underrepresentation of Women</a>
                                        </h4>
                                        <p className="section-header">
                                        For decades, women have been significantly underrepresented and undervalued
                                        across nearly all areas of economic activity. This pervasive  issue has deep roots in
                                        societal norms, cultural  expectations, and systemic  barriers that have long hindered
                                        women's full participation in the workforce and  economic decision-making processes.
                                        Despite  progress in recent years, the 
                                        <strong>
                                            <a href="https://www.unwomen.org/en/what-we-do/economic-empowerment" target="_blank" title="Opens the UN Women economic empowerment page"> gender gap in economic participation and opportunity </a>
                                        </strong> 
                                        remains a global challenge, with  women often facing limited access to
                                        employment and leadership positions.
                                    </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="box wow fadeInRight">
                                        <h4 className="title">
                                            <a href="">War Victims and Refugee Women</a>
                                        </h4>
                                        <p className="section-header">
                                        The economic fragility of women becomes  even more pronounced and complex when
                                        considering those affected  by war or forced displacement. 
                                         
                                        <strong>
                                            <a href="https://www.af4sd.org/en/blog-armenia-armenian-fund-for-sustainable-development-women-empowerment-refugee-women-empowerment/" target="_blank" title="Opens the Armenia Fund for Sustainable Development page"> Refugee women </a>
                                        </strong> 
                                        and those from war-torn regions  face a unique set of challenges that compound their economic
                                        vulnerability.
                                        Displacement often severs connections to family, community, and professional
                                        networks, leaving  women without  crucial support. Women may struggle to access
                                        basic necessities, education, and employment opportunities.
                                    </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                        <h4 className="title">
                                            <a href="">Digital and Financial Illiteracy</a>
                                        </h4>
                                        <p className="section-header">
                                        For women who  have lost their husbands or  whose spouses have become disabled
                                        due to war, the path to economic stability is fraught  with obstacles. Among the most
                                        significant barriers are the  lack of digital 
                                        and financial literacy. In an  increasingly digitized world,  these skills are
                                        not just advantageous but  essential for economic  participation and empowerment.
                                        Digital literacy enables access to  information, online job markets, and remote work
                                        opportunities. On the other hand, financial  literacy is crucial for managing limited
                                        resources,  understanding financial products, and  making informed economic decisions. 
                                        For war-affected women, these  skills can mean the difference  between economic survival and poverty.
                                    </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                        <h4 className="title">
                                            <a href="">Lack of finances and skills</a>
                                        </h4>
                                        <p className="description">
                                        Limited financial resources and  skills hinder  women's economic progress. State and
                                        private empowerment   programs are  often out of reach due  to co-funding
                                        requirements. High-interest  loans from banks and credit  institutions risk worsening
                                        their financial situation.
                                        Many women need  vocational and professional  training for self-sufficiency but face
                                        barriers like high  costs and lack of awareness.  Quality   training  programs often have
                                        fees these women  cannot afford. Information about available  programs may not reach
                                        them,  especially if they are   digitally isolated. This  combination of financial
                                        constraints and limited access to skill  development opportunities creates a significant
                                        obstacle  to economic empowerment  for these women.
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
                                <h2>HOW WE MAKE A DIFFERENCE</h2>
                                <p className="description">
                                Since launching the women empowerment program in 2020, we have studied over a
                                hundred cases of women&#39;s economic empowerment so far. To gather real-world data,
                                we visited and met each beneficiary in person. Our experience demonstrates that a
                                comprehensive approach combining in-kind contributions for business creation,
                                targeted vocational training, and continuous business management coaching is an
                                effective strategy for enhancing employment opportunities and increasing income
                                among women from war victim or refugee families.
                            </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="box wow fadeInLeft">
                                        <h4 className="title">
                                            <a href="">In-Kind Contribution Support  </a>
                                        </h4>
                                        <p className="description">
                                        We have always avoided cash inputs to support our beneficiaries, eliminating, thus,
                                        any risk of support misuse. One of the cornerstones of our approach is providing in-
                                        kind contributions that support business creation. These contributions can take
                                        various forms, including equipment, supplies, livestock, and resources necessary for
                                        starting and running an  income-generating activity. This support  is crucial for these
                                        vulnerable women who  lack access to capital or credit, allowing them to focus on
                                        building sustainable businesses that can provide for their  families.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="box wow fadeInRight">
                                        <h4 className="title">
                                            <a href="">Targeted Vocational Training</a>
                                        </h4>
                                        <p className="description">
                                        In conjunction with in-kind contributions, we emphasize the importance of targeted
                                        vocational training. The proposed training is tailored to meet the local market&#39;s
                                        specific needs while harnessing each beneficiary&#39;s unique strengths and potential. By
                                        equipping women with relevant skills, we enhance their employability and enable
                                        them to manage their income-generating activities better. The training programs are

                                        designed to be practical and hands-on, ensuring that participants can apply what they
                                        learn directly to their business ventures or job opportunities.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                        <h4 className="title">
                                            <a href="">Continuous Mentoring</a>
                                        </h4>
                                        <p className="description">
                                        To ensure long-term success, we provide continuous business management coaching.
                                        This ongoing support helps women navigate the business&#39;s challenges, from financial
                                        management to marketing strategies. We work closely with our beneficiaries, offering
                                        personalized guidance and resources to help them overcome obstacles and seize
                                        opportunities. Our presence ensures the sustainability of income-generating activities
                                        and guarantees a stable monthly income for beneficiaries, enabling them to become
                                        self-sufficient and no longer need assistance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                        <h4 className="title">
                                            <a href="">Gratitude to Our Donors</a>
                                        </h4>
                                        <p className="description">
                                        We are deeply grateful to our donors for their generous support in implementing our
                                        life-changing initiatives. Their contributions make it possible for us to provide the
                                        necessary resources, training, and coaching to empower women from war victim or
                                        refugee families. Without their commitment and belief in our mission, we would not
                                        be able to create impactful programs and expand our initiatives. <strong>YOUR SUPPORT </strong>
                                        improves the lives of the communities <strong>WE SERVE</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main >
            </>




        )
    }
}

export default Home
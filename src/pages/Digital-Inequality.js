import React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet";
class DigitalInequality extends React.Component {
    componentDidMount() {
        document.title = 'Digital Inequality - Arev Society';
    }
    render() {
        return (
            <>
                <>

                    <Helmet>


                        <link rel="canonical" href="https://www.arevsociety.org/digital-inequality"></link>
                    </Helmet>
                    <section
                        id="intro"
                        style={{ backgroundImage: "url(images/avs_background.webp)" }}
                    >
                        <div className="intro-content">
                            <h1>
                                <span>Digital</span> Inequality
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
                                    <strong>Digital inequality as a cause of human poverty</strong>
                                </h1>
                                by the Arev Society March 18, 2024
                                <br />
                                <br />
                                "According to the classic definition, “Digital literacy is an individual’s ability to find, evaluate,
                                and communicate information using typing or digital media platforms. It combines technical and
                                cognitive abilities to use information and communication technologies to create, evaluate, and share information”.
                                <br />

                                <br />However, it is crucial to take into account that digital literacy does not solely imply the ability to navigate
                                the web but also the capability to conduct oneself online, protect one’s personal information, search and filter
                                through the millions of search results that pop up on the screen in milliseconds, and find the most credible resources
                                amongst the black pit of misinformation
                                <br />


                                <br />
                                According to <a href="https://nces.ed.gov/pubs2018/2018161.pdf">National Center for Education statistics</a> , about 16% of US adults
                                are not digitally literate, compared to 23% of adults internationally.
                                <br />

                                <br />
                                "And so what?”- you might think.
                                <br />
                                <br />
                                Firstly, it is impossible to omit all the benefits of well-coordinated internet usage,
                                among which is the ability to learn quite literally anything.  <br />
                                <br />
                                This essential aspect directly depends on an individual’s level of digital literacy, as the web is full of
                                vocational training and courses suitable for all learners.<br />
                                <br />
                                However, for someone who has significant trouble navigating the internet and executing the most trivial tasks,
                                accessing the opportunities above is just about unachievable.<br />
                                <br />
                                <p>
                                    Secondly, the most evident benefit of efficient and literate internet usage is the quasi-limitless work
                                    opportunities that stay out of reach for digitally illiterate individuals.
                                    <br />
                                    <br />
                                    In recent years, the internet has undoubtedly become a perfect platform for finding and executing work.
                                    <br />
                                    <br />
                                    During the years of the world pandemic and due to constant migrations, numerous
                                    people have transitioned to working online.
                                    <br />
                                    <br />
                                    Due to the digital divide, numerous individuals are deprived of the chance to provide a stable income for their
                                    families and consequently <br />break the cycle of poverty despite
                                    meeting the requirements for a specific job or having the appropriate education.<br />
                                    <br />
                                    According to the <a href="https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html">
                                        Consumer Digital Index</a>, in 2023,
                                    18% of the UK workforce lacked the essential digital skills
                                    needed for the workplace.
                                    <br />
                                    <br />

                                    In contrast, around 40% of unemployed people need to gain basic digital skills.
                                    <br />
                                    To understand the phenomenon, let’s move on to a concrete example: vulnerable women.

                                    The Arev Society and the Armenian Fund for Sustainable Development have been implementing the Vulnerable Women Empowerment programs since 2020.
                                    <br />

                                    These programs provide funding for income-generating activities and vocational,
                                    training to vulnerable women whose husbands were killed or disabled during the war.
                                    <br />
                                    <br />
                                    Since 2024, this program has been extended to refugee women, too.
                                    <br />
                                    <br />

                                    While working with our beneficiaries, we identified several correlations between poverty
                                    and digital illiteracy.
                                    <br />
                                    Despite <a href="https://datareportal.com/reports/digital-2023-armenia">the total number of internet users in Armenia </a>
                                    amounting
                                    to 2.18 million, constituting 78.6% of the 2.78 million total
                                    population, the grand majority, notably 66.6%,
                                    are social media users (e.g., 1.4 million Facebook and 1.01 million Instagram users).
                                    <br />
                                    <br />Similarly, although most vulnerable women are active Internet and social media users, only some can correctly fill out
                                    electronic forms, write their
                                    resumes, or find the necessary information to prepare their small business plans.
                                    <br />
                                    <br />
                                    This demonstrates that the absence of computers, mobile devices, or access to the Internet is only one reason for their poverty.
                                    So, digital inequalities stem not only from the absence of devices but also from the absence of skills for using the Internet
                                    and computers correctly.
                                    <br />
                                    <br />
                                    As mentioned, people prefer to spend their time online for leisure, as they are not interested in or need to learn about the
                                    importance of basic digital skills.
                                    <br />
                                    <br />
                                    This phenomenon manifests in refugee women’s inability to apply for vocational training or even submit their business projects,
                                    making it all the more complicated
                                    to establish decent communication between management and administrative systems.
                                    <br />
                                    <br />
                                    Moreover, many potential applicants are often discouraged and refuse to apply as soon as they encounter a seemingly complex
                                    application via email or Google Forms.
                                    <br />
                                    <br />
                                    Indeed, numerous courses and lessons are dedicated to tech-related fields in Armenia. However, their distribution is dubious.
                                    They are hardly specialized and not precisely “user-friendly”; thus, the input efforts barely contribute to advancing digital
                                    literacy among vulnerable social groups.
                                    <br />
                                    <br />
                                    The poor coordination of the offered resources leads to the maldistribution of knowledge, as the information about them is
                                    communicated
                                    through portals that are outside the reach of the targeted groups.
                                    <br />
                                    <br />
                                    Considering the significance of allowing vulnerable social groups to thrive, the Arev Society, faithful to its mission,
                                    deems it necessary to organize specialized courses for vulnerable people, helping them acquire essential digital skills or
                                    upskill their performance so they do not miss their opportunities to learn, find a job, or create a small business; after all,
                                    to make informed decisions.
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

export default DigitalInequality
import React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet";
class DigitalLiteracy extends React.Component {
    componentDidMount() {
        document.title = 'Digital Literacy - Arev Society';
    }
    render() {
        return (
            <>
                <>

                    <Helmet>


                        <link rel="canonical" href="https://www.arevsociety.org/digital-literacy"></link>
                    </Helmet>
                    <section
                        id="intro"
                        style={{ backgroundImage: "url(images/avs_background.webp)" }}
                    >
                        <div className="intro-content">
                            <h1>
                                <span>Digital</span> Literacy
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
                                    <strong>DIGITAL Literacy IS ONE OF THE LEADING CAUSES OF POVERTY</strong>
                                </h1>
                                by the Arev Society March 18, 2024
                                <br />
                                <br />
                                According to classical definition “Digital literacy is an individual's ability to find, evaluate, and
                                communicate information using typing or digital media platforms.
                                It combines technical and cognitive abilities to use information and communication
                                technologies to create, evaluate, and share information.”
                                <br />

                                <br />However, it is crucial to take into account the fact that digital literacy does not
                                solely imply the ability to  navigate through the web but also the capability
                                to conduct oneself online, protecting one's personal information, as well as the ability to
                                and filter through the millions of search results that pop up on the screen in
                                milliseconds and find the most credible resources amongst the black pit of misinformation…
                                and maybe not cite Wikipedia.
                                <br />


                                <br />
                                On a side note, when speaking about an individual’s activity on the net,
                                we must address the fact that without thorough consideration and vigilance,
                                we can instantly become vulnerable to all possible dangers, as our information is being immediately
                                collected, processed, and stored, ipso facto making us subject to all kinds of cyber-attacks.
                                <br />

                                <br />
                                According to the statistics published by <a href="https://datareportal.com/reports/digital-2023-armenia">Datareportal</a>  as
                                of January 2023,
                                the total number of
                                internet users in Armenia amounts to 2.18 million, constituting 78.6% of the 2.78 million total population.
                                <br />
                                <br />
                                Nevertheless, if we try to dig deeper and analyze these numbers, it becomes crystal clear that the
                                distribution is severely disproportionate. The gaps are specifically profound regarding the users' age
                                and financial status and their allocation in urbanized and rural areas. The further we go, the more enhanced
                                the gaps between diverse social groups become, thus contributing to the existing socio-economic problems
                                and reinforcing Literacy rates.  <br />
                                <br />
                                In this article, we tried to explore and analyze the primary reasons for these inequalities and to what point
                                poverty and digital illiteracy,
                                along with all their consequences, are interdependent. <br />
                                <br />
                                <strong>First and foremost</strong>, let's thoroughly and honestly define the notion of digital literacy. According to the very
                                first website that emerges as soon as you search for something on the web, Wikipedia:<br />
                                <br />
                                <p>
                                    However, for someone who has significant trouble navigating the internet and executing the most trivial tasks,
                                    accessing the opportunities above is just about unachievable.
                                    Indeed, in Armenia, there are numerous courses and lessons dedicated to aiding people in gaining digital literacy.
                                    However, their distribution is somewhat dubious. They are hardly specialized and not specifically “user-friendly.”
                                    Thus, the input efforts are barely contributing to the advancement of digital literacy among vulnerable social groups.
                                    The poor coordination of the offered resources leads to maldistribution of knowledge as the information about them
                                    is communicated through portals that are out of reach of the targeted groups.
                                    <br />
                                    <br />
                                    Similarly, the most evident benefit of efficient and knowledgeable internet usage is the quasi-limitless work
                                    opportunities also stay out of reach for digitally illiterate individuals. Over the past few years, the
                                    internet has undoubtedly become a perfect platform to find and execute work, as in the years of the world
                                    pandemic and due to constant migrations, numerous people have transitioned to working online. Owing to the
                                    digital divide, innumerable individuals are deprived of the chance to provide a stable income for their
                                    families and consequently break the cycle of poverty despite meeting the requirements for a specific job
                                    or having the appropriate education.
                                    <br />
                                    <br />
                                    When looking at the reverse side of the medal, it becomes blatant that digital exclusion is manifested
                                    among those exposed to poverty. The deficiency of financial resources to afford technical devices and
                                    accessibility to all the aforementioned avails only escalates the long-existing disparities between
                                    social groups. This phenomenon is precisely apparent among children.
                                    <br />
                                    <br />
                                    According to research on the provisioning of public schools in Armenia with technical equipment conducted
                                    in 2021, out of 21063 computers registered in state schools, more than one-third were out of service due
                                    to technical or software issues. Moreover, there are still schools that do not possess a single computer
                                    classroom, and around 80% of Armenian schools are equipped with only one computer classroom.

                                    The scarcity of resources adversely affects the learning process, putting children from rural regions
                                    and poor families behind their peers, worsening inequities, and reducing the quality of education as a result.<br />
                                    <br />
                                    However, for refugee women, this mission is challenging to accomplish. The
                                    existing micro-credit schemes and unsecured business loans often have
                                    high-interest rates, which can cripple the business from the outset.{" "}
                                    <br />
                                    <br />

                                    <strong>To conclude</strong>, it is crucial to comprehend that in the age of omnipresent and irresistible digitalization,
                                    poverty and digital inequalities are contingent to the core, as one continuously contributes to the other
                                    and vice versa. Therefore, when analyzing or trying to eliminate one of these phenomena, we must consider
                                    its high covariance with the other. <br />
                                </p>
                                <p className="back-link">
                                    <a href="women-empowerment-stories.html">
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

export default DigitalLiteracy
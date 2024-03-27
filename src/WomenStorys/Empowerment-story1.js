import React from "react"
import { Helmet } from "react-helmet"


class EmpowermentStory1 extends React.Component {
    render() {
        return (
            <>
                <>
                    <Helmet>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta name="description" content="Discover the empowering journey of an individual woman featured in Arev Society's Women Empowerment Stories. Learn about her challenges, achievements, and the impact of our programs." />
                        <meta name="keywords" content="women empowerment, success story, individual empowerment, Arev Society initiatives" />
                        <meta name="author" content="Arev Society" />
                        <meta name="format-detection" content="telephone=no" />

                        <link rel="canonical" href="https://www.arevsociety.org/women-empowerment-story-1"></link>
                    </Helmet>
                    <main>
                        <div className="container-stories-page">
                            <div className="container-stories-page-img">
                                <img
                                    className="img-story-page"
                                    src={require('../images/Arev Society-Women-Empowerment-M_e.webp')}
                                    alt="Arev Soceity Women Empowerment in Armenia -M_e"
                                />
                            </div>
                            <div className="article-story-page">
                                <h3 className="title-story-page">
                                    {" "}
                                    Meline’s challenging journey to find hope
                                </h3>
                                <p className="date-story-page"> November 08, 2023</p>
                                When my husband was taken from me during the war, life became abruptly
                                tough, and I didn't know what to do or where to turn. It was a difficult
                                time, and I struggled with how to heal my pain. But I refused to give up
                                hope.
                                <br />
                                <br />
                                Despite the family support I needed to raise my son to become
                                self-sufficient. It is tricky if you are in a remote rural area. I had no
                                access to different resources and opportunities like people in the city,
                                making it challenging to live further.
                                <br />
                                <br />
                                As time went by, it grew on me that launching any activity without
                                financial support would be almost impossible. I used to work as a
                                hairdresser several years ago before the war, but after it, at first, I
                                was bereaved and disempowered by a tragic event, then I had no savings and
                                scraped the idea of having my salon.
                                <br />
                                <br />
                                One day, my sister, who also lost her husband during the war, told me that
                                she was fortunate to come across a charitable organization that helped her
                                fund her small business. I contacted the{" "}
                                <a href="https://af4sd.org" target="_blank">
                                    Armenian Fund for Sustainable Development{" "}
                                </a>
                                , and they told me I could apply for funding within the women empowerment
                                project funded by Arev Society. <br />
                                <br />
                                They supported the launch of my hairdressing business, one of the best
                                things that ever happened to me after the tragic war. Thanks to this women
                                empowerment project, I was able to turn my life around.
                                <br />
                                <br /> I have always been passionate about hairdressing, and now I hope I
                                can turn my passion into a profitable business.
                                <br />
                                <br />
                                The day when I have enough clients, I will leave my part-time job and
                                fully devote myself to my business.
                                <br />
                                <br />
                                I will put all my heart and soul into my work so that my salon becomes a
                                success. It is not easy, but I will do it. The support I received from the
                                charitable organization went beyond just financial assistance. They
                                provided me with training and mentoring to help me build and do everything
                                to grow my business.
                                <br />
                                <br />
                                The women empowerment project helped me overcome the many obstacles in my
                                way. It gave me hope to live further and succeed.
                                <p />
                                <p className="back-link">
                                    <a href="women-empowerment-stories">Back to stories</a>{" "}
                                </p>
                            </div>
                        </div>
                    </main>

                </>
            </>
        )
    }
}

export default EmpowermentStory1
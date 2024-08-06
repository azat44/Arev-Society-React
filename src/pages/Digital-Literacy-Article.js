import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import { Helmet } from 'react-helmet';
import '../pages/Article.css';

const DigitalLiteracyArticle = () => {
  const quoteStyle = {
    borderLeft: '4px solid orange',
    paddingLeft: '0.5em',
    margin: '1em 0',
    fontStyle: 'italic',
    fontWeight: 'normal',
  };

  const quoteAuthorStyle = {
    display: 'block',
    marginTop: '1em',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const tableContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'stretch',  // Assure que tous les enfants ont la même hauteur
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    margin: '20px 0',
  };

  const tableItemStyle = {
    flex: 1,  // Assure que tous les éléments prennent le même espace horizontal
    textAlign: 'center',
    padding: '10px',  // Ajouter du padding pour l'espacement interne
  };

  const percentageStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
    margin: '0',
    color: 'white',
  };

  const titleStyle = {
    color: 'white',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const descriptionStyle = {
    color: 'white',
    fontSize: '0.9em',
    margin: '5px 0',
  };

  const [counts, setCounts] = useState({
    transportation: 0,
    childcare: 0,
    employment: 0,
    financial: 0,
  });

  const targetCounts = {
    transportation: 35,
    childcare: 42,
    employment: 28,
    financial: 53,
  };

  useEffect(() => {
    let intervalId;
    const handleScroll = () => {
      const tablePosition = document.getElementById('stats-table').offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition >= tablePosition) {
        const incrementCounts = () => {
          setCounts(prevCounts => {
            const newCounts = { ...prevCounts };
            let allReached = true;
            Object.keys(newCounts).forEach(key => {
              if (newCounts[key] < targetCounts[key]) {
                newCounts[key] += 1;
                allReached = false;
              }
            });
            if (allReached) clearInterval(intervalId);
            return newCounts;
          });
        };
        intervalId = setInterval(incrementCounts, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(intervalId);
    };
  }, []);


  return (
    <>
      <Helmet>
        <title>Digital Literacy Initiative for Vulnerable Women in Armenia</title>
        <meta name="description" content="Learn about the Digital Literacy Initiative by Arev Society and Armenian Fund for Sustainable Development, empowering vulnerable women including war widows and refugees in Armenia." />
        <meta name="keywords" content="Arev Society, Women empowerment, Digital Literacy, Vulnerable women, Refugees, war widows, Armenia, Armenian Fund for Sustainable Development" />
        <link rel="canonical" href="https://www.arevsociety.org/articles/digital-literacy-initiative-for-vulnerable-women-in-armenia" />

        <meta property="og:title" content="Digital Literacy Initiative for Vulnerable Women in Armenia" />
        <meta property="og:description" content="Learn about the Digital Literacy Initiative by Arev Society and Armenian Fund for Sustainable Development, empowering vulnerable women including war widows and refugees in Armenia." />
        <meta property="og:url" content="https://www.arevsociety.org/articles/digital-literacy-initiative-for-vulnerable-women-in-armenia" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.arevsociety.org/path-to-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Literacy Initiative for Vulnerable Women in Armenia" />
        <meta name="twitter:description" content="Learn about the Digital Literacy Initiative by Arev Society and Armenian Fund for Sustainable Development, empowering vulnerable women including war widows and refugees in Armenia." />
        <meta name="twitter:image" content="https://www.arevsociety.org/path-to-image.jpg" />
      </Helmet>

      <div className="article-container">
        <header className="article-header">
          <div className="article-header-center">
            <h1 className="article-title">Digital Literacy Initiative for Vulnerable Women in Armenia</h1>
            <div className="article-date">July 31, 2024 · 4 min read</div>
            <p className="article-description">
              <strong>Keywords:</strong> Women empowerment, Digital Literacy, Vulnerable women, Refugees, Armenia
            </p>
          </div>
        </header>
        <ProgressBar />
        <section className="article-content">
          <img src={require('../images/Arev-Society-Digital-literacy-initiative-vulnerable-women-armenia.webp')} alt="Digital literacy graduates proudly receiving their certificates of completion from Arev Society, celebrating their new skills and achievements" className="article-image" />
          <div className="article-image-caption">Digital Literacy Graduates | Yerevan, Armenia | Photo credit: Arev Society © 2024</div>
          <p>
            In June 2024, the Arev Society partnered with the Armenian Fund for Sustainable Development to launch the "Digital Literacy Courses" initiative. This project aimed to strengthen vulnerable social groups, particularly women, by enhancing their digital skills and basic computer knowledge—essential components for workforce integration and managing business-related tasks.
          </p>
          <p>
            We assessed over 80 initiative-interested women beneficiaries of the "Vulnerable Women Empowerment (VWE)" program who requested assistance in developing digital skills. The “VWE” program has supported these women to fund their vocational training (VT) or income-generating activity (IGA). Participants, ranging from 20 to 50 years old, included women whose husbands were killed or injured during the 2020 Artsakh (Nagorno-Karabakh) war and Artsakh refugees.  
            Despite participants' initial strong commitment, we observed a 20% decline in engagement before courses began. While active participants demonstrated encouraging progress, this article explores potential reasons causing beneficiaries' disengagement and apparent indifference toward learning.
          </p>
          <p>
            We identified several factors that discouraged beneficiaries from adhering to the program and classified them into psychological, financial, behavioral, and visionary categories.
          </p>
          <h2>Psychological factors</h2>
          <p>
            All our women beneficiaries are direct or indirect war victims, and many of them confirmed that they passed through severe traumatic experiences that have profoundly affected them. Education and learning have ceased to be a priority for these women despite professional integration's obvious necessity and significance.
          </p>
          <blockquote style={quoteStyle}>
            “When, in the winter of 2020, military people came to our home and explained to us that my husband's location was unknown and that there most probably few chances of finding him alive, my mother-in-law felt in severe depression and since then, showed loss of memory. This particular mourning ambiance in the house affected my four-year-old 
            daughter, who still has difficulties communicating with others. All this also impacted me, and participating in digital literacy courses was a daunting challenge, but fortunately, I decided ultimately to come, and I am happy that I did it. I imagine many women are in the same situation; they have no motivation but to earn money and aren’t interested in personal development.” 
            <span style={quoteAuthorStyle}>Interview Extract: War widow, 35 years old, mother of two children - Program beneficiary, IGA: Greenhouse, Armavir region, Armenia</span>
          </blockquote>
          <p>
            Among various psychological factors, a lack of self-confidence plays a critical role. This low self-confidence stems from patriarchal societal stereotypes that suggest women don't need to be technologically proficient to be good mothers for their families. Of course, this fallacy est sans fondement, et les bénéficiaires se rendent compte assez rapidement qu'il s'agit davantage d'un aspect psychologique qui pourrait être traité par un processus d'apprentissage.
          </p>
          <p>
            Interestingly, some interviewees were initially confident que leur connaissance était suffisante pour répondre aux demandes d'emploi actuelles. Cependant, après la première évaluation et l'introduction aux cours de littératie numérique, ils ont rapidement réalisé que leurs compétences étaient considérablement inadéquates pour les exigences du marché du travail d'aujourd'hui.
          </p>
          <p>
            Finally, another significant psychological factor is resistance to anything new, the propensity to remain in a comfort zone, and the avoidance of commitment to a consistent learning process, which is sometimes complex and requires intellectual strain.
          </p>
          <blockquote style={quoteStyle}>
            “Before, I had not realized the importance of digital literacy; that seemed more like something my children would discuss. After the first few lessons, I started noticing how much I was deprived of in basic day-to-day life, let alone work. It was a great challenge for me to memorize and understand everything quickly; however, I am glad 
            I had made up my mind to apply, as I am already using some of the acquired skills in my daily life.” 
            <span style={quoteAuthorStyle}>Interview Extract: Refugee woman, 35 years old, mother of three children - Program beneficiary, VT: Cosmetology, Yerevan, Armenia</span>
          </blockquote>

          <h2>Financial factors</h2>
          <p>
            All our beneficiaries are financially vulnerable, and their income is composed of state allowance and salary or income from small businesses created through our support. Although the training courses are free of charge, transportation costs necessary to attend digital literacy training courses weigh heavily on their monthly budget. When they need to
             choose between expenses, transportation costs for training take the back seat.
          </p>
          <p>
            Another financial hindrance is the lack of basic computer equipment at home, which forces them to attend in-person digital literacy courses and limits the learning process during training sessions.
          </p>
          <blockquote style={quoteStyle}>
            “I wish I had a computer at home so that I could take digital literacy courses remotely and practice my skills afterward. Our only notebook is for my daughter, a student who takes it with her for her studies at university.” 
            <span style={quoteAuthorStyle}>Interview Extract: War widow, 37 years old, mother of three children - Program beneficiary, IGA: Calf breeding, Armavir region, Armenia</span>
          </blockquote>
          <p>
            Some interviewees explained they wished to attend digital literacy courses but work as employees elsewhere, and the rigid schedule of working hours is incompatible with the timing of the courses. Here, once again, beneficiaries opt to conserve their stable income employment instead of attending digital literacy courses with hypothetical long-term gain.
          </p>
          <blockquote style={quoteStyle}>
            “I work the whole week in the local supermarket, except Sundays, and despite my strong desire to attend these courses, it is impossible because I have four children at home who need me all the time and almost for everything. I could participate in these courses remotely if I had a computer at home. Alas, I haven’t any, and I can’t afford it in the near future.”
            <span style={quoteAuthorStyle}>Interview Extract: Refugee, 41 years old, mother of four children - Program beneficiary, IGA: Greenhouse, Ararat region, Armenia</span>
          </blockquote>

          <h2>Behavioral factors</h2>
          <p>
            We also observed that many beneficiaries feel anxious about new technologies and worry about making mistakes or appearing incompetent in front of others. However, after a few courses, this feeling faded when beneficiaries realized that almost everyone has the same difficulties harnessing new skills. The indifference and lack of motivation hinge on the absence of an immediate gain.
          </p>
          <p>
            The fact that the advantages of such competencies are not immediately tangible or don't instantly generate income often leads to a passive behavioral attitude. However, one of the interviewees confessed that owing to her new digital competencies, she earned more respect among colleagues at the workplace.
          </p>
          <blockquote style={quoteStyle}>
            “When at the workplace, I told them that I could help them easily calculate percentages with Excel. At first, everyone looked at me surprised. Once it was done, they were all very respectful. Of course, I didn't tell them I was taking digital literacy courses to avoid negative comments, such as 'You have three children, but still, you are on school benches.' However, I am very happy that I can do simple but useful things.”
            <span style={quoteAuthorStyle}>Interview Extract: War widow, 37 years old, mother of three children - Program beneficiary, IGA: Calf breeding, Armavir region, Armenia</span>
          </blockquote>
          <p>
            Ignorance of foreign languages impedes adult beneficiaries' swift learning progress. They remain extremely timid and don’t dare ask aloud for specific technical terms they don't understand all at once. They prefer keeping silent rather than revealing their lack of comprehension. This forces the trainer to intuitively identify knowledge gaps and address them, often without explicit feedback from the participants.
          </p>
          <blockquote style={quoteStyle}>
            “When I am home, I try to practice all I learned during the course, and when I see that I am stuck, I try to find solutions on YouTube. However, the best courses are in English, and I am not at ease with foreign languages, so I wait until the next course to ask for help.”
            <span style={quoteAuthorStyle}>Interview Extract: Refugee woman, 35 years old, mother of three children - Program beneficiary, VT: Cosmetology, Yerevan, Armenia</span>
          </blockquote>

          <h2>Visionary Factors</h2>
          <p>
            Economic precarity dictates priorities, and most of them should be short-term. This is a widespread mindset among beneficiaries. Many participants struggled to envision how digital skills could concretely improve their lives, particularly given that they live in rural areas. Age-related self-limitation hinders embracing future opportunities and possible changes. They consider themselves too old to learn new skills, so the output of any initiative should be immediate.
          </p>
          <blockquote style={quoteStyle}>
            “I don’t think that I am interested in participating in such courses because there is no employment in new technologies in our village. These courses are useful for young people who want to become programmers, but not for me. I am too old for that. I make four haircuts per day on average, and every evening, I am paid off, and all this without any use of digital skills.”
            <span style={quoteAuthorStyle}>Interview Extract: Refugee woman, 41 years old, mother of four children - Program beneficiary, VT: Hairdressing, Ararat region, Armenia</span>
          </blockquote>

          <h2>Conclusion</h2>
          <p>
            We at the Arev Society and our partner, the Armenian Fund for Sustainable Development, have observed all these patterns and understand that we need to adapt our offer to vulnerable populations to foster digitally illiterate people's adhesion to a lifelong learning process. In our next training sessions, we will invite our successful trainees to demonstrate how digital literacy led them to economic opportunities and improved their daily lives. This approach could be particularly effective if it is done through peer support. We strive to reduce the digital divide in society and promote digital inclusion.
          </p>

          <div id="stats-table" style={tableContainerStyle}>
        <div style={tableItemStyle}>
          <p style={percentageStyle}>{counts.transportation}%</p>
          <p style={titleStyle}>Transportation</p>
          <p style={descriptionStyle}>35% reported difficulty accessing reliable transportation to course venues.</p>
        </div>
        <div style={tableItemStyle}>
          <p style={percentageStyle}>{counts.childcare}%</p>
          <p style={titleStyle}>Childcare</p>
          <p style={descriptionStyle}>42% cited lack of childcare as a primary obstacle to regular attendance.</p>
        </div>
        <div style={tableItemStyle}>
          <p style={percentageStyle}>{counts.employment}%</p>
          <p style={titleStyle}>Employment Conflicts</p>
          <p style={descriptionStyle}>28% experienced scheduling conflicts with work or job-seeking activities.</p>
        </div>
        <div style={tableItemStyle}>
          <p style={percentageStyle}>{counts.financial}%</p>
          <p style={titleStyle}>Financial Stress</p>
          <p style={descriptionStyle}>53% indicated that immediate financial needs often took precedence over educational pursuits.</p>
        </div>
      </div>

          <h5 className="article-footer">
            Copyright Notice: © 2024 [Arev Society]. All rights reserved.<br/>
            <br/>
            The information in this article/report is protected by copyright law. Without express written authorization from the Arev Society, any use, reproduction, 
            or distribution of this material, in whole or in part, is strictly prohibited. If you wish to use or reproduce information from this article/report, 
            you must obtain written permission from the copyright holder. To request authorization, please contact us at av@arevsociety.org. Suggested citation format: 
            [Arev Society (2024). Digital Literacy Initiative for Vulnerable Women in Armenia]. Used with permission. Unauthorized use is strictly prohibited.<br/>
            <br/>
            Disclaimer: The information presented in this article/report is provided solely for informational purposes. It is not intended to serve as a substitute for professional advice, diagnosis, or treatment. The Arev Society does not assume any responsibility for errors, omissions, or contrary interpretations of the subject matter. Any use of this information is at the reader's own risk. The Arev Society disclaims any liability, loss, or risk incurred as a consequence, directly or indirectly, from the use and application of any of the contents of this article/report.
          </h5>
        </section>
      </div>
    </>
  );
};

export default DigitalLiteracyArticle;

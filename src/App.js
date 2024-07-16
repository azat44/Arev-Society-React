import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './Main.css';
import './Media.css';
import './lib/bootstrap/css/bootstrap.css';
import Home from './pages/Home';
import Refugee from './pages/Refugee';
import Humanitarian from './pages/Humanitarian';
import Empowerment from './pages/Empowerment';
import Beneficiaries from './pages/Beneficiaries';
import DigitalInequality from './pages/Digital-Inequality';
import Privacy from './pages/Privacy';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CookieBanner from './components/Cookie';
import EmpowermentStory1 from './WomenStorys/Empowerment-story1';
import EmpowermentStory2 from './WomenStorys/Empowerment-story2';
import EmpowermentStory3 from './WomenStorys/Empowerment-story3';
import EmpowermentStory4 from './WomenStorys/Empowerment-story4';
import EmpowermentStory5 from './WomenStorys/Empowerment-story5';
import EmpowermentStory6 from './WomenStorys/Empowerment-story6';
import EmpowermentStory7 from './WomenStorys/Empowerment-story7';
import EmpowermentStory8 from './WomenStorys/Empowerment-story8';
import EmpowermentStory9 from './WomenStorys/Empowerment-story9';
import EmpowermentStory10 from './WomenStorys/Empowerment-story10';
import EmpowermentStory11 from './WomenStorys/Empowerment-story11';
import EmpowermentStory12 from './WomenStorys/Empowerment-story12';
import ScrollToTopButton from './components/BackToTop';

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])



  return (
    <div>
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Arev Society is a 501c3 certified non-profit charity fostering philanthropy and solidarity of American people in support of vulnerable Armenians."
          />
          <meta
            name="keywords"
            content="arev society,tax exempt, non-profit,charity, 501c3,women empowerment, armenia"
          />
          <meta name="author" content="Arev society" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="canonical" href="https://www.arevsociety.org/" />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/refugee-women-empowerment" component={Refugee} />
          <Route exact path="/humanitarian-emergency" component={Humanitarian} />
          <Route exact path="/women-empowerment" component={Empowerment} />
          <Route exact path="/women-empowerment-stories" component={Beneficiaries} />
          <Route exact path="/digital-inequality" component={DigitalInequality} />
          <Route exact path="/women-empowerment-story-1" component={EmpowermentStory1} />
          <Route exact path="/women-empowerment-story-2" component={EmpowermentStory2} />
          <Route exact path="/women-empowerment-story-3" component={EmpowermentStory3} />
          <Route exact path="/women-empowerment-story-4" component={EmpowermentStory4} />
          <Route exact path="/women-empowerment-story-5" component={EmpowermentStory5} />
          <Route exact path="/women-empowerment-story-6" component={EmpowermentStory6} />
          <Route exact path="/women-empowerment-story-7" component={EmpowermentStory7} />
          <Route exact path="/women-empowerment-story-8" component={EmpowermentStory8} />
          <Route exact path="/women-empowerment-story-9" component={EmpowermentStory9} />
          <Route exact path="/women-empowerment-story-10" component={EmpowermentStory10} />
          <Route exact path="/women-empowerment-story-11" component={EmpowermentStory11} />
          <Route exact path="/women-empowerment-story-12" component={EmpowermentStory12} />
          <Route exact path="/privacy" component={Privacy} />
        </Switch>
        <CookieBanner />
        <ScrollToTopButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

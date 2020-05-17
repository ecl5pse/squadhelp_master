import React from 'react';
import Header from '../../components/Header/Header';
import StartPanel from '../../components/StartPanel';
import Cards from '../../components/Cards';
import StartContestPanel from '../../components/StartContestPanel';
import FrequentlyAskedQuestion from '../../components/FrequentlyAskedQuestion';
import Questions from '../../components/Questions';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import MetaTags from 'react-meta-tags';

const HowItWorks = (props) => {

  return (
      <>
        <MetaTags>
          <title>How Does Squadhelps</title>
        </MetaTags>
        <Header/>
        <StartPanel/>
        <Cards/>
        <StartContestPanel/>
        <FrequentlyAskedQuestion/>
        <Questions/>
        <Footer/>
        <ScrollToTop/>
      </>
  );
};

export default HowItWorks;
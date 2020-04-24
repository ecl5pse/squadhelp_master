import React from 'react';
import Header from '../../components/Header/Header';
import style from './HowItWorks.module.scss';
import Icon from '@mdi/react';
import {mdiPlay} from '@mdi/js';
import StartPanel from '../../components/StartPanel';
import Cards from '../../components/Cards';

const HowItWorks = (props) => {

  return (
      <>
        <Header/>
        <StartPanel/>
        <div className={style.container}>
          <span className={style.hashtag}>Our Services</span>
          <h1 className={style.question}>3 Ways To Use Squadhelp</h1>
          <p className={style.text}>Squadhelp offers 3 ways to get you a perfect name for your
            business</p>
        </div>
        <Cards/>
      </>
  );
};

export default HowItWorks;
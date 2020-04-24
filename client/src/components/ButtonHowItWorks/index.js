import React from 'react';
import styles from './ButtonHowItWorks.module.scss';
import {Link} from 'react-router-dom';

const ButtonHowItWorks = (props) => {

  return (
      <div className={styles.container}>
        <Link to={'howItWorks'} className={styles.link}>Learn How Squadhelp Works</Link>
      </div>
  );

};

export default ButtonHowItWorks;
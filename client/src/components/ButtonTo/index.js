import React from 'react';
import styles from './ButtonTo.module.scss';
import {Link} from 'react-router-dom';

const ButtonTo = (props) => {
  const {to, value} = props;
  return (
      <div className={styles.container}>
        <Link to={to} className={styles.link}>{value}</Link>
      </div>
  );

};

export default ButtonTo;
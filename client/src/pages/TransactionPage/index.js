import React  from 'react';
import Table  from '../../components/Table';
import {Link} from 'react-router-dom';
import style  from './TransactionPage.module.scss';

const TransactionPage = (props) => {

  return (

      <>
        <span className={style.button}> <Link to={'dashboard'}>Dashboard</Link></span>
        <h1>Transaction Table</h1>
        <Table/>
      </>
  );
};

export default TransactionPage;
import React  from 'react';
import style  from './StartContest.module.scss';
import {Link} from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiLightbulbOutline } from '@mdi/js';

const StartContestPanel = (props) => {

  return (
      <div className={style.container}>
        <Link to={'dashboard'} className={style.button}>
          <span> Start of Contest</span>
        </Link>
      </div>
  );
};

export default StartContestPanel;
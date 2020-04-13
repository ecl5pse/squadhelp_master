import React  from 'react';
import style  from './StartContest.module.scss';
import {Link} from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiLightbulbOutline } from '@mdi/js';

const StartContestPanel = (props) => {

  return (
      <div className={style.container}>
        <p>Ready to get started? Launch a contest and start receiving
          submissions instantly.</p>
        <Link to={'dashboard'} className={style.button}>
          <Icon path={mdiLightbulbOutline} size={0.9}/>
          <span> Start of Contest</span>
        </Link>
      </div>
  );
};

export default StartContestPanel;
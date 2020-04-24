import React from 'react';
import Icon from '@mdi/react';
import {mdiPlay} from '@mdi/js';
import style from './StartPanel.module.scss';

const StartPanel = (props) => {

  return (
      <div className={style.container}>
          <span className={style.hashtag}>
            World`s #1 Naming Platform</span>
        <h1 className={style.question}>How Does Squadhelp Work?</h1>
        <p className={style.text}>Squadhelp helps you come up with a great
          name for your business by
          combining the power of crowdsourcing with sophisticated technology
          and Agency-level validation services.</p>
        <span className={style.button}>
            <Icon path={mdiPlay} size={0.9}/>
            Play Video
          </span>
        <img className={style.image} src='/staticImages/image.png' alt='image'/>
      </div>
  );
};

export default StartPanel;
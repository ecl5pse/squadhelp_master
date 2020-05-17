import React from 'react';
import Icon from '@mdi/react';
import {mdiPlay} from '@mdi/js';
import style from './StartPanel.module.scss';

const StartPanel = (props) => {

  return (
      <div className={style.container}>
        <div>
        <iframe title="Wistia video player"
                allowFullScreen
                frameBorder="0"
                scrolling="no"
                src="https://fast.wistia.net/embed/iframe/vfxvect60o"
                 className={style.video}/>
        </div>
        <div className={style.containerText}>
        <h1 className={style.question}>How Does Squadhelp Work?</h1>
        <p className={style.text}>Squadhelp allows you to host branding
          competitions to engage with the most creative people across the globe
          and get high-quality results, fast. Thousands of creatives compete
          with each other, suggesting great name ideas. At the end of the
          collaborative contest, you select one winner. The winner gets paid,
          and you get a strong brand name that will help you succeed! It's
          quick, simple, and costs a fraction of an agency.</p>
          </div>
      </div>

  );
};

export default StartPanel;
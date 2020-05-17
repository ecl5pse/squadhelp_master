import React from 'react';
import style from './Questions.module.scss';
import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';


const Questions = ()=>{
  return (
      <>
        <div className={style.container}>
         <div className={style.containerIconEmail}>
           <Icon path={mdiEmailOutline} size={2} className={style.iconEmail}/>
         </div>
          <div className={style.containerText}>
        <h2 className={style.title}>Questions?</h2>
          <p className={style.text}>Check out our <a href="#">FAQs </a> or send
            us a <a href="#">message </a>. For assistance with
            launching a contest, you can also call us at (877) 355-3585 or
            schedule a <a href="#"> Branding Consultation</a>
          </p>
          </div>
          <span className={style.button}>GET IN TOUCH</span>
        </div>
      </>
  )
}

export default Questions;
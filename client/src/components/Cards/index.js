import React from 'react';
import style from './Cards.module.scss'

const Cards = ()=>{
  return  (
      <div  className={style.container}>
        <div className={style.card_1}>
          <h1 className={style.heading}>Launch a Contest</h1>
          <p className={style.body}>Work with hundreds of creative experts to get custom name
            suggestions for your business or brand. All names are auto-checked
            for URL availability.</p>
          <span className={style.button}>Launch a Contest</span>
        </div>
        <div className={style.card_2}>
          <h1 className={style.heading}>Explore Names For Sale</h1>
          <p className={style.body}>Our branding team has curated thousands of pre-made names that you
            can purchase instantly. All names include a matching URL and a
            complimentary Logo Design</p>
          <span className={style.button}>Explore Names For Sale</span>
        </div>
      <div className={style.card_3}>
        <h1 className={style.heading}>Agency-level Managed Contests</h1>
        <p className={style.body}>Our Managed contests combine the power of crowdsourcing with the rich
          experience of our branding consultants. Get a complete agency-level
          experience at a fraction of Agency costs
        </p>
        <span className={style.button}>Learn More</span>
      </div>
      </div>
  )
}

export default Cards
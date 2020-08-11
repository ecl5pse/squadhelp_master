import React, {useState} from 'react';
import style from './ButtonGroup.module.scss';

const ButtonGroup  = ()=> {

    return  (
      <>
      <span className={style.containerText}>
      <label>Do you want a matching domain(.com URL) with your name</label>
        <p className={style.text}>
          If you want a matching domain, our platform will only accept those name suggestions where the domain is available. (Recommended)
        </p>
      </span>
        <div className={style.container}>
          <button  className={ style.containerOne}>
            <span className={style.button}>Yes</span>
            <p>The Domain should exactiy match the name</p>
          </button>
          <button className= {style.containerOne}>
            <span className={style.button}>Yes</span>
            <p>But minor variations are allowed (Recommended)</p>
          </button>
         <button  className={ style.containerOne}>
            <span className={style.button}>No</span>
            <p>I am only looking for a name, not a Domain</p>
          </button>
        </div>
      </>
    );
};

export default ButtonGroup;
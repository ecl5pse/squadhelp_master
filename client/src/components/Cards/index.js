import React from 'react';
import data   from './data';
import style from './Cards.module.scss';


const items = data.map(data => ({...data}));

const Cards = props => {

  return (
      <>
        <h1 className={style.heading}>5 Simple Steps</h1>
        <div className={style.container}>
          {
            items.map(texts => (
                <div key={texts.id} className={style.containerCards}>
                  <div key={texts.id} className={texts.id == 1 ? style.button  : style.buttonNtn}>{texts.id}
                </div>
                  <h1 key={texts.title} className={style.title}>{texts.title}</h1>
                  <p key={texts.body} className={style.body}>{texts.body}</p>
                </div>
            ))
          }
        </div>
      </>
  );
};

export default Cards;
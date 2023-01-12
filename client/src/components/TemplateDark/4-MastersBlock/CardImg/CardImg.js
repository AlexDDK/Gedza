/* eslint-disable max-len */
import React from 'react';
import style from '../MastersBlock.module.css';

export default function CardImg({ name, img }) {
  return (
    // <img src={img} className={`${style.img} card-img-top`} alt={name} />
    <>
      <div className={style['staff-el__img']}>

        <div
          className={style['staff-el__img-el']}
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
    </>
  );
}

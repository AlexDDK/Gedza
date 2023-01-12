import React from 'react';
import CardImg from '../CardImg/CardImg';
import style from '../MastersBlock.module.css';

export default function CardMaster({
  id, name, img, spec, info,
}) {
  return (
    <>
      <div className={style['staff-el']}>
        <div className={style['staff-el__item']}>
          <CardImg name={name} img={img} />
          <div className={style['staff-el__title']}>
            <h3>{name}</h3>
          </div>
          <div>{spec}</div>
        </div>
      </div>
    </>

  );
}

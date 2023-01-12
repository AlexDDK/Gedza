import React, { useState } from 'react';
import style from '../../../ServiceBlock.module.css';

export default function OneServise({ title, price, comment }) {
  const [on, setOn] = useState(false);

  const changeOn = (e) => {
    setOn((prev) => !prev);
  };

  return (
    <div className={style.servicesLine}>
      <div className={style.servicesHead}>
        <span onClick={changeOn} className={`${on ? `${style.servicesLineName} ${style.on}` : style.servicesLineName}`}>{title}</span>
        <span className={style.servicesLinePrices}>{price} руб.</span>
      </div>
      <span className={`${style.servicesDescEl} ${on ? style.block : style.hidden}`}>{comment}</span>
    </div>
  );
}

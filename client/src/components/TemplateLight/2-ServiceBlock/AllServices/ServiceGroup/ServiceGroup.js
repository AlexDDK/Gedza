import React from 'react';
import style from '../../ServiceBlock.module.css';
import OneServise from './OneService/OneServise';

export default function ServiceGroup({ serviceGroup, catId, activeCat }) {
  return (
    <div className={`${style.servicesTabsItem} ${(serviceGroup[0]?.yc_cat_id === activeCat?.yc_cat_id) ? style.active : style.hidden}`}>
      { serviceGroup.map((el) => (
        <OneServise
          key={el.id}
          id={el.yc_serv_id}
          title={el.title}
          price={el.price_min}
          comment={el.comment}
        />
      ))}
    </div>
  );
}

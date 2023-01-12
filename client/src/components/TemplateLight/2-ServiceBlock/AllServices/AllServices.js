import React, { useState } from 'react';
import style from '../ServiceBlock.module.css';
import ServiceGroup from './ServiceGroup/ServiceGroup';

export default function AllServices({ allServices, categories, activeCat }) {
  return (
    <div className={style.servicesTabsItems}>
      {categories.map((el) => (
        <ServiceGroup
          key={el.id}
          catId={el.yc_cat_id}
          serviceGroup={allServices.filter((elem) => elem.yc_cat_id === el.yc_cat_id)}
          activeCat={activeCat}
        />
      ))}
    </div>
  );
}

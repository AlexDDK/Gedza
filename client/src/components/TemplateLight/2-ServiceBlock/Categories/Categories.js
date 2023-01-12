import React from 'react';
import style from '../ServiceBlock.module.css';
import Category from './Category/Category';

export default function Categories({ categories, setActiveCat, activeCat }) {
  return (
    <div className={style.servicesTabsNavs}>
      {categories.map((el) => (
        <Category
          key={el.id}
          id={el.yc_cat_id}
          isActive={el.yc_cat_id === activeCat?.yc_cat_id}
          setActiveCat={setActiveCat}
          category={el}
        />
      ))}
    </div>
  );
}

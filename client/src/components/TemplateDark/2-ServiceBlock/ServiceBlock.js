/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllServices from './AllServices/AllServices';
import Categories from './Categories/Categories';
import style from './ServiceBlock.module.css';

export default function ServiceBlock() {
  const categoriesState = useSelector((store) => store.categories);
  const allServisesState = useSelector((store) => store.service);

  const [activeCat, setActiveCat] = useState({});
  useEffect(() => {
    setActiveCat(categoriesState[0]);
  }, [categoriesState]);

  return (
    <section className={style.secServices}>
      <a name="services" />
      <div className={style.container}>
        <h2 className={style.h2S}>услуги</h2>
        <Categories categories={categoriesState} activeCat={activeCat} setActiveCat={setActiveCat} />
        <AllServices categories={categoriesState} allServices={allServisesState} activeCat={activeCat} />
      </div>
    </section>

  );
}

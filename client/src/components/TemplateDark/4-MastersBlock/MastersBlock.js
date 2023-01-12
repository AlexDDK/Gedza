/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import CardMaster from './CardMaster/CardMaster';
import style from './MastersBlock.module.css';

export default function MastersBlock() {
  const mastersState = useSelector((store) => store.masters);

  return (
    <section className={style.staffSection}>
      <a name="masters" />
      <div className={style.container}>
        <div className={style.staffSectionTitle}>
          <h2 className={style.h2S}>БАНДА</h2>
        </div>
        {/* <div className="row row-cols-3 my-3"> */}
        <div className={style.staffList}>
          {mastersState.map((el) => (
            <CardMaster
              id={el.yc_master_id}
              name={el.name}
              img={el.avatar_big}
              spec={el.specialization}
              info={el.information}
            />
          ))}
        </div>
      </div>
    </section>

  );
}

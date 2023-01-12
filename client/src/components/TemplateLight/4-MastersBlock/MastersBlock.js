/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import CardMaster from './CardMaster/CardMaster';
import styles from './MastersBlock.module.css';

export default function MastersBlock() {
  const mastersState = useSelector((store) => store.masters);

  return (
    <section className={styles.masterContainer}>
      <a name="masters" />
      <h1 className={styles.h2Team}>Команда</h1>
      <div className={styles.masterList}>
        {mastersState.map((el) => (
          <CardMaster
            key={el.yc_master_id}
            id={el.yc_master_id}
            name={el.name}
            img={el.avatar_big}
            spec={el.specialization}
            info={el.information}
          />
        ))}
      </div>
    </section>

  );
}

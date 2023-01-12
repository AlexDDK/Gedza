import React from 'react';
import styles from './CardMaster.module.css';

export default function CardMaster({
  name, img, spec,
}) {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          objectFit: 'cover',
        }}
      />
      <div className={styles.cardDescription}>
        <p className={styles.textTitle}> {name}</p>
        <p className={styles.textBody}>{spec}</p>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './ContactBlock.module.css';

function Address({ salon }) {
  return (
    <div className={styles.adress}>
      <h5 className={styles.adressH5}>{salon.city}</h5>
      <p className={styles.adressP}>{salon.address}</p>
    </div>
  );
}

export default Address;

// Элемент загрузки
import React from 'react';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loaderConteiner}>
      <div className={styles.loaderContent}>
        <div className={styles.loader} />
      </div>
    </div>

  );
}

export default Loader;

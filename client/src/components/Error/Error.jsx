import React from 'react';
import { useSelector } from 'react-redux';
import { BiErrorAlt } from 'react-icons/bi';
import styles from './Error.module.css';

function Error() {
  const error = useSelector((store) => store.error); // Подписываемся на стор ошибки

  return (
    <div className={styles.errorDiv}>
      <div className={styles.errorContetn}>
        <BiErrorAlt className={styles.errorIcon} />
        <span className={styles.textSpan}>{error}</span>
      </div>
    </div>
  );
}

export default Error;

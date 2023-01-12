import React from 'react';
import styles from './Buttons.module.css';

function MainButton({ title, action }) {
  return (
    <button
      type="submit"
      className={styles.mainBtn}
    >{title}
    </button>
  );
}

export default MainButton;

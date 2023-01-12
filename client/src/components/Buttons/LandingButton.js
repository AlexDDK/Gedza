import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Buttons.module.css';

function LandingButton() {
  const bookForm = useSelector((store) => store.bookForm);

  const clickHandler = () => {

  };

  return (
    <button
      type="button"
      onClick={clickHandler}
      className={styles.mainBlockBtn}
    >Записаться
    </button>
  );
}

export default LandingButton;

import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import styles from './Buttons.module.css';

function WriteButton() {
  const bookForm = useSelector((store) => store.bookForm);

  const clickHandler = () => {

  };

  return (
    <div>

      <a href="#ycwrite" className="ms-booking">
        <button
          type="button"
          onClick={clickHandler}
          className={styles.mainBlockBtn}
        >Записаться
        </button>
      </a>
    </div>
  );
}

export default WriteButton;

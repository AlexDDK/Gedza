import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.css';

function Page404() {
  const navigate = useNavigate();

  // Хендлер клика по кнопке На главную
  const clickHandler = (e) => {
    navigate('/');
  };

  return (
    <div className={styles.container404}>
      <div className={styles.content404}>
        <h1 className={styles.h1404}>Такой страницы <br />не существует
        </h1>
        <div className={styles.imgLanding}>
          <img src="img/404 Error-rafiki.svg" alt="404 illustration" />
        </div>
        <button
          type="button"
          className={styles.mainBtn}
          onClick={clickHandler}
        >
          На главную
        </button>
      </div>

    </div>
  );
}

export default Page404;

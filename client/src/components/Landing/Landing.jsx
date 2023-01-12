/* eslint-disable react/button-has-type */
/* eslint-disable import/no-duplicates */
// Компонент для главной страницы без регистрации
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Landing.module.css';
import { showModal } from '../../redux/actions/modalAction';

import Navbar from '../Navbars/Navbar';
import ModalSmall from '../Modals/ModalSmall';

function Landing() {
  const dispatch = useDispatch();
  const modal = useSelector((store) => store.modal); // Подписываемся на состояние модала в сторе

  // Хендлер клика по кнопке ПОПРОБОВАТЬ
  const clickHandler = (e) => {
    dispatch(showModal('signup')); // Передаем значение, открывающие форму регистрации
  };

  return (
    <div className={styles.background}>

      <Navbar />
      {modal && <ModalSmall />}

      <div className={styles.content}>
        <div className={styles.textLand}>
          <h1 className={styles.h1Landing}>Создайте сайт<br /> без дизайнера</h1>
          <h2 className={styles.h2Landing}>За 3 минуты из данных CRM YClients.
            <br />Обновляйте информацию в пару кликов.
            <br />
          </h2>
          <button
            className={styles.mainBtn}
            onClick={clickHandler}
          >
            Создать
          </button>
        </div>
        <div className={styles.imgLanding}>
          <img src="img/illustration.svg" alt="main illustration" />
        </div>
      </div>
    </div>
  );
}

export default Landing;

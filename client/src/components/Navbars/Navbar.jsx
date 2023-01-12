import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Navbar.module.css';
import { showModal } from '../../redux/actions/modalAction';

function Navbar({ setModal }) {
  const dispatch = useDispatch();

  // Хендлр на смену модала
  const loginHandler = (e) => {
    dispatch(showModal('login'));
  };

  // Хендлр на открытие модала
  const signupHandler = (e) => {
    dispatch(showModal('signup'));
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logoLanding} src="img/Name_gedza.svg" alt="logo" />
      <div className={styles.buttonsDiv}>
        <button
          type="button"
          className={styles.btnText}
          onClick={loginHandler}
        >Войти
        </button>
        <button
          type="button"
          className={styles.mainBtn}
          onClick={signupHandler}
        >Регистрация
        </button>
      </div>
    </div>
  );
}

export default Navbar;

/* eslint-disable import/no-duplicates */
// Форма аунтификации
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions/userAction';
import styles from './FormAuth.module.css';
import { showModal } from '../../redux/actions/modalAction';

function LogInForm() {
  // Создаем диспатч
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Задам стейт, собираем данные форм
  const [userLogIn, setUserLogIn] = useState({
    email: '',
    password: '',
  });

  // Хендлер на изменение импута
  const changeHandler = (e) => {
    setUserLogIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Хендлер на переключение состояния модала
  const clickHandler = (e) => {
    dispatch(showModal('signup'));
  };

  // Хендлер на субмит
  const submitHandler = (e) => {
    e.preventDefault(); // Сбрасываем стандартное действие
    dispatch(logIn(userLogIn, navigate)); // Отправляем запрос в редакс
    dispatch(showModal(false)); // Сбрасываем стейт модала
    setUserLogIn({
      email: '',
      password: '',
    });
  };

  return (
    <div className={styles.boxAuth}>
      <div className={styles.modalHeader}>
        <h5 className={styles.heading}>Вход</h5>
      </div>
      <form
        name="login"
        onSubmit={submitHandler}
        className={styles.formDiv}
      >
        <div className={styles.inputDiv}>
          <label
            htmlFor="emailLogin"
            className={styles.formLabel}
          >Почта
          </label>
          <input
            name="email"
            value={userLogIn.email}
            onChange={changeHandler}
            autoComplete="user-email"
            type="email"
            className={styles.input}
            placeholder="example@example.com"
            id="emailLogin"
          />
        </div>
        <div className={styles.inputDiv}>
          <label
            htmlFor="passwordLogin"
            className={styles.formLabel}
          >Пароль
          </label>
          <input
            name="password"
            value={userLogIn.password}
            onChange={changeHandler}
            autoComplete="current-password"
            type="password"
            className={styles.input}
            placeholder="********"
            id="passwordLogin"
          />
        </div>
        <button
          type="submit"
          className={styles.mainBtn}
        >Войти
        </button>
      </form>
      <span className={styles.textSpan}>У вас нет аккаунта?
        <button
          type="button"
          className={styles.txtBtn2}
          onClick={clickHandler}
        >Регистрация
        </button>
      </span>
    </div>

  );
}

export default LogInForm;

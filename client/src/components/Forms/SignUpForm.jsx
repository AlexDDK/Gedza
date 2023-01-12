/* eslint-disable import/no-duplicates */
// Форма регистрации
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './FormAuth.module.css';
import { signUp } from '../../redux/actions/userAction';
import { showModal } from '../../redux/actions/modalAction';

function SignUpForm() {
  // Задаем стейт, собираем данные формы
  const [userSignUp, setUserSignUp] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Создаем диспатч из хука
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Функция отлавливает изменения импутов по имени и кладет велью в стейт
  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Хендлер на переключение состояния модала
  const clickHandler = (e) => {
    dispatch(showModal('login'));
  };

  // Функиця отлавливает сабмит
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUp(userSignUp, navigate)); // Отправляем экшен на редюсер
    dispatch(showModal(false)); // сбрасываем стейт модала
    setUserSignUp({
      name: '',
      email: '',
      password: '',
    }); // Сбрасываем данные форм
  };

  return (
    <div className={styles.boxAuth}>
      <div className={styles.modalHeader}>
        <h5 className={styles.heading}>Регистрация</h5>
      </div>
      <form
        name="signup"
        onSubmit={submitHandler}
        className={styles.formDiv}
      >
        <div className={styles.inputDiv}>
          <label
            htmlFor="nameSignup"
            className={styles.formLabel}
          >Имя
          </label>
          <input
            name="name"
            onChange={changeHandler}
            value={userSignUp.name}
            autoComplete="username"
            type="text"
            className={styles.input}
            placeholder="Алексей"
            id="nameSignup"
          />
        </div>
        <div className={styles.inputDiv}>
          <label
            htmlFor="emailSignup"
            className={styles.formLabel}
          >Почта
          </label>
          <input
            name="email"
            onChange={changeHandler}
            value={userSignUp.email}
            autoComplete="user-email"
            type="email"
            className={styles.input}
            placeholder="example@example.com"
            id="emailSignup"
          />
        </div>
        <div className={styles.inputDiv}>
          <label
            htmlFor="passwordSignup"
            className={styles.formLabel}
          >Пароль
          </label>
          <input
            name="password"
            onChange={changeHandler}
            value={userSignUp.password}
            autoComplete="current-password"
            type="password"
            className={styles.input}
            placeholder="********"
            id="passwordSignup"
          />
        </div>
        <button
          type="submit"
          className={styles.mainBtn}
        >Зарегестрироваться
        </button>
      </form>
      <span className={styles.textSpan}>Уже есть аккаунт?
        <button
          type="button"
          className={styles.txtBtn2}
          onClick={clickHandler}
        >Войти
        </button>
      </span>
    </div>
  );
}

export default SignUpForm;

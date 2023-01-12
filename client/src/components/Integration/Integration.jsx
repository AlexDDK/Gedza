import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { YCLogForm } from '../../redux/actions/userAction';
import SmallNavBar from '../Navbars/SmallNavBar';
import ModalSmall from '../Modals/ModalSmall';
import Loader from '../Loader/Loader';
import { enableLoader, disableLoader } from '../../redux/actions/loaderAction';

import styles from './Integration.module.css';

export default function Intergation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loader = useSelector((store) => store.loader); // Подписываемся на стор лоадера
  const modal = useSelector((store) => store.modal); // Подписываемся на стор с модалом
  const [YClientLogPas, setYClientLogPas] = useState({
    login: '',
    password: '',
  });

  // Хендлер изменения инпутов
  const changeHandler = (e) => {
    setYClientLogPas((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Хендлер субмита
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(enableLoader());
    dispatch(YCLogForm(YClientLogPas, navigate));
    setTimeout(() => { dispatch(disableLoader()); }, 3000);
    // navigate('/main');
    // dispatch(salonThunk());
  };

  return (
    <div className={styles.background}>
      <SmallNavBar />
      {modal && <ModalSmall />}
      {loader && !modal && <Loader />}
      <form
        className={styles.formDiv}
        onSubmit={submitHandler}
      >
        <div className={styles.header}>
          <div className={styles.headerBox}>
            <img className={styles.ycLogo} src="img/YClients_logo.png" alt="yclients logo" />
            <h3 className={styles.h3Integr}>Интеграция</h3>
          </div>
          <h4>Чтобы продолжить, пожалуйста,
            <br />введите свои данные от YClients
          </h4>
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.formLabel} htmlFor="login">Логин</label>

          <input
            name="login"
            onChange={changeHandler}
            value={YClientLogPas.login}
            autoComplete="user-login"
            className={styles.input}
            placeholder="email@email.ru"
            type="text"
            id="login"
          />

        </div>
        <div className={styles.inputDiv}>
          <label className={styles.formLabel} htmlFor="password">Пароль</label>

          <input
            name="password"
            onChange={changeHandler}
            value={YClientLogPas.password}
            autoComplete="current-password"
            className={styles.input}
            placeholder="********"
            type="password"
            id="password"
          />

        </div>
        <button
          type="submit"
          className={styles.mainBtn}
        >Подключить
        </button>
        <span className={styles.textSpan}>
          Мы не храним ваш пароль и не имеем
          <br /> доступа к данным ваших клиентов
        </span>
      </form>
    </div>
  );
}

/* eslint-disable react/button-has-type */
/* eslint-disable import/no-duplicates */
//   Модал аунтификации
import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ModalAuth.module.css';
import SignUpForm from '../Forms/SignUpForm';
import LogInForm from '../Forms/LogInForm';
import Error from '../Error/Error';
import { showModal } from '../../redux/actions/modalAction';
import { showError } from '../../redux/actions/errorAction';

function ModalAuth() {
  const dispatch = useDispatch();
  const modal = useSelector((store) => store.modal); // Подписываемся на состояние модала в сторе

  // хендлер закрытия модала
  const closeHandler = () => {
    dispatch(showError('')); // Сбрасываем сообщение об ошибке
    dispatch(showModal(false)); // Передаем значение, открывающие форму регистрации
  };
  return (
    <>
      <div className={styles.darkBG} onClick={closeHandler} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <button
            className={styles.closeBtn}
            onClick={closeHandler}
          >
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          {modal === 'signup'
            ? (<SignUpForm />)
            : (<></>) }
          {modal === 'login'
            ? (<LogInForm />)
            : (<></>) }
          {modal === 'error'
            ? (<Error />)
            : (<></>) }
        </div>
      </div>
    </>
  );
}

export default ModalAuth;

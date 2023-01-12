/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useDispatch } from 'react-redux';
import { TbLogout } from 'react-icons/tb';
import { logOut } from '../../redux/actions/userAction';
import styles from './Navbar.module.css';

function SmallNavBar() {
  const dispatch = useDispatch();

  // Хендлер на ллогаут
  const logoutHandler = (e) => {
    dispatch(logOut());
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="img/Name_gedza.svg" alt="logo" />
      <div className={styles.buttonsDiv}>
        <button
          type="button"
          onClick={logoutHandler}
          className={styles.logoutBtn}
        ><TbLogout className={styles.iconMain} />
        </button>
      </div>

    </div>
  );
}

export default SmallNavBar;

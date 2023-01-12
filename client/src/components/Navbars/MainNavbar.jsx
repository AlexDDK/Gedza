/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TbLogout } from 'react-icons/tb';
import { changeUrl } from '../../redux/actions/urlAction';
import { logOut } from '../../redux/actions/userAction';
import styles from './Navbar.module.css';
import { changeTemplateAC, changeTemplateThunk } from '../../redux/actions/templateAction';

function MainNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const url = useSelector((store) => store.url);
  const template = useSelector((store) => store.template);
  const [show, setShow] = useState(false); // Стейт отвечает за показ инпута
  const [value, setValue] = useState(''); // Стейт отвечает за редактирования Url
  const user_id = user.id;

  // Хендлер клика по иконке редактирования
  const editHandler = () => {
    setValue(url);
    setShow(true);
  };

  // Хендлер изменений инпута
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  // Хендлер на сабмит формы
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changeUrl({ user_id, value }));
    setShow(false);
  };

  // Хендлер на ллогаут
  const logoutHandler = (e) => {
    dispatch(logOut(navigate));
  };

  const changeTheme = () => (
    template === 1 ? dispatch(changeTemplateThunk(2)) : dispatch(changeTemplateThunk(1))
  );

  return (
    <div className={styles.mainNavbar}>
      <div className={styles.navbarHeader}>
        <img className={styles.logo} src="img/Name_gedza.svg" alt="logo" />
        <h2 className={styles.h2MainPage}>Редактор</h2>
        <div className={styles.buttonsDiv}>
          <button
            type="button"
            onClick={logoutHandler}
            className={styles.logoutBtn}
          ><TbLogout className={styles.iconMain} />
          </button>
        </div>
      </div>

      <div className={styles.templateDiv}>
        <span className={styles.spanText}>
          Салон красоты
        </span>
        <label className={styles.label}>
          <div className={styles.toggle}>
            <input onChange={changeTheme} className={styles['toggle-state']} type="checkbox" name="check" value="check" checked={template === 2} />
            <div className={styles.indicator} />
          </div>
        </label>
        <span className={styles.spanText}>
          Барбершоп
        </span>
      </div>

      <div className={styles.urlDiv}>
        <div className={styles.dots}>
          <div className={`${styles.dot} ${styles.redDot}`} />
          <div className={`${styles.dot} ${styles.yelDot}`} />
          <div className={`${styles.dot} ${styles.greenDot}`} />
        </div>
        <div className={styles.addressContent}>
          <span className={styles.spanText}>
            Адрес вашего сайта <b>gedza.site/</b>
          </span>
          { show === true
            ? (
              <form
                name="ulrName"
                className={styles.siteAdress}
                onSubmit={submitHandler}
              >
                <input
                  name="newUrl"
                  value={value}
                  onChange={changeHandler}
                  type="text"
                  autoFocus
                  className={styles.inputNoteColumn}
                />
                <button type="submit" className={styles.btn}>
                  <img
                    className={styles.editIcon2}
                    src="img/edit_3_line.svg"
                    alt="edit icon"
                  />
                </button>
              </form>
            )
            : (
              <div className={styles.siteAdress}>
                <h4 className={styles.h4Nav}>{url}</h4>
                <img
                  className={styles.editIcon}
                  onClick={editHandler}
                  src="img/edit_2_line.svg"
                  alt="edit icon"
                />
              </div>
            )}
        </div>
      </div>

    </div>
  );
}

export default MainNavbar;

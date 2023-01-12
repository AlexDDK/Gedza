// Главная страница авторизованного пользователя
import React from 'react';
import { useSelector } from 'react-redux';
import MainNavbar from '../Navbars/MainNavbar';
import TemplateLight from '../TemplateLight/TemplateLight';
import TemplateDark from '../TemplateDark/TemplateDark';
import ModalSmall from '../Modals/ModalSmall';
import FooterMainPage from '../Footers/FooterMainPage';

import styles from './Main.module.css';

function Main() {
  const modal = useSelector((store) => store.modal); // Подписываемся на стор с модалом
  const template = useSelector((store) => store.template);

  return (

    <div className={styles.background}>
      {modal && <ModalSmall />}
      <MainNavbar />
      <div className={styles.container}>
        {(template === 1) ? <TemplateLight /> : <TemplateDark /> }
      </div>
      <FooterMainPage />
    </div>
  );
}

export default Main;

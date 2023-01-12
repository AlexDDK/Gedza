import React from 'react';
import styles from './FooterMainPage.module.css';

function FooterMainPage() {
  return (
    <div className={styles.footerContainer}>
      <h4 className={styles.h4Container}>Спасибо, что пользуетесь сервисом<br />
        Команда GEDZA.SITE
      </h4>
    </div>
  );
}

export default FooterMainPage;

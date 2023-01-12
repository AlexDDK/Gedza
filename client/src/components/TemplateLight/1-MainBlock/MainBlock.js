import React from 'react';
import { BsTelegram, BsFillTelephoneFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { IoLogoWhatsapp } from 'react-icons/io';
import styles from './MainBlock.module.css';
import WriteButton from '../../Buttons/WriteButton';

function MainBlock() {
  const salons = useSelector((store) => store.salon);

  return (
    <div className={styles.mainPageConteiner}>

      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h4 className={styles.h4MainBlock}>{salons[0]?.title}</h4>
          <div className={styles.menu}>
            <a href="#services"><button type="button" className={styles.btnText}>Услуги</button></a>
            <a href="#photos"><button type="button" className={styles.btnText}>Лук бук</button></a>
            <a href="#masters"><button type="button" className={styles.btnText}>Персонал</button></a>
            <a href="#contacs"><button type="button" className={styles.btnText}>Контакты</button></a>
          </div>
          <div className={styles.btnDiv}>
            <a
              href={`http://t.me/${salons[0]?.telegram}`}
              target="_blank"
              rel="noreferrer"
            > <BsTelegram className={styles.icon} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${salons[0]?.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            > <IoLogoWhatsapp className={styles.iconW} />
            </a>
            <a
              href={`https://vk.com/${salons[0]?.vk}`}
              target="_blank"
              rel="noreferrer"
            > <img src="/img/vkontakte_line_white.svg" className={styles.iconVk} alt="vk logo" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.contentDiv}>
        <h1 className={styles.h1MainBlock}>Ваша идеальная стрижка</h1>
        <WriteButton />
        {/* <button type="button" className={styles.mainBlockBtn}>Записаться</button> */}
      </div>

      <div className={styles.mainFooter}>
        <div className={styles.divAnimat}>
          <BsFillTelephoneFill className={styles.iconPhone} />
        </div>
        <h4 className={styles.h4MainBlock}>{salons[0]?.phone}</h4>
      </div>
    </div>
  );
}

export default MainBlock;

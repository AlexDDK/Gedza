/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {
  BsFacebook, BsInstagram, BsTelegram, BsFillTelephoneFill,
} from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaViber } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styles from './ContactBlock.module.css';
import YMAP from '../../YMAP/YMAP';
import Address from './Address';

function ContactBlock() {
  const salons = useSelector((store) => store.salon);

  return (
    <div className={styles.contactPageConteiner}>
      <a name="contacs" />
      <div className={styles.contactContent}>
        <div className={styles.mainFooter}>
          {
            salons.length > 1
              ? (<h4 className={styles.h4MainBlock}>Адреса салонов</h4>)
              : (<h4 className={styles.h4MainBlock}>Адрес салона</h4>)
          }
        </div>
        <div className={styles.addressContainer}>
          {
          salons.map((el) => <Address key={el.id} salon={el} />)
          }
        </div>

        <div className={styles.btnDiv}>
          {/* <BsFacebook className={styles.icon} />
          <BsInstagram className={styles.icon} /> */}
          <a
            href={`http://t.me/${salons[0]?.telegram}`}
            target="_blank"
            rel="noreferrer"
          > <BsTelegram className={styles.icon} />
          </a>
          {/* <BsTelegram className={styles.icon} /> */}
          <a
            href={`https://api.whatsapp.com/send?phone=${salons[0]?.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          > <IoLogoWhatsapp className={styles.iconW} />
          </a>
          {/* <IoLogoWhatsapp className={styles.icon} /> */}
          <a
            href={`https://vk.com/${salons[0]?.vk}`}
            target="_blank"
            rel="noreferrer"
          > <img src="/img/vkontakte_line_white.svg" className={styles.iconVk} alt="vk logo" />
          </a>

          {/* <FaViber className={styles.icon} /> */}
        </div>

        <div className={styles.mainFooter}>
          <BsFillTelephoneFill className={styles.icon} />
          <h4 className={styles.h4MainBlock}>{salons[0]?.phone}</h4>
        </div>
      </div>
    </div>
  );
}

export default ContactBlock;

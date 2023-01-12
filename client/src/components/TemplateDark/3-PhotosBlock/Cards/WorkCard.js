/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './WorkCard.module.css';

function WorkCard(props) {
  return (
    <div className={styles.photoCard}>
      <img className={styles.imgCard} src={props.image} alt="photo of work" />
    </div>
  );
}

export default WorkCard;

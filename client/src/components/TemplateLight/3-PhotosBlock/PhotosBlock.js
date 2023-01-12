/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import UploadImages from '../../UploadImages/UploadImages';
import styles from './PhotosBlock.module.css';
import WorkCard from './Cards/WorkCard';

function PhotosBlock() {
  const photos = useSelector((store) => store.images);
  const location = useLocation();

  const url = location.pathname.replace(/\//g, '');
  let photoDB = [];
  if (photos.length > 6) {
    photoDB = photos.slice(0, 6);
  } else {
    photoDB = [...photos];
  }

  const { REACT_APP_IMGHOST: imgHost } = process.env;

  return (
    <div className={styles.mainPhotoConteiner}>
      <a name="photos" />
      <div className={styles.photoHeader}>
        <h2 className={styles.h2Photo}>Наши работы</h2>
      </div>
      <div className={styles.photoList}>
        {
          photoDB.length > 1
            ? (photoDB.map((el) => <WorkCard key={el.id} image={`${imgHost}${el.img}`} />))
            : (
              <h5 className={styles.h5MainBlock}>Здесь пока ничего нет.
                <br />Добавьте фото или отключите блок
              </h5>
            )
          }
      </div>
      { url === 'main'
        ? (
          <div className={styles.uploadBlock}>
            <UploadImages />
          </div>
        )
        : (<></>)}
    </div>
  );
}

export default PhotosBlock;

import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imageReadThunk, imageWriteThunk } from '../../redux/actions/imageAction';
import {
  writeImagesToDb,
} from '../../config/endPoints';
import styles from './UploadImages.module.css';

function UploadImages() {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user); // Подписываемся на стор юзера

  // Хендлер изменения
  const onChange = (e) => {
    setFiles(e.target.files);
  };

  // Хендлер сабмита
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.values(files).forEach((file) => {
      formData.append('uploadImages', file);
    });

    try {
      const response = await fetch(writeImagesToDb(), {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      e.target.uploadImages.value = null;
      if (response.ok) {
        dispatch(imageReadThunk(user.id)); // payload - user_id

        response.json().then((res) => {
          console.log(res);
          dispatch(imageWriteThunk(res));
        });
      }
    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <form
      className={styles.submitForm}
      onSubmit={onSubmit}
    >
      <div>
        <label htmlFor="file" className={styles.mainBtn}>Выбрать</label>
        <input
          type="file"
          id="file"
          name="uploadImages"
          multiple
          onChange={onChange}
          hidden
        />
        {/* </button> */}
      </div>
      <input
        className={styles.mainBtn}
        type="submit"
        value="Upload"
        id="upload"
        hidden
      />
    </form>
  );
}

export default UploadImages;

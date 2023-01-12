/* eslint-disable consistent-return */
// import { SET_REVIEW } from '../types/reviewTypes'; // EDIT TYPES!
import { useSelector } from 'react-redux';
import {
  takeImagesFromDb,
} from '../../config/endPoints';

export const setImageAC = (payload) => ({ type: 'add_Images', payload });
export const clearImageAC = (payload) => ({ type: 'clear_Images', payload });
export const uploadImageAC = (payload) => ({ type: 'upload_Images', payload });

export const imageTakeFetch = async (id) => {
  const response = await fetch(takeImagesFromDb(id), {
    method: 'GET',
    credentials: 'include',
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

async function loopArray(array, dispatch) {
  // eslint-disable-next-line no-return-assign
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    dispatch(setImageAC(item));
  }
}

export const imageReadThunk = (payload) => async (dispatch) => {
  // const images = useSelector((store) => store.images);
  dispatch(clearImageAC());
  imageTakeFetch(payload).then((resp) => {
    loopArray(resp, dispatch);
  });
};

export const imageWriteThunk = (payload) => async (dispatch) => {
  dispatch(uploadImageAC(payload));
};

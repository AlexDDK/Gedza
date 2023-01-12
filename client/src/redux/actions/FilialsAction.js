/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
import {
  dbSalon, takeSalons, takeSalonsFromDB, getUserByUrl,
} from '../../config/endPoints';
import { SET_SALON } from '../types/salonTypes';
import { bookFormThunk, bookReadThunk } from './bookFormAction';
import { categoryThunk, categoryReadThunk } from './categoryAction';
import { masterReadThunk, masterThunk } from './EmpAction';
import { imageReadThunk } from './imageAction';
import { reviewThunk, reviewReadThunk } from './reviewAction';
import { serviceReadThunk } from './serviceAction';
import { changeTemplateAC } from './templateAction';

const { REACT_APP_PARTNER_TOKEN: parToken } = process.env; // импортируем сслыки на эндпоинты бека

export const setSalonsAC = (payload) => ({ type: SET_SALON, payload });

export const salonFetchFromYC = async (payload) => {
  const response = await fetch(takeSalons(), {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.yclients.v2+json',
      'Content-Type': 'application/json',
      Authorization: `${parToken},${payload}`,
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data.data;
  }
};

export const salonFetchToDB = async (arr) => {
  const response = await fetch(dbSalon(), {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arr),
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};

async function processArray(array, dispatch, payload) {
  // eslint-disable-next-line prefer-destructuring
  const length = array.length;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    salonFetchToDB(item).then((resp) => {
      dispatch(setSalonsAC(resp));
      const itemData = { salon_id: resp.id, companyId: resp.yc_id, userToken: payload };
      dispatch(masterThunk(itemData));
      dispatch(categoryThunk(itemData));
      dispatch(reviewThunk(itemData));
      dispatch(bookFormThunk(itemData, length));
    });
  }
}

async function loopArray(array, dispatch) {
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    dispatch(setSalonsAC(item));
  }
}

export const salonTakeFetch = async (id) => {
  const response = await fetch(takeSalonsFromDB(id), {
    method: 'GET',
    credentials: 'include',
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

export const salonThunk = (payload) => async (dispatch) => {
  const salonYc = await salonFetchFromYC(payload);
  const data = await processArray(salonYc, dispatch, payload);
};

// Танка для обращения к БД при логине юзера
export const salonReadThunk = (payload) => async (dispatch) => {
  const salonDB = await salonTakeFetch(payload);
  await loopArray(salonDB, dispatch);
  dispatch(masterReadThunk(payload));
  dispatch(categoryReadThunk(payload));
  dispatch(serviceReadThunk(payload));
  dispatch(reviewReadThunk(payload));
  dispatch(bookReadThunk(payload));
  dispatch(imageReadThunk(payload));
};

// Получение ID Юзера, которому принадлежит URL
async function getUserIdByUrl(url) {
  const response = await fetch(getUserByUrl(url), {
    method: 'GET',
    credentials: 'include',
  });

  if (response.ok) {
    const userId = await response.json();
    return userId;
  }
}

// Танка на запрос данных для внешней странице OUTER Payload = url
export const clientSalonReadThunk = (url, navigate) => async (dispatch) => {
  const urldata = await getUserIdByUrl(url); // Нашли ID Usera по URL

  if (urldata) { // Если юзер сущесвтует — загружаем стор
    const template = urldata?.template;
    const payload = urldata?.user_id;
    dispatch(changeTemplateAC(template)); // Записываем в редакс темплейт юзера
    const salonDB = await salonTakeFetch(payload);
    await loopArray(salonDB, dispatch);
    dispatch(masterReadThunk(payload));
    dispatch(categoryReadThunk(payload));
    dispatch(serviceReadThunk(payload));
    dispatch(reviewReadThunk(payload));
    dispatch(bookReadThunk(payload));
    dispatch(imageReadThunk(payload));
  } else { // Если юзер не найден — переводим на page404
    navigate('/page404');
  }
};

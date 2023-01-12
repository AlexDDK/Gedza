/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import * as endPoints from '../../config/endPoints'; // импортируем сслыки на эндпоинты бека
import { SET_CATEGORY } from '../types/categoryTypes';
import {
  takeCatsFromDB,
} from '../../config/endPoints';
import { serviceThunk } from './serviceAction';

const { REACT_APP_PARTNER_TOKEN: parToken } = process.env;

export const setCategoryAC = (payload) => ({ type: SET_CATEGORY, payload });

export const categoryFetchFromYC = async (payload) => {
  const response = await fetch(endPoints.takeCategories(payload.companyId), {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/vnd.yclients.v2+json',
      Authorization: `${parToken},${payload.userToken}`,
    },
  });
  if (response.ok) {
    const categories = await response.json();
    return categories.data;
  }
};

export const categoryFetchToDB = async (arr) => {
  const response = await fetch(endPoints.writeToDbCats(), {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arr),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

export const categoryTakeFetch = async (id) => {
  const response = await fetch(takeCatsFromDB(id), {
    method: 'GET',
    credentials: 'include',
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

async function categoryArray(array, dispatch, salonId) {
  // eslint-disable-next-line no-return-assign
  array.map((i) => i.salon_id = salonId);
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    categoryFetchToDB(item).then((resp) => {
      dispatch(setCategoryAC(resp));
    });
  }
}

async function loopArray(array, dispatch, salonId) {
  // eslint-disable-next-line no-return-assign
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    dispatch(setCategoryAC(item));
  }
}

export const categoryThunk = (payload) => async (dispatch) => {
  categoryFetchFromYC(payload).then((resp) => {
    categoryArray(resp, dispatch, payload.salon_id);
  }).then((resp) => {
    dispatch(serviceThunk(payload));
  });
};

export const categoryReadThunk = (payload) => async (dispatch) => {
  const categoryDB = await categoryTakeFetch(payload);
  await loopArray(categoryDB, dispatch);
};

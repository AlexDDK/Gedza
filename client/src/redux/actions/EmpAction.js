/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import * as endPoints from '../../config/endPoints'; // импортируем сслыки на эндпоинты бека
import { SET_MASTER } from '../types/masterTypes';
import {
  takeMasterFromDB,
} from '../../config/endPoints';

const { REACT_APP_PARTNER_TOKEN: parToken } = process.env;

export const setMastersAC = (payload) => ({ type: SET_MASTER, payload });

export const masterFetchFromYC = async (payload) => {
  const response = await fetch(endPoints.takeMasters(payload.companyId), {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/vnd.yclients.v2+json',
      Authorization: `${parToken},${payload.userToken}`,
    },
  });
  if (response.ok) {
    const masters = await response.json();
    return masters.data;
  }
};

export const masterFetchToDB = async (arr) => {
  const response = await fetch(endPoints.writeToDbMaster(), {
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

export const masterTakeFetch = async (id) => {
  const response = await fetch(takeMasterFromDB(id), {
    method: 'GET',
    credentials: 'include',
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

async function masterArray(array, dispatch, salonId) {
  // eslint-disable-next-line no-return-assign
  array.map((i) => i.salon_id = salonId);
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    masterFetchToDB(item).then((resp) => {
      dispatch(setMastersAC(resp));
    });
  }
}

async function loopArray(array, dispatch) {
  // eslint-disable-next-line no-return-assign
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    dispatch(setMastersAC(item));
  }
}

export const masterThunk = (payload) => async (dispatch) => {
  const master = await masterFetchFromYC(payload);
  const data = await masterArray(master, dispatch, payload.salon_id);
};

export const masterReadThunk = (payload) => async (dispatch) => {
  const masterDB = await masterTakeFetch(payload);
  await loopArray(masterDB, dispatch);
};

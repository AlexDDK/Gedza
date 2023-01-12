/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import * as endPoints from '../../config/endPoints'; // импортируем сслыки на эндпоинты бека
import { SET_SERVICE } from '../types/serviceTypes';
import {
  takeServiceFromDB, writeToDbService, takeServices,
} from '../../config/endPoints';

const { REACT_APP_PARTNER_TOKEN: parToken } = process.env;

export const setServiceAC = (payload) => ({ type: SET_SERVICE, payload });

export const serviceFetchFromYC = async (payload) => {
  const response = await fetch(takeServices(payload.companyId), {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/vnd.yclients.v2+json',
      Authorization: `${parToken},${payload.userToken}`,
    },
  });
  if (response.ok) {
    const services = await response.json();
    return services.data;
  }
};

export const serviceFetchToDB = async (arr) => {
  const response = await fetch(writeToDbService(), {
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

export const serviceTakeFetch = async (id) => {
  const response = await fetch(takeServiceFromDB(id), {
    method: 'GET',
    credentials: 'include',
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

async function serviceArray(array, dispatch, salonId) {
  // eslint-disable-next-line no-return-assign
  array.map((i) => i.salon_id = salonId);
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    serviceFetchToDB(item).then((resp) => {
      dispatch(setServiceAC(resp));
    });
  }
}

async function loopArray(array, dispatch) {
  // eslint-disable-next-line no-return-assign
  // array.map((i) => i.salon_id = salonId);
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    dispatch(setServiceAC(item));
  }
}

export const serviceThunk = (payload) => async (dispatch) => {
  serviceFetchFromYC(payload).then((resp) => {
    serviceArray(resp, dispatch, payload.salon_id);
  });
};

export const serviceReadThunk = (payload) => async (dispatch) => {
  const services = await serviceTakeFetch(payload);
  await loopArray(services, dispatch);
};

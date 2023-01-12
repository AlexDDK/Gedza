/* eslint-disable consistent-return */
import { dbSalon, takeSalonsFromDB, ycSalon } from '../../config/endPoints';
import { SET_SALON } from '../types/salonTypes';

const { PARTNER_TOKEN } = process.env;

export const setSalontAC = (payload) => ({ type: SET_SALON, payload });

export const salonFetchToYC = async (id) => {
  const response = await fetch(ycSalon(+id), {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.yclients.v2+json',
      'Content-Type': 'application/json',
      Authorization: 'fyxzujwk8hreftd2yrw6',
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

export const salonTakeFetch = async (arr) => {
  const response = await fetch(takeSalonsFromDB());

  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

export const salonThunk = (payload) => async (dispatch) => {
  const salonYc = await salonFetchToYC(payload);
  // processArray(salonYc);
  const data = await salonFetchToDB(salonYc);
  dispatch(setSalontAC(data));
  // dispatch(masterThunk(input)); // передать сюда companyId , userToken
};

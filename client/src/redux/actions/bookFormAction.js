/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { SETBOOK } from '../types/allBookTypes';
import {
  takeBookForms, checkBook, writeToDbBook, takeBooksFromDb,
} from '../../config/endPoints';
// eslint-disable-next-line import/no-cycle
import { changeUser } from './userAction';

const { REACT_APP_PARTNER_TOKEN: parToken } = process.env;

export const setBookFormAC = (payload) => ({ type: SETBOOK, payload });

export const bookFormFetchFromYC = async (payload) => {
  const response = await fetch(takeBookForms(payload.companyId), {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/vnd.yclients.v2+json',
      Authorization: `${parToken},${payload.userToken}`,
    },
  });
  if (response.ok) {
    const books = await response.json();
    return books.data;
  }
};

export const changeBookFormUser = async (bookForm, dispatch) => {
  const response = await fetch(writeToDbBook(), {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bookForm }),
  });
  if (response.ok) {
    dispatch(setBookFormAC(bookForm));
  }
};

export const checkOnGroupBook = async (payload, id, dispatch) => {
  const response = await fetch(checkBook(id), {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/vnd.yclients.v2+json',
      Authorization: `${parToken},${payload.userToken}`,
    },
  });
  if (response.ok) {
    const books = await response.json();
    if (books.data.group_id !== 0) {
      dispatch(setBookFormAC(id));
      changeBookFormUser(id, dispatch); // LAST
    }
  }
};

export const bookTakeFetch = async (id) => {
  const response = await fetch(takeBooksFromDb(id), {
    method: 'GET',
    credentials: 'include',
  });
  if (response.ok) {
    const data = await response.json();
    return data.bookForm;
  }
};

async function loopArray(array, payload, dispatch) {
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    checkOnGroupBook(payload, item.id, dispatch);
  }
}

// payload = {salon_id, companyId, userToken}
export const bookFormThunk = (payload, length) => async (dispatch) => {
  bookFormFetchFromYC(payload).then((response) => {
    if (length === 1) {
      // dispatch(changeBookFormUser(response[0].id, dispatch)); //Last
      changeBookFormUser(response[0].id, dispatch);
    } else {
      loopArray(response, payload, dispatch);
    }
  });
};

export const bookReadThunk = (payload) => async (dispatch) => {
  bookTakeFetch(payload).then((resp) => {
    dispatch(setBookFormAC(resp));
  });
};

/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import * as endPoints from '../../config/endPoints'; // импортируем сслыки на эндпоинты бека
import { SET_REVIEW } from '../types/reviewTypes';
import {
  takeReviewsFromDb,
} from '../../config/endPoints';

const { REACT_APP_PARTNER_TOKEN: parToken } = process.env;

export const setReviewAC = (payload) => ({ type: SET_REVIEW, payload });

export const reviewFetchFromYC = async (payload) => {
  const response = await fetch(endPoints.takeReviews(payload.companyId), {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/vnd.yclients.v2+json',
      Authorization: `${parToken},${payload.userToken}`,
    },
  });
  if (response.ok) {
    const review = await response.json();
    return review.data;
  }
};

export const reviewFetchToDB = async (arr) => {
  const response = await fetch(endPoints.writeToDbReviews(), {
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

export const reviewTakeFetch = async (id) => {
  const response = await fetch(takeReviewsFromDb(id), {
    method: 'GET',
    credentials: 'include',
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

async function reviewArray(array, dispatch, salonId) {
  // eslint-disable-next-line no-return-assign
  array.map((i) => i.salon_id = salonId);
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    reviewFetchToDB(item).then((resp) => {
      dispatch(setReviewAC(resp));
    });
  }
}

async function loopArray(array, dispatch) {
  // eslint-disable-next-line no-return-assign
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    dispatch(setReviewAC(item));
  }
}

export const reviewThunk = (payload) => async (dispatch) => {
  reviewFetchFromYC(payload).then((resp) => {
    if (resp.length !== 0) {
      reviewArray(resp, dispatch, payload.salon_id);
    }
  });
};

export const reviewReadThunk = (payload) => async (dispatch) => {
  reviewTakeFetch(payload).then((resp) => {
    if (resp.length !== 0) {
      loopArray(resp, dispatch);
    }
  });
};

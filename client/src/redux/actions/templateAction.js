/* eslint-disable import/prefer-default-export */
import { CHANGE_THEME, GET_THEME } from '../types/templateTypes';
import * as endPoints from '../../config/endPoints'; // импортируем сслыки на эндпоинты бека

export const changeTemplateAC = (payload) => ({ type: CHANGE_THEME, payload });
export const getTemplateAC = (payload) => ({ type: GET_THEME, payload });

// Танка на изменение темплейта салона
export const changeTemplateThunk = (payload) => async (dispatch) => {
  const response = await fetch(endPoints.putTemplate(), {
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ payload }),
  });

  if (response.ok) {
    dispatch(changeTemplateAC(payload));
  }
};

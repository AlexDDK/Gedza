/* eslint-disable camelcase */
// Задаем экшены — типы запросов на редюсеры.

import { SET_URL, GET_URL } from '../types/urlTypes'; // Импортируем типы экшенов
import * as endPoints from '../../config/endPoints'; // импортируем сслыки на эндпоинты бека
import { showModal } from './modalAction';
import { showError } from './errorAction';
import { getTemplateAC } from './templateAction';

// Функция создания экшенов для изменения URL
export const setUrlAC = (newUrl) => ({
  type: SET_URL,
  payload: newUrl,
});

// Танки для работы с блоком URL

// Изменение URL
export const changeUrl = (payload) => async (dispatch) => {
  const { user_id, value } = payload; // Делаем диструктуризацию
  const newUrl = value.trim().toLowerCase(); // Подготалвиваем url для записи в БД
  const response = await fetch(endPoints.putUrl(), {
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ user_id, newUrl }),
  });

  if (response.ok) {
    dispatch(setUrlAC(newUrl));
  } else {
    const error = await response.json();
    dispatch(showError(error));
    dispatch(showModal('error'));
  }
};

// Получение URL
export const getUrl = (payload) => async (dispatch) => {
  const response = await fetch(endPoints.getUrl(payload), {
    method: 'GET',
    credentials: 'include',
  });

  if (response.ok) {
    const { url, template } = await response.json();
    dispatch(setUrlAC(url));
    dispatch(getTemplateAC(template));
  } else {
    const error = await response.json();
    dispatch(showError(error));
    dispatch(showModal('error'));
  }
};

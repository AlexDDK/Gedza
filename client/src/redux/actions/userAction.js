/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
// Задаем экшены — типы запросов на редюсеры.

import { SET_USER, LOGOUT_USER, UPDATE_USER } from '../types/userTypes'; // Импортируем типы экшенов
import * as endPoints from '../../config/endPoints'; // импортируем сслыки на эндпоинты бека
import { salonReadThunk, salonThunk } from './FilialsAction';
import { getUrl } from './urlAction';
import { showError } from './errorAction';
import { showModal } from './modalAction';

const { REACT_APP_PARTNER_TOKEN, REACT_APP_YCPATH } = process.env;

// Функции создатели экшенов
export const setUserAC = (user) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUserAC = () => ({
  type: LOGOUT_USER,
});

export const updateUserAC = (yc_id) => ({
  type: UPDATE_USER,
  payload: yc_id,
});

// Танки
// Танк на регистрацию пользователя
export const signUp = (payload, navigate) => async (dispatch) => {
  const response = await fetch(endPoints.signUp(), {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include', // нужна для защиты
    body: JSON.stringify(payload), // передаем полезную нагрузку
  });

  if (response.ok) {
    const user = await response.json();
    dispatch(setUserAC(user));
    dispatch(getUrl(user.id));
    navigate('/integration');
  } else {
    const error = await response.json();
    dispatch(showError(error));
    dispatch(showModal('error'));
  }
};

// Танк для аунтификации
export const logIn = (payload, navigate) => async (dispatch) => {
  const response = await fetch(endPoints.logIn(), {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const user = await response.json();
    dispatch(setUserAC(user));
    dispatch(getUrl(user.id));
    dispatch(salonReadThunk(user.id));
    navigate('/main');
  } else {
    const error = await response.json();
    dispatch(showError(error));
    dispatch(showModal('error'));
  }
};

// Танк для логаута
export const logOut = (payload, navigate) => async (dispatch) => {
  const response = await fetch(endPoints.logOut(), {
    credentials: 'include',
  });

  if (response.ok) {
    dispatch(deleteUserAC()); // Устанавливаем состояние пустого юзера
    window.location('/'); // Reload page
  }
};

// Танк для добавления yc_user_token и yc_id
export const changeUser = (payload, navigate) => async (dispatch) => {
  const { yc_id } = payload;
  const response = await fetch(endPoints.putUser(), {
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const updateUser = await response.json();
    dispatch(updateUserAC(yc_id));
    navigate('/main');
  } else {
    const error = await response.json();
    dispatch(showError(error));
    dispatch(showModal('error'));
  }
};

// Танк для того, чтобы оставаться в системе
export const auth = (payload, navigate) => async (dispatch) => {
  const response = await fetch(endPoints.isAyth(), {
    credentials: 'include',
  });

  if (response.ok) {
    const user = await response.json();
    dispatch(setUserAC(user));
    dispatch(salonReadThunk(user.id));
    dispatch(getUrl(user.id));
    navigate('/main');
  }
};

// Для получения данных для YClients
export const YCLogForm = (payload, navigate) => async (dispatch) => {
  const response = await fetch(`${REACT_APP_YCPATH}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${REACT_APP_PARTNER_TOKEN}`,
      Accept: 'application/vnd.yclients.v2+json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const { data } = await response.json();
    const yc_user_token = data.user_token;
    const yc_id = data.id;
    dispatch(salonThunk(yc_user_token));
    dispatch(changeUser({ yc_user_token, yc_id }, navigate));
  } else {
    const error = 'Проблемы с интеграцией. Проверьте логин и пароль';
    dispatch(showError(error));
    dispatch(showModal('error'));
  }
};

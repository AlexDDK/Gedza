// Редюсер для работы со слайсом адресов сайтов URL.

import { SET_URL, GET_URL } from '../types/urlTypes'; // Импортируем типы экшенов

const urlReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_URL: // Кейс перемиенования URL
      return payload;

    default:
      return state; // по дефолту возращаем стейт
  }
};

export default urlReducer;

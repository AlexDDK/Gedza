// Редюсер для работы со слайсом юзеров.
// Возварщает новое состояние стора, в зависимости от того, какой тип экшена ей пришел.

import { SET_USER, LOGOUT_USER, UPDATE_USER } from '../types/userTypes'; // Импортируем типы экшенов

const userReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_USER: // Кейс создания или входа юзера
      return payload; // Будем возвращать то, что передадим

    case LOGOUT_USER: // Кейс создания или входа юзера
      return null;

    case UPDATE_USER:
      return { ...state, crm: payload };

    default:
      return state; // по дефолту возращаем стейт
  }
};

export default userReducer;

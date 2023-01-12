import { SET_ERROR } from '../types/errorTypes';

// Задаем экшены — типы запросов на редюсеры

export const errorlAC = (payload) => ({
  type: SET_ERROR,
  payload,
});

// Танки
// Танка на передачу ошибки
export const showError = (payload) => (dispatch) => {
  dispatch(errorlAC(payload));
};

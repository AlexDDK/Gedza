import { SET_MODAL } from '../types/modalTypes';

// Задаем экшены — типы запросов на редюсеры

export const modalAC = (payload) => ({
  type: SET_MODAL,
  payload,
});

// Танки
// Танка на изменение состояния модала
export const showModal = (payload) => (dispatch) => {
  dispatch(modalAC(payload));
};

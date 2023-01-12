import { SET_MODAL } from '../types/modalTypes';

const modalReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_MODAL:
      return payload; // Будем возвращать то, что передадим

    default:
      return state; // по дефолту возращаем стейт
  }
};
export default modalReducer;

import { SET_ERROR } from '../types/errorTypes';

const errorReducer = (state = '', action) => {
  const { type, payload } = action;
  switch (type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_ERROR:
      return payload; // Будем возвращать то, что передадим

    default:
      return state; // по дефолту возращаем стейт
  }
};
export default errorReducer;

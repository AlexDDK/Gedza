import { SETBOOK } from '../types/allBookTypes';

const bookFormReducer = (state = null, action) => {
  switch (action.type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SETBOOK:
      return action.payload; // Будем возвращать то, что передадим

    default:
      return state; // по дефолту возращаем стейт
  }
};
export default bookFormReducer;

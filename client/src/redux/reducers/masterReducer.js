import { SET_MASTER } from '../types/masterTypes';

const masterReducer = (state = [], action) => {
  switch (action.type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_MASTER:
      return [...state, action.payload]; // Будем возвращать то, что передадим

    default:
      return state; // по дефолту возращаем стейт
  }
};
export default masterReducer;

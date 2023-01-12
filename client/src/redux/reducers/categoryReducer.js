import { SET_CATEGORY } from '../types/categoryTypes';

const categoryReducer = (state = [], action) => {
  switch (action.type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_CATEGORY:
      return [...state, action.payload]; // Будем возвращать то, что передадим

    default:
      return state; // по дефолту возращаем стейт
  }
};
export default categoryReducer;

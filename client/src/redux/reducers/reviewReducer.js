import { SET_REVIEW } from '../types/reviewTypes';

const reviewReducer = (state = [], action) => {
  switch (action.type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_REVIEW:
      return [...state, action.payload]; // Будем возвращать то, что передадим

    default:
      return state; // по дефолту возращаем стейт
  }
};
export default reviewReducer;

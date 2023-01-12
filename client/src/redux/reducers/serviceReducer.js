import { SET_SERVICE } from '../types/serviceTypes';

const serviceReducer = (state = [], action) => {
  switch (action.type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case SET_SERVICE: {
      return [...state, action.payload]; // Будем возвращать то, что передадим
    }
    default:
      return state; // по дефолту возращаем стейт
  }
};
export default serviceReducer;

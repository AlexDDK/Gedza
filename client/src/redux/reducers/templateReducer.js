import { CHANGE_THEME, GET_THEME } from '../types/templateTypes';

const templateReducer = (state = 1, action) => {
  switch (action.type) {
    case GET_THEME: {
      return action.payload;
    }
    case CHANGE_THEME: {
      return action.payload;
    }
    default:
      return state; // по дефолту возращаем стейт
  }
};
export default templateReducer;

import { SET_SALON } from '../types/salonTypes';

const salonReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SALON:
      return [...state, payload];
    default:
      return state;
  }
};

export default salonReducer;

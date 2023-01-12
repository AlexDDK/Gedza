import { DISABLE_LOADER, ENABLE_LOADER } from '../types/loaderTypes';

// eslint-disable-next-line default-param-last
const loaderReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case ENABLE_LOADER:
      return true;

    case DISABLE_LOADER:
      return false;

    default:
      return state;
  }
};

export default loaderReducer;

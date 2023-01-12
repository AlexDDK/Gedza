/* eslint-disable no-param-reassign */
// Главные редюсер, комбинирует в себе остальные редюсеры
import { combineReducers } from 'redux';
import { LOGOUT_USER } from '../types/userTypes';
import userReducer from './userReducer';
import salonReducer from './salonReducer';
import urlReducer from './urlReducer';
import masterReducer from './masterReducer';
import categoryReducer from './categoryReducer';
import modalReducer from './modalReducer';
import errorReducer from './errorReducer';
import serviceReducer from './serviceReducer';
import reviewReducer from './reviewReducer';
import bookFormReducer from './bookFormReducer';
import loaderReducer from './loaderReducer';
import imageReducer from './imageReducer';
import templateReducer from './templateReducer';

const appReducer = combineReducers({
  // За слайс user отвечает userReducer. Слайс — определенный стейт.
  user: userReducer, // Слайс и редюсер для работы с юзерами
  salon: salonReducer, // Слайс и редюсер для загрузки салонов
  url: urlReducer, // Слайс и редюсер для работы с Url
  masters: masterReducer, // Слайс и редюсер для работы с мастерами
  categories: categoryReducer, // Слайс и редюсер для работы с категориями
  modal: modalReducer, // Слайс и редюсер для открытия и закрытия модала
  loader: loaderReducer, // Слайс и редюсер для открытия и закрытия лоадера
  error: errorReducer, // Слайс и редюсер для отображения ошибок
  service: serviceReducer, // Слайс и редюсер для загрузки услуг
  review: reviewReducer, // Слайс и редюсер для загрузки отзывов
  bookForm: bookFormReducer, // Слайс и редюсер для загрузки форм записи
  images: imageReducer,
  template: templateReducer, // Слайс для изменения темы
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

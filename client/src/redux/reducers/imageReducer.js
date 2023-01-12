const imageReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) { // Будем переключаться в зависимости от того, какой тип передадим в экшене
    case 'clear_Images':
      // return payload; // Будем возвращать то, что передадим
      return [];
    case 'add_Images':
      return [...state, payload]; // Будем возвращать то, что передадим
    case 'upload_Images':
      return [...state, ...payload];
    case 'delete_Images':
      return state.filter((el) => el.id !== payload); // Будем удалять нужную картинку
    default:
      return state; // по дефолту возращаем стейт
  }
};
export default imageReducer;

const { REACT_APP_HOST: host, REACT_APP_YCPATH: ycPath } = process.env;

// Функции возвращают строки с адресом ендпоинта

// Эндпоинты юзера
export const signUp = () => `${host}/user/signup`;
export const logIn = () => `${host}/user/login`;
export const logOut = () => `${host}/user/logout`;
export const isAyth = () => `${host}/user/auth/`;
export const putUser = () => `${host}/user/put`;
export const getUserByUrl = (url) => `${host}/user/getByUrl/${url}`;

// Эндпоинты Url
export const putUrl = () => `${host}/url/put`;
export const getUrl = (id) => `${host}/url/${id}`;

// Эндпоинты Форм записи
export const takeBookForms = (payload) => `${ycPath}/company/${payload}/booking_forms`;
export const checkBook = (payload) => `${ycPath}/bookform/${payload}`;

// Эндпоинты Салонов
export const takeSalons = () => `${ycPath}/companies?my=1`;
export const dbSalon = () => `${host}/salon/add`;
export const takeSalonsFromDB = (id) => `${host}/salon/take/${id}`;

// Эндпоинты Мастеров
export const takeMasters = (payload) => `${ycPath}/company/${payload}/staff`;
export const writeToDbMaster = () => `${host}/master/add`;
export const writeToDbBook = () => `${host}/user/putForm`;
export const takeMasterFromDB = (id) => `${host}/master/take/${id}`;

// Эндпоинты Категорий
export const takeCategories = (payload) => `${ycPath}/company/${payload}/service_categories`;
export const writeToDbCats = () => `${host}/cats/add`;
export const takeCatsFromDB = (id) => `${host}/cats/take/${id}`;

// Эндпоинты Услуг
export const takeServices = (payload) => `${ycPath}/company/${payload}/services`;
export const writeToDbService = () => `${host}/service/add`;
export const takeServiceFromDB = (id) => `${host}/service/take/${id}`;

// Эндпоинты отзывов
export const takeReviews = (payload) => `${ycPath}/comments/${payload}`;
export const writeToDbReviews = () => `${host}/review/add`;
export const takeReviewsFromDb = (id) => `${host}/review/take/${id}`;
export const takeBooksFromDb = (id) => `${host}/books/take/${id}`;
export const takeImagesFromDb = (id) => `${host}/image/take/${id}`;
export const writeImagesToDb = () => `${host}/upload/img`;

export const putTemplate = () => `${host}/template/put`;

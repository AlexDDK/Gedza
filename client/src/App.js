import './App.css';

import {
  Routes, Route, Navigate,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, Suspense } from 'react';

import { auth } from './redux/actions/userAction';
// import PrivateRoute from './components/Routers/PrivateRouter';
// import IntegerRouter from './components/Routers/IntegerRouter';
// import Landing from './components/Landing/Landing';
// import Integration from './components/Integration/Integration';
// import Outer from './components/Outer/Outer'; // Наша внешняя страница
// import Page404 from './components/404/Page404';

const Main = React.lazy(() => import('./components/Main/Main'));
const Page404 = React.lazy(() => import('./components/404/Page404'));
const Outer = React.lazy(() => import('./components/Outer/Outer'));
const PrivateRoute = React.lazy(() => import('./components/Routers/PrivateRouter'));
const IntegerRouter = React.lazy(() => import('./components/Routers/IntegerRouter'));
const Landing = React.lazy(() => import('./components/Landing/Landing'));
const Integration = React.lazy(() => import('./components/Integration/Integration'));

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(auth(user, navigate));
  }, []);

  // В зависимости от того, вошел юзер или нет — показываются разные страницы
  return (
    <div className="container">
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/integration" element={<PrivateRoute> <Integration /> </PrivateRoute>} />
          <Route
            path="/main"
            element={(
              <IntegerRouter>
                <Main />
              </IntegerRouter>
            )}
          />
          <Route path="/:url" element={<Outer />} />
          <Route path="/page404" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

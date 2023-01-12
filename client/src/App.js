import './App.css';

import {
  Routes, Route, Navigate,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { auth } from './redux/actions/userAction';
import PrivateRoute from './components/Routers/PrivateRouter';
import IntegerRouter from './components/Routers/IntegerRouter';
import Landing from './components/Landing/Landing';
import Main from './components/Main/Main';
import Outer from './components/Outer/Outer'; // Наша внешняя страница
import Integration from './components/Integration/Integration';
import Page404 from './components/404/Page404';

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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/integration" element={<PrivateRoute> <Integration /> </PrivateRoute>} />
        <Route path="/main" element={<IntegerRouter> <Main /> </IntegerRouter>} />
        <Route path="/:url" element={<Outer />} />
        <Route path="/page404" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;

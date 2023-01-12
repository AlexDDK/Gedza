// Внешняя страница по которой мы показываем готовый шаблон
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Outer.module.css';

import TemplateLight from '../TemplateLight/TemplateLight';
import TemplateDark from '../TemplateDark/TemplateDark';
import { clientSalonReadThunk } from '../../redux/actions/FilialsAction';

function Outer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Для получения адрса из адрсной строки
  const url = location.pathname.replace(/\//g, ''); // Избавляемся от слеша в адресе
  const template = useSelector((store) => store.template);

  console.log(template);

  useEffect(() => {
    dispatch(clientSalonReadThunk(url, navigate)); // Передаем навигейт для перехода на страницу 404
  }, []);

  const formId = useSelector((store) => store.bookForm);

  return (
    <div className={styles.outContainer}>

      {formId && (
      <Helmet>
        <script type="text/javascript" src={`https://w${formId}.yclients.com/widgetJS`} charset="UTF-8" />
      </Helmet>
      )}

      {(template === 1) ? <TemplateLight /> : <TemplateDark /> }
    </div>
  );
}

export default Outer;

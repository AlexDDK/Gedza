import React from 'react';
import style from '../../ServiceBlock.module.css';

function ClientServicePage({
  id, isActive, setActiveCat, category,
}) {
  const changeActive = (e) => {
    setActiveCat(category);
  };

  return (
    <div onClick={changeActive} className={`${style.servicesTab} ${isActive && style.active}`}>{category.title}</div>
  );
}

export default ClientServicePage;

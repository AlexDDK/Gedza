import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImagesThunk } from '../../redux/actions/imageAction';

export default function ShowImages() {
  const dispatch = useDispatch();
  const fetchImages = async () => {
    dispatch(getImagesThunk());
  };

  useEffect(() => {
    dispatch(getImagesThunk());
  }, []);
  //   const fetchImages = async () => {
  //     dispatch(getImagesThunk());
  //   };
  return (
    <div>ShowImages</div>
  );
}

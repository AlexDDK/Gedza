import React, { useEffect, useRef, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
// import Geocode from 'react-geocode';
import { useDispatch, useSelector } from 'react-redux';
import styles from './YMAP.module.css';

// eslint-disable-next-line key-spacing
const { REACT_APP_YA_KEY:key } = process.env;

export default function YMAP() {
  // eslint-disable-next-line no-useless-escape
  const salons = (useSelector((store) => store.salon)).map((el) => el.address.replace(/\.||\,||/gi, '').replace(/\s/gi, '+'));
  const [coords, setCoords] = useState([]);
  const [mapData, setMapData] = useState({
    center: [55.751574, 37.573856],
    zoom: 10,
  });

  // text1.map((el) => el.replace(/[.,\/#!$%\^&\*;@:{}=\"?-_`~()']/gm, '').replace(/[\s]/mgi, '+'));

  const getCords = async (addreses) => {
    const myAddreses = !Array.isArray(addreses) ? [addreses] : addreses;

    try {
      const myCoords = myAddreses.map(async (el) => (await (await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${key}&format=json&geocode=${el}`)).json()).response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' '));
      return myCoords;
    } catch (error) {
      console.log(error);
    }
    return [];
  };

  useEffect(() => {
    if (salons.length && !coords.length) {
      getCords(salons)
        .then((arr) => Promise.all(arr))
        .then((arr) => setCoords(arr.map((el) => ([el[1], el[0]]))));
    }
  });
  useEffect(() => {
    if (coords.length) {
      setMapData({
        center: [
          coords.reduce((acc, el) => acc + +el[0], 0)
        / coords.length,
          coords.reduce((acc, el) => acc + +el[1], 0)
         / coords.length,
        ],
        zoom: 14,
      });
    }
  }, [coords]);

  return (

    <YMaps className={styles.mappa}>
      <Map
        width="100%"
        height="100%"
        defaultState={mapData}
      >
        { coords.map((coordinate, i) => (
          <Placemark
            key={i}
            geometry={coordinate}
            properties={{
              balloonContentHeader: 'Мы здесь!',
              balloonContent: 'И ждем Вас',
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        )) }
      </Map>
    </YMaps>
  );
}

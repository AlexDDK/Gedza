import React from 'react';
import YMAP from '../../YMAP/YMAP';
import styles from './MapBlock.module.css';

function ClientMap() {
  return (
    <div className={styles.mapContainer}> <YMAP /> </div>
  );
}

export default ClientMap;

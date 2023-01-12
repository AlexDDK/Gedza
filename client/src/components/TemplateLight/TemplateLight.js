import React from 'react';
import MainBlock from './1-MainBlock/MainBlock';
import ServiceBlock from './2-ServiceBlock/ServiceBlock';
import PhotosBlock from './3-PhotosBlock/PhotosBlock';
import MastersBlock from './4-MastersBlock/MastersBlock';
import ContactBlock from './5-ContactBlock/ContactBlock';
import MapBlock from './6-MapBlock/MapBlock';

function TemplateLight() {
  return (
    <div>
      <MainBlock />
      <ServiceBlock />
      <PhotosBlock />
      <MastersBlock />
      <ContactBlock />
      <MapBlock />
    </div>
  );
}

export default TemplateLight;

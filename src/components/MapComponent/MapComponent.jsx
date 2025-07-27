import React from 'react';
//===== assets =====//
import './MapComponent.scss';
//===== components =====//
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MapComponent = () => {

  const defaultState = {
    center: [55.735905, 37.411095], // Москва (можно заменить на свои координаты)
    zoom: 17,
  };

  return (
    <section 
      className='MapComponent'
      style={{ width: "100%", height: "500px", paddingBottom: '68px'}}
    >
      <YMaps query={{ apikey: process.env.REACT_APP_YANDEX_MAPS_API_KEY }}>
        <Map defaultState={defaultState} width="100%" height="100%">
          <Placemark geometry={defaultState.center} />
        </Map>
      </YMaps>
    </section>
  )
}

export default MapComponent;
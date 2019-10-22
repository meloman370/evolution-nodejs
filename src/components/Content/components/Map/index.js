import React from 'react'
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps'

const Map = () => {
  return(
    <YMaps>
      <YMap width="100%" defaultState={{ center: [53.893864, 27.551231], zoom: 17 }}>
        <Placemark defaultGeometry={[53.893864, 27.551231]} />
      </YMap>
    </YMaps>
  )
}

export default Map
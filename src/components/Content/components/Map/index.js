import React from 'react'
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps'

const Map = () => {
  return(
    <YMaps>
      <YMap width="100%" defaultState={{ center: [53.903575, 27.552084], zoom: 12 }}>
        <Placemark defaultGeometry={[53.903575, 27.552084]} />
      </YMap>
    </YMaps>
  )
}

export default Map
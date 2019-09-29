import React from 'react'
import Banner from './components/Banner'
import Carousel from './components/Carousel'

const Block = ({ data }) => {
  const { banner, slider } = data
  let block = <div>Type is missing</div>

  if (slider.length) {
    block = <Carousel data={slider[0]}/>
  } else if(banner.length) {
    block = <Banner data={banner[0]}/>
  }

  return block
}

export default Block
import React from 'react'
import SliderStyled from './style'

const SliderWidget = ({ from, to, onChange, min, max }) => {
  const handleChange = (e, newValue) => {
    onChange(newValue[0], newValue[1])
  }

  return(
    <SliderStyled
        value={[from, to]}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        step={50}
        marks
        min={min}
        max={max}
      />
  )
}

export default SliderWidget
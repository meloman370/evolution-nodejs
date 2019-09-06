import React, { memo } from 'react'
import CounterStyled from './style'

const Counter = ({ onChange, value }) => {
  const max = 99
  const min = 1

  const increaseHandler = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  const descreaseHandler = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  return(
    <CounterStyled>
      <div onClick={descreaseHandler}>-</div>
      <div className="input">{value}</div>
      <div onClick={increaseHandler}>+</div>
    </CounterStyled>
  )
}

export default memo(Counter)
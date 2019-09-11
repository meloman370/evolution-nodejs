import React, {memo} from 'react'
import PriceStyled from './style'

const Price = ({ from, to, onChange }) => {

  const changeFromHandler = (e) => {
    from = e.target.value
    onChange(from, to)
  }

  const changeToHandler = (e) => {
    to = e.target.value
    onChange(from, to)
  }

  return(
    <PriceStyled>
      <input type="text" onChange={changeFromHandler} value={from}/>
      <span>-</span>
      <input type="text" onChange={changeToHandler} value={to}/>
    </PriceStyled>
  )
}

export default memo(Price)
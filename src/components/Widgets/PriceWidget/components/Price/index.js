import React, {memo, useState, useEffect} from 'react'
import PriceStyled from './style'

const Price = ({ from, to, onChange }) => {
  const [_from, setFrom] = useState(0)
  const [_to, setTo] = useState(0)

  useEffect(() => {
    setFrom(from)
    setTo(to)
  }, [from, to])

  const onBlurFromHandler = (e) => {
    if (e.target.value > 0) {
      onChange(_from, _to)
    }
  }

  const onBlurToHandler = (e) => {
    if (e.target.value > 0) {
      onChange(_from, _to)
    }
  }

  const changeFrom = (e) => {
    setFrom(+e.target.value)
  }

  const changeTo = (e) => {
    setTo(+e.target.value)
  }

  return(
    <PriceStyled>
      <input type="text" onBlur={onBlurFromHandler} onChange={changeFrom} value={_from}/>
      <span>-</span>
      <input type="text" onBlur={onBlurToHandler} onChange={changeTo} value={_to}/>
    </PriceStyled>
  )
}

export default memo(Price)
import React, { PureComponent, memo, useEffect, useState } from 'react'
import {PriceWidgetStyled, TitleLoading, PriceLoading, SliderLoading} from './style'
import Title from './components/Title'
import Price from './components/Price'
import SliderWidget from './components/SliderWidget'

const PriceWidget = ({min, max, isLoading, onChange}) => {
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  
  const changePrice = (_from, _to) => {
    if (_from !== from || _to !== to) {
      setFrom(_from)
      setTo(_to)
      onChange(_from, _to)
    }
  }

  useEffect(() => {
    setFrom(min)
  }, [min])

  useEffect(() => {
    setTo(max)
  }, [max])

  return(
    <PriceWidgetStyled>
      {(isLoading || !min || !max || !from || !to) &&
        <>
          <TitleLoading/>
          <PriceLoading>
            <div className="left"/>
            <div className="right"/>
          </PriceLoading>
          <SliderLoading/>
        </>
      }
      {!isLoading && min && max && from && to &&
        <>
          <Title>Цена (BYN)</Title>
          <Price from={from} to={to} onChange={changePrice}/>
          <SliderWidget from={from} to={to} min={min} max={max} onChange={changePrice}/>
        </>
      }
    </PriceWidgetStyled>
  )
}

export default memo(PriceWidget)

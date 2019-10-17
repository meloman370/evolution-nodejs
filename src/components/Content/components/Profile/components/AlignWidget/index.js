import React, {memo, useState, useEffect} from 'react'
import Radio from '@material-ui/core/Radio'
import {AlignWidgetStyled, Row, Title} from './style'

const AlighWidget = ({onChange, title, value}) => {
  value = value.toString()
  
  const onChangeHandler = (e) => {
    const position = e.target.value.split(',')
    onChange(position[0], position[1])
  }

  return(
    <AlignWidgetStyled>
      <Title>{title}</Title>
      <Row>
        <Radio onChange={onChangeHandler} checked={value == [1,1]} value={[1,1]}/>
        <Radio onChange={onChangeHandler} checked={value == [1,2]} value={[1,2]}/>
        <Radio onChange={onChangeHandler} checked={value == [1,3]} value={[1,3]}/>
      </Row>
      <Row>
        <Radio onChange={onChangeHandler} checked={value == [2,1]} value={[2,1]}/>
        <Radio onChange={onChangeHandler} checked={value == [2,2]} value={[2,2]}/>
        <Radio onChange={onChangeHandler} checked={value == [2,3]} value={[2,3]}/>
      </Row>
      <Row>
        <Radio onChange={onChangeHandler} checked={value == [3,1]} value={[3,1]}/>
        <Radio onChange={onChangeHandler} checked={value == [3,2]} value={[3,2]}/>
        <Radio onChange={onChangeHandler} checked={value == [3,3]} value={[3,3]}/>
      </Row>
    </AlignWidgetStyled>
  )
}

export default memo(AlighWidget)

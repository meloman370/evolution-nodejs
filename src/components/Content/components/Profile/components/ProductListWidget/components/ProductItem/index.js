import React, {memo} from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {Row, Title, ImageStyle, Info, AddButton, DelButton} from './style'
import Image from '../../../../../Image'

const ProductItem = ({data, onClick, add = true}) => {
  const clickHandler = () => {
    onClick(data)
  }
  return(
    <Row>
      <ImageStyle>
        {data.images.length > 0 &&
          <Image src={data.images[0].origin} webp={data.images[0].compressed} alt={data.images[0].alt}/>
        }
      </ImageStyle>
      <Info>
        <Title>{data.title}</Title>
        {add &&
          <AddButton className="action-button" onClick={clickHandler}>
            <AddCircleOutlineIcon/>
          </AddButton>
        }
        {!add &&
          <DelButton className="action-button" onClick={clickHandler}>
            <RemoveCircleOutlineIcon/>
          </DelButton>
        }
      </Info>
    </Row>
  )
}

export default memo(ProductItem)

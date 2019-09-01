import React from 'react'
import BannerStyled from './style'
import { NavLink } from 'react-router-dom'
import Image from '../../../Image'
import Container from '../../../../styles/Container'
import Row from '../../../../styles/Row'

const Banner = ({ img, align="center", link="/", isFull=false }) => {
  const content = (
    <BannerStyled align={align}>
      <Image name={'banners/' + img}/>
      <div className="link">
        <NavLink to={link}>Посмотреть</NavLink>
      </div>
    </BannerStyled>
  )

  if (!!isFull) {
    return(content)
  } else {
    return(
      <Container>
        <Row>
          {content}
        </Row>
      </Container>
    )
  }
}

export default Banner

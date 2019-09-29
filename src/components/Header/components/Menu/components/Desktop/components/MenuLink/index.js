import React, { useContext, memo } from 'react'
import MenuLinkStyled from './style'
import { NavLink } from 'react-router-dom'
import { PopupContext } from '../MenuItem'

const MenuLink = ({ data: {image, compressed_image, name, url_alias} }) => {
  const {setOpen, setImage} = useContext(PopupContext)

  const onClickHander = () => {
    setOpen(false)
  }

  const onMouseEnterHandler = () => {
    setImage({
      src: image,
      webp: compressed_image
    })
  }

  return(
    <MenuLinkStyled>
      <NavLink to={url_alias} activeClassName="active" onClick={onClickHander} onMouseEnter={onMouseEnterHandler}>
        {name}
      </NavLink>
    </MenuLinkStyled>
  )
}

export default memo(MenuLink)
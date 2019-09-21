import React, { useContext, memo } from 'react'
import MenuLinkStyled from './style'
import { NavLink } from 'react-router-dom'
import { PopupContext } from '../MenuItem'

const MenuLink = ({ data }) => {
  const {setOpen, setImage} = useContext(PopupContext)

  const onClickHander = () => {
    setOpen(false)
  }

  const onMouseEnterHandler = () => {
    setImage({
      src: data.image,
      webp: data.compressed_image
    })
  }

  return(
    <MenuLinkStyled>
      <NavLink to={data.url_alias} activeClassName="active" onClick={onClickHander} onMouseEnter={onMouseEnterHandler}>
        {data.name}
      </NavLink>
    </MenuLinkStyled>
  )
}

export default memo(MenuLink)
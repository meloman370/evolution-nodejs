import styled from 'styled-components'

const MenuLinkStyled = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: lighter;
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: 5px;

  a {
    text-decoration: none;
    color: black;

    &.active {
      font-weight: 500;
    }
  }
`

export default MenuLinkStyled
import styled from 'styled-components'

const MenuItemStyled = styled.div`
  padding: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  ${({ active }) => active && `
    background: linear-gradient(360deg, #FFFFFF -47.83%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  `}
`

export default MenuItemStyled
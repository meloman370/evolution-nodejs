import styled from 'styled-components'
import { device } from '../../styles'

const ProductGridStyled = styled.div`
  display: grid;
  grid-gap: 0vw;
  grid-template-rows: repeat(4, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }

  &>div {
    margin-top: 15px;
    margin-bottom: 20px;
  }
`

export default ProductGridStyled
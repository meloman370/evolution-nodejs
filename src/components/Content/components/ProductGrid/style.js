import styled from 'styled-components'
import { device } from '../../../../styles'

export const ProductGridStyled = styled.div`
  display: grid;
  grid-gap: 1vw;

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
export const ProductLoadingTitle = styled.div`
  height: 20px;
  width: 65%;
  background: #e3e3e3;
  margin-bottom: 10px;
`

export const ProductLoadingPrice = styled.div`
  height: 20px;
  width: 30%;
  background: #e3e3e3;
  margin-bottom: 10px;
`

export const ProductLoadingImage = styled.div`
  width: 100%;
  height: 190px;
  background: #e3e3e3;
  margin-bottom: 10px;
`


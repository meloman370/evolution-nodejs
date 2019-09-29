import styled from 'styled-components'

const ProductTeaserStyled = styled.div`
  display: inline-block;
  text-align: center;
  position: relative;

  img {
    max-width: 190px;
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`

export default ProductTeaserStyled
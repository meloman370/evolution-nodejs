import styled from 'styled-components'

const CarouselStyled = styled.div`
  border-top: 1px solid black;
  width: 100%;
  text-align: center;
  margin-top: 60px;
  position: relative;

  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    text-transform: uppercase;
    display: inline-block;
    margin-top: -25px;
    margin-bottom: 30px;
    background: white;
    padding: 0 35px;
  }

  .slick-next, .slick-prev {
    display: none !important;
  }
`

export default CarouselStyled
import styled, { css } from 'styled-components'

const BannerStyled = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }

  .link {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: ${props => props.align}

    ${props =>
      !props.isFull && css`
        position: relative;
      `
    }
  }

  a {
    display: inline-block;
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    background: black;
    border-radius: 4px;
    margin: 30px 100px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
  }
`

export default BannerStyled
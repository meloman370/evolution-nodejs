import styled, { css } from 'styled-components'

export const BannerStyled = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }
`
export const LinkWrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  align-items: ${props => props.vertical};
  justify-content: ${props => props.horisontal};

  ${props => !props.is_full && css`
    position: relative;
  `}

  a {
    display: inline-block;
    z-index: 1;
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

export const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  font-family: Roboto;
  font-weight: bold;
  align-items: ${props => props.vertical};
  justify-content: ${props => props.horisontal};
  font-size: ${props => props.font_size}px;

  span {
    display: block;
    padding: 50px;
    max-width: 500px;
  }
`
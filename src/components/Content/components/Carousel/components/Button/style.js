import styled, { css } from 'styled-components'

const ButtonStyled = styled.div`
  position: absolute;
  top: 50%;
  transition: transform .3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  ${props =>
    props.align == 'left' && css`
      left: 10px;
    `
  }

  ${props =>
    props.align == 'right' && css`
      right: 10px;
    `
  }
`

export default ButtonStyled
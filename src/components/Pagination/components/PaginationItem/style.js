import styled, { css } from 'styled-components'

const PaginationItemStyled = styled.div`
  width: 30px;
  height: 30px;
  background: #c6c6c6;
  font-family: Roboto;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 50%;
  transition: transform .2s;
  transform: scale(1);

  ${props => !props.active && css`
    &:hover {
      transform: scale(1.2);
    }
  `}

  ${props => props.active && css`
    transform: scale(1.4);
    margin: 0 10px;
  `}
`

export default PaginationItemStyled
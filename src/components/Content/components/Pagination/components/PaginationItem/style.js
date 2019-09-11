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

  ${props => props.active && css`
    background: dimgrey;
    color: white;
  `}
`

export default PaginationItemStyled
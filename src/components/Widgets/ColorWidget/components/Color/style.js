import styled from 'styled-components'

const ColorStyled = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.hex}
  margin-right: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
`

export default ColorStyled
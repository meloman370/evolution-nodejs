import styled from 'styled-components'

export const SliderStyled = styled.div`
  max-width: 500px;

  img {
    width: 100%;
  }
`

export const ActiveItem = styled.div`

`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
`

export const Item = styled.div`
  cursor: pointer;
`
import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
  align-items: center;
  cursor: pointer;
  transform: scale(0.95);
  transition: transform .3s;

  &:hover {
    transform: scale(1);
    border-radius: 5px;
    overflow: hidden;

    .action-button {
      display: flex;
    }
  }
`

export const Title = styled.div`
  font-family: Roboto;
`

export const ImageStyle = styled.div`
  width: 70px;

  img {
    width: 100%;
  }
`

export const Info = styled.div`
  margin-left: 15px;
`

export const AddButton = styled.div`
  position: absolute;
  display: none;
  background: rgba(2, 206, 76, 0.54);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    font-size: 50px;
  }
`

export const DelButton = styled(AddButton)`
  background: rgba(206, 2, 2, 0.54);
`
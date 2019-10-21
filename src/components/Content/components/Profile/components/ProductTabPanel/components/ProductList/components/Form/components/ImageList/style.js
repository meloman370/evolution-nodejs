import styled from 'styled-components'
import {CreateButton} from '../../../../style'

export const ImageItem = styled.div`

`

export const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
`

export const ImageButton = styled(CreateButton)`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 0;
`
export const DeleteButton = styled.div`
  margin-top: 10px;

  .MuiFab-sizeMedium {
    background-color: rgba(245, 0, 0, 0.6);
    &:hover {
      background-color: rgba(245, 0, 0, 0.75);
    }
  }
`

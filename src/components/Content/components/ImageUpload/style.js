import styled, {css} from 'styled-components'
import Fab from '@material-ui/core/Fab'

export const Button = styled(Fab)`
  margin: 0 !important;
  position: absolute !important;
  bottom: -5px;
  left: -5px;
`

export const UploadStyled = styled.div`
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  font-family: Roboto;
`

export const Image = styled.div`
  width: 100%;
  background: #cbcbcb;
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;

  ${props => props.url && css`
    background-image: url(${props.url})
  `}
`
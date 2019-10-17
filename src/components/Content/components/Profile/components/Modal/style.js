import styled, {css} from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Fab from '@material-ui/core/Fab'
import CircularProgress from '@material-ui/core/CircularProgress'

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto;
  font-size: 24px;
`

export const InputField = styled(TextField)`
  display: block !important;

  .MuiOutlinedInput-root {
    width: 100%;
  }
`

export const Error = styled.div`
  color: #ff6060;
  text-align: left;
  font-family: Roboto;
  font-size: 12px;
`

export const ModalDialog = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    width: 600px;
    padding: 15px;

    ${props => props.width && css`
      width: ${props.width}px;
    `}
  }
`

export const Loader = styled(CircularProgress)`
  width: 20px !important;
  height: 20px !important;
  color: #a7a3a3 !important;
`

export const ButtonStyled = styled(Button)`
  padding: 10px 20px !important;
  margin-top: 15px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100px !important;
  height: 45px !important;
`

export const ImageUpload = styled(Fab)`
  .MuiFab-root {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export const Row = styled.div`
  display: flex;

  ${props => props.jc && css`
    justify-content: ${props.jc}
  `}
`

export const Left = styled.div`
  width: 100%;
`

export const Right = styled.div`
  width: 100%;
  margin-left: 30px;
`

export const Line = styled.hr`
  width: 100%;
  box-shadow: none;
  border-style: solid;
  border-color: #cbcbcb;
  border-width: 0.5px;
  margin-top: 15px;
`

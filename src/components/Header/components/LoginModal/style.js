import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CircularProgress from '@material-ui/core/CircularProgress'

export const LoginModalStyled = styled.div`
  padding: 15px;
  text-align:center;
`

export const Title = styled.div`
  font-family: Roboto;
  font-size: 24px;
`

export const InputField = styled(TextField)`
  display: block !important;

  .MuiOutlinedInput-root {
    width: 100%;
  }
`

export const ButtonStyled = styled(Button)`
  padding: 10px 20px !important;
  margin-top: 15px !important;
  width: 100px !important;
  height: 45px !important;
`

export const Error = styled.div`
  color: #ff6060;
  text-align: left;
  font-family: Roboto;
  font-size: 12px;
`

export const Modal = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    width: 300px;
  }
`

export const Loader = styled(CircularProgress)`
  width: 20px !important;
  height: 20px !important;
  color: #a7a3a3 !important;
`

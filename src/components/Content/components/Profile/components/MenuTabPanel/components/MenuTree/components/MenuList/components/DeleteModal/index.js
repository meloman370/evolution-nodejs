import React, {memo} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import Modal from '../../../../../../../Modal'
import {Title, ButtonStyled, Row} from '../../../../../../../Modal/style'
import {userGetToken} from '../../../../../../../../../../../../helpers/user-helper'
import {fetchMenu} from '../../../../../../../../../../../../redux/actions/menu'

const DeleteModal = ({open, onClose, item, dispatch}) => {
  const confirm = async () => {
    try {
      const token = userGetToken()
      await axios.delete(process.env.API_URL + `/menu/` + item.id, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      onClose(true)
      dispatch(fetchMenu())
    } catch(error) {
      console.log(error)
    }
  }

  const cancel = () => {
    onClose(true)
  }

  return(
    <Modal open={open} onClose={onClose} width={250}>
      <Title>Вы уверены?</Title>
      <Row>
        <ButtonStyled onClick={confirm}>Да</ButtonStyled>
        <ButtonStyled onClick={cancel}>Нет</ButtonStyled>
      </Row>
    </Modal>
  )
}

export default connect()(
  memo(DeleteModal)
)
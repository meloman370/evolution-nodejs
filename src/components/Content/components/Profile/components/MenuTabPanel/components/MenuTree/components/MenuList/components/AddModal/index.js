import React, {memo, useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {fetchMenu} from '../../../../../../../../../../../../redux/actions/menu'
import {userGetToken} from '../../../../../../../../../../../../helpers/user-helper'
import Modal from '../../../../../../../Modal'
import {Title, InputField, ButtonStyled, Loader, Error} from '../../../../../../../Modal/style'

const AddModal = ({open, onClose, parent, dispatch}) => {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    setErrors([])
    setName('')
	}, [open])

  const changeName = (e) => {
    setName(e.target.value)
  }

  const save = async () => {
    setLoading(true)
    const token = userGetToken()
    const form = new FormData()
    form.append('name', name)
    form.append('menu_item', parent)
    try {
      await axios.post(process.env.API_URL + `/menu/create`, form, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      setLoading(false)
      onClose(true)
      dispatch(fetchMenu())
    } catch (error) {
      setLoading(false)
      setErrors(error.response.data)
    }
  }

  return(
    <Modal open={open} onClose={onClose} width={200}>
      <Title>Добавить меню</Title>
        <InputField
          id="sub_menu_name"
          label="Название"
          value={name}
          onChange={changeName}
          margin="normal"
          variant="outlined"
        />
        {errors['name'] && errors['name'].map((error, i) => (
          <Error key={i}>{error}</Error>
        ))}
      <ButtonStyled variant="outlined" onClick={save}>
        {loading ? <Loader /> : 'Сохранить'}
      </ButtonStyled>
    </Modal>
  )
}

export default connect()(
  memo(AddModal)
)
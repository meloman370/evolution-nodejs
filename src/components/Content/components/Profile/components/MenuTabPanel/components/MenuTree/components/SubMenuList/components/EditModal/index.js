import React, {memo, useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {fetchMenu} from '../../../../../../../../../../../../redux/actions/menu'
import {userGetToken} from '../../../../../../../../../../../../helpers/user-helper'
import Modal from '../../../../../../../Modal'
import {Title, InputField, ButtonStyled, Loader, Error} from '../../../../../../../Modal/style'

const EditModal = ({open, onClose, item, dispatch}) => {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    setErrors([])
    setName('')
  }, [open])

	useEffect(() => {
		setName(item.name)
	}, [item])

  const changeName = (e) => {
    setName(e.target.value)
  }

  const save = async () => {
    setLoading(true)
    const token = userGetToken()
    const form = new FormData()
    form.append('name', name)
    try {
      await axios.patch(process.env.API_URL + `/sub-menu/` + item.id + '/edit', form, {
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
    <Modal open={open} onClose={onClose} width={350}>
      <Title>Редактировать подкатегорию</Title>
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
  memo(EditModal)
)
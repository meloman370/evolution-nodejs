import React, {memo, useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {fetchMenu} from '../../../../../../../../../../../../redux/actions/menu'
import {userGetToken} from '../../../../../../../../../../../../helpers/user-helper'
import Modal from '../../../../../../../Modal'
import {Title, InputField, ButtonStyled, Loader, Error, Row, Left, Right} from '../../../../../../../Modal/style'
import ImageUpload from '../../../../../../../../../ImageUpload'

const AddModal = ({open, onClose, parent, dispatch}) => {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [keywords, setKeywords] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState({})
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    setErrors([])
    setName('')
    setUrl('')
    setKeywords('')
    setDescription('')
    setFile({})
	}, [open])

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeUrl = (e) => {
    setUrl(e.target.value)
  }

  const changeKeywords = (e) => {
    setKeywords(e.target.value)
  }

  const changeDescription = (e) => {
    setDescription(e.target.value)
  }

  const changeFile = (file) => {
    setFile(file)
  }

  const save = async () => {
    const token = userGetToken()
    setLoading(true)
    const form = new FormData()
    form.append('name', name)
    form.append('url_alias', url)
    form.append('meta_keywords', keywords)
    form.append('meta_description', description)
    form.append('image', file)
    form.append('sub_menu_item', parent)
    try {
      await axios.post(process.env.API_URL + `/category/create`, form, {
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
    <Modal open={open} onClose={onClose}>
      <Title>Добавить категорию</Title>
      <Row>
        <Left>
          <InputField
            id="category_name"
            label="Название"
            value={name}
            onChange={changeName}
            margin="normal"
            variant="outlined"
          />
          {errors['name'] && errors['name'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
          <InputField
            id="url"
            label="Url адрес"
            value={url}
            onChange={changeUrl}
            margin="normal"
            variant="outlined"
          />
          {errors['url_alias'] && errors['url_alias'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
          <InputField
            id="keywords"
            label="Meta keywords"
            value={keywords}
            onChange={changeKeywords}
            margin="normal"
            variant="outlined"
            multiline
          />
          {errors['meta_keywords'] && errors['meta_keywords'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
          <InputField
            id="description"
            label="Meta description"
            value={description}
            onChange={changeDescription}
            margin="normal"
            variant="outlined"
            multiline
          />
          {errors['meta_description'] && errors['meta_description'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
        </Left>
        <Right>
          <ImageUpload onChange={changeFile}/>
          {errors['image'] && errors['image'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
        </Right>
      </Row>
      <ButtonStyled variant="outlined" onClick={save}>
        {loading ? <Loader /> : 'Сохранить'}
      </ButtonStyled>
    </Modal>
  )
}

export default connect()(
  memo(AddModal)
)
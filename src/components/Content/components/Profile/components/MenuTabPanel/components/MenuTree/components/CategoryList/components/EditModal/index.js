import React, {memo, useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {fetchMenu} from '../../../../../../../../../../../../redux/actions/menu'
import {userGetToken} from '../../../../../../../../../../../../helpers/user-helper'
import Modal from '../../../../../../../Modal'
import {Title, InputField, ButtonStyled, Loader, Error, Row, Left, Right} from '../../../../../../../Modal/style'
import ImageUpload from '../../../../../../../../../ImageUpload'

const EditModal = ({open, onClose, dispatch, item}) => {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [keywords, setKeywords] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState({})
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    setName(item.name)
    setUrl(item.url_alias)
    setKeywords(item.meta_keywords)
    setDescription(item.meta_description)
	}, [item])
	
	useEffect(() => {
		setErrors([])
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
		setLoading(true)
		const token = userGetToken()
    const form = new FormData()
    form.append('name', name)
    form.append('url_alias', url)
    form.append('meta_keywords', keywords)
		form.append('meta_description', description)
		if (file.name) {
			form.append('image', file)
		}
    try {
      await axios.patch(process.env.API_URL + `/category/` + item.id + '/edit', form, {
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
      <Title>Редактировать категорию</Title>
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
					<ImageUpload onChange={changeFile} src={item.compressed_image}/>
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
  memo(EditModal)
)
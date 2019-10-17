import React, {memo, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import BannerForm from '../Form'
import {userGetToken} from '../../../../../../../../../../../helpers/user-helper'
import {fetchBlock} from '../../../../../../../../../../../redux/actions/block'

const EditBanner = ({onClose, item, dispatch}) => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  const save = async (data) => {
    setLoading(true)
    try {
      await saveBlock(data.blockName)
      await saveBanner(data)
      setLoading(false)
      onClose()
      dispatch(fetchBlock())
    } catch(errors) {
      setErrors(errors.response.data)
      setLoading(false)
    }
  }

  const saveBlock = async (name) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('name', name)
    form.append('weight', item.weight)
    return axios.patch(process.env.API_URL + `/block/` + item.id + '/edit', form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const saveBanner = async (data) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('link', data.link)
    form.append('button_text', data.buttonText)
    form.append('text_size', data.textSize)
    form.append('text', data.text)
    form.append('align_text_horisontal', data.textHorizontal)
    form.append('align_text_vertical', data.textVertial)
    form.append('align_button_horisontal', data.buttonHorizontal)
    form.append('align_button_vertical', data.buttonVertial)
    form.append('is_full', data.full)
    form.append('block', item.id)

    if (data.file.name) {
      form.append('image', data.file)
    }

    return axios.patch(process.env.API_URL + `/banner-block/` + item.banner[0].id + '/edit', form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }
  
  return(
    <BannerForm onSave={save} loading={loading} errors={errors} item={item}/>
  )
}

export default connect()(
  memo(EditBanner)
)
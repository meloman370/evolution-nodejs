import React, {memo, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import BannerForm from '../Form'
import {userGetToken} from '../../../../../../../../../../../helpers/user-helper'
import {fetchBlock} from '../../../../../../../../../../../redux/actions/block'

const AddBanner = ({weight, onClose, dispatch}) => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [blockId, setBlockId] = useState(false)

  const save = async (data) => {
    let id = blockId
    setLoading(true)
    try {
      if (!id) {
        const response = await saveBlock(data.blockName)
        id = response.data.id
        setBlockId(id)
      }
      await saveBanner(data, id)
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
    form.append('weight', weight)
    return axios.post(process.env.API_URL + `/block/create`, form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const saveBanner = async (data, block_id) => {
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
    form.append('image', data.file)
    form.append('is_full', data.full)
    form.append('block', block_id)
    return axios.post(process.env.API_URL + `/banner-block/create`, form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }
  
  return(
    <BannerForm onSave={save} loading={loading} errors={errors}/>
  )
}

export default connect()(
  memo(AddBanner)
)
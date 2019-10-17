import React, {memo, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import SliderForm from '../Form'
import {userGetToken} from '../../../../../../../../../../../helpers/user-helper'
import {fetchBlock} from '../../../../../../../../../../../redux/actions/block'

const AddSlider = ({weight, onClose, dispatch}) => {
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)
  const [blockId, setBlockId] = useState(false)
  const [sliderId, setSliderId] = useState(false)

  const save = async (data) => {
    setLoading(true)
    const {title, blockName, products} = data
    let id = blockId
    let slider_id = sliderId
    try {
      if (!id) {
        const block = await saveBlock(blockName)
        id = block.data.id
        setBlockId(id)
      }
      if (!slider_id) {
        const slider = await saveSlider(title, id)
        slider_id = slider.data.id
        setSliderId(slider_id)
      }
      await saveProducts(products, slider_id)
      setLoading(false)
      onClose()
      dispatch(fetchBlock())
    } catch (errors) {
      setErrors(errors.response.data)
      setLoading(false)
    }
  }

  const saveBlock = (name) => {
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

  const saveSlider = (title, block_id) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('title', title)
    form.append('block', block_id)
    return axios.post(process.env.API_URL + '/slider-block/create', form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const saveProducts = (products, slider_id) => {
    const promises = []
    products.map(product => {
      promises.push(saveProduct(product.id, slider_id))
    })
    return Promise.all(promises)
  }

  const saveProduct = (product_id, slider_id) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('slider', slider_id)
    form.append('product', product_id)
    return axios.post(process.env.API_URL + '/slider-block/product/create', form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  return(
    <SliderForm onSave={save} errors={errors} loading={loading}/>
  )
}

export default connect()(
  memo(AddSlider)
)
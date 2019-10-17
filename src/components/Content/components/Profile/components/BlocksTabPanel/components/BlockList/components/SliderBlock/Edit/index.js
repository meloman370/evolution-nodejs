import React, {memo, useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import SliderForm from '../Form'
import {userGetToken} from '../../../../../../../../../../../helpers/user-helper'
import {fetchBlock} from '../../../../../../../../../../../redux/actions/block'

const EditSlider = ({onClose, dispatch, item}) => {
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  const save = async (data) => {
    setLoading(true)
    const {title, blockName, products} = data
    const slider = item.slider[0]
    try {
      await saveBlock(blockName)
      await saveSlider(title, slider.id)
      await deleteProductsBySlider(slider.id)
      await saveProducts(products, slider.id)
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
    form.append('weight', item.weight)
    return axios.patch(process.env.API_URL + `/block/` + item.id + '/edit', form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const saveSlider = (title, id) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('title', title)
    return axios.patch(process.env.API_URL + '/slider-block/' + id + '/edit', form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const deleteProductsBySlider = (slider_id) => {
    const token = userGetToken()
    return axios.delete(process.env.API_URL + '/slider-block/' + slider_id + '/products/delete', {
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
    <SliderForm onSave={save} errors={errors} loading={loading} item={item}/>
  )
}

export default connect()(
  memo(EditSlider)
)
import React, {memo, useState, useEffect} from 'react'
import axios from 'axios'
import Modal from '../../../../../Modal'
import {Title} from '../../../../../Modal/style'
import Form from '../Form'
import {userGetToken} from '../../../../../../../../../../helpers/user-helper'

const AddModal = ({open, onClose}) => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [productId, setProductId] = useState(false)

  useEffect(() => {
    setErrors([])
    setProductId(false)
  }, [open])

  const save = async (data) => {
    setLoading(true)
    let product_id = productId
    try {
      if (!product_id) {
        const product = await saveProduct(data)
        product_id = product.id
        setProductId(product_id)
      }
      
      await saveCategories(product_id, data.category)
      await saveOptionGroup(product_id, data.option_groups)
      await saveImages(product_id, data.images)
      setLoading(false)
      onClose()
    } catch(errors) {
      console.log(errors)
      if (errors.response && errors.response.data) {
        setErrors(errors.response.data)
      }
      setLoading(false)
    }
  }

  const saveProduct = async (product) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('title', product.name)
    form.append('long_description', product.description)
    form.append('short_description', product.snippet)
    form.append('meta_keywords', product.meta_keywords)
    form.append('meta_description', product.meta_description)
    form.append('price', product.price)
    form.append('discount', product.discount)
    const response = await axios.post(process.env.API_URL + `/product/create`, form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  }

  const saveCategories = async (product_id, categories) => {
    const promises = []
    categories.map(category => {
      promises.push(saveCategory(product_id, category.value))
    })
    await Promise.all(promises) 
  }

  const saveCategory = async (product_id, category_id) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('category', category_id)
    form.append('product', product_id)
    return axios.post(process.env.API_URL + `/product/category/create`, form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const saveOptionGroup = async (product_id, option_groups) => {
    const promises = []
    option_groups.map(group => {
      group.selectedOptions.map(option => {
        promises.push(saveOption(product_id, option.value))
      })
    })
    await Promise.all(promises)
  }

  const saveOption = async (product_id, option_id) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('product', product_id)
    form.append('option', option_id)
    return axios.post(process.env.API_URL + `/widget/product-option/create`, form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const saveImages = async (product_id, images) => {
    const promises = []
    images.map(image => {
      promises.push(saveImage(product_id, image))
    })
    await Promise.all(promises)
  }

  const saveImage = async (product_id, image) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('alt', image.alt)
    form.append('origin_inner', image.file)
    form.append('product', product_id)
    if (image.color > 0) {
      form.append('color', image.color)
    }
    return axios.post(process.env.API_URL + `/product/image/create`, form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  return(
    <Modal open={open} onClose={onClose}>
      <Title>Добавить товар</Title>
      <Form onSave={save} loading={loading} errors={errors}/>
    </Modal>
  )
}

export default memo(AddModal)

import React, {memo, useState, useEffect} from 'react'
import axios from 'axios'
import Modal from '../../../../../Modal'
import {Title} from '../../../../../Modal/style'
import Form from '../Form'
import {userGetToken} from '../../../../../../../../../../helpers/user-helper'

const EditModal = ({open, onClose, item}) => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [product, setProduct] = useState(false)

  useEffect(() => {
    setProduct(false)
    if (item.id) {
      getProducById(item.id).then((data) => {
        setProduct(data)
      })
    }
  }, [item])

  useEffect(() => {
    setErrors([])
  }, [open])

  const getProducById = async (id) => {
    try {
      const response = await axios.get(process.env.API_URL + `/product/` + id)
      return response.data
    } catch(errors) {
      return {}
    }
  }

  const save = async (data) => {
    setLoading(true)
    try {
      await saveProduct(data)
      await saveCategories(data.category)
      await saveOptionGroup(data.option_groups)
      await saveImages(data.images)
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
    const response = await axios.patch(process.env.API_URL + `/product/` + item.id + '/edit', form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  }

  const saveCategories = async (categories) => {
    const token = userGetToken()
    await axios.delete(process.env.API_URL + `/product/${item.id}/categories/delete`, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    const promises = []
    categories.map(category => {
      promises.push(saveCategory(category.value))
    })
    await Promise.all(promises) 
  }

  const saveCategory = async (category_id) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('category', category_id)
    form.append('product', item.id)
    return axios.post(process.env.API_URL + `/product/category/create`, form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const saveOptionGroup = async (option_groups) => {
    const token = userGetToken()
    await axios.delete(process.env.API_URL + `/product/${item.id}/options/delete`, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    const promises = []
    option_groups.map(group => {
      group.selectedOptions.map(option => {
        promises.push(saveOption(option.value))
      })
    })
    await Promise.all(promises)
  }

  const saveOption = async (option_id) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('product', item.id)
    form.append('option', option_id)
    return axios.post(process.env.API_URL + `/widget/product-option/create`, form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const saveImages = async (images) => {
    await getDeleteImages(images)
    await getUpdateImages(images)
    await getCreateImages(images)
  }

  const getDeleteImages = async (images) => {
    const token = userGetToken()
    const shouldDeleteImages = []
    const ids = []
    images.map(image => {
      ids.push(image.id)
    })
    item.images.map((image) => {
      if (!ids.includes(image.id)) {
        shouldDeleteImages.push(image.id)
      }
    })
    const promises = []
    shouldDeleteImages.map(image => {
      promises.push(axios.delete(process.env.API_URL + `/product/image/${image}`, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }))
    })
    return Promise.all(promises)
  }

  const getUpdateImages = async (images) => {
    const token = userGetToken()
    const promises = []
    images.map(image => {
      if (image.id) {
        const form = new FormData()
        if (image.file) {
          form.append('origin_inner', image.file)
        }
        if (image.color > 0) {
          form.append('color', image.color)
        } else {
          form.append('color', null)
        }
        form.append('alt', image.alt)
        promises.push(axios.patch(process.env.API_URL + `/product/image/${image.id}/edit`, form, {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }))
      }
    })
    return Promise.all(promises)
  }

  const getCreateImages = (images) => {
    const token = userGetToken()
    const promises = []
    images.map(image => {
      if (!image.id) {
        const form = new FormData()
        form.append('origin_inner', image.file)
        form.append('alt', image.alt)
        form.append('product', item.id)
        if (image.color > 0) {
          form.append('color', image.color)
        }
        promises.push(axios.post(process.env.API_URL + `/product/image/create`, form, {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }))
      }
    })
    return Promise.all(promises)
  }

  return(
    <Modal open={open} onClose={onClose}>
      <Title>Редактировать товар</Title>
      <Form onSave={save} loading={loading} errors={errors} item={product}/>
    </Modal>
  )
}

export default memo(EditModal)

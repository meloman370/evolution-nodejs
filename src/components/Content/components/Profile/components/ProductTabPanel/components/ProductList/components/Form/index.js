import React, {memo, useState, useEffect} from 'react'
import axios from 'axios'
import {InputField, Row, Left, Right, ButtonStyled, Loader, Error} from '../../../../../Modal/style'
import ImageList from './components/ImageList'
import {ImageTitle} from './style'
import MutliSelect from '../../../../../../../MultiSelect'

const Form = ({onSave, loading, errors, item}) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [snippet, setSnippet] = useState('')
  const [keywords, setKeywords] = useState('')
  const [meta_desc, setMetaDesc] = useState('')
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [images, setImages] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [categories, setCategories] = useState([])
  const [optionGroups, setOptionGroups] = useState([])

  useEffect(() => {
    preload()
  }, [item])

  const preload = async () => {
    const categories = await getCategories()
    const optionGroups = await getOptionGroups()

    if (item && item.id) {
      setName(item.title)
      setDescription(item.long_description)
      setSnippet(item.short_description)
      setKeywords(item.meta_keywords)
      setMetaDesc(item.meta_description)
      setPrice(item.price)
      setDiscount(item.discount)

      const selectedCategory = []
      item.category.map(category_id => {
        selectedCategory.push({
          value: category_id,
          label: getLabel(category_id, categories)
        })
      })
      setSelectedCategory(selectedCategory)

      optionGroups.map(group => {
        const selectedOptions = getOptionsByGroup(item, group.id)
        group.selectedOptions = selectedOptions
      })
      setImages(item.images)
    }

    setCategories(categories)
    setOptionGroups(optionGroups)
  }

  const getOptionsByGroup = (item, group_id) => {
    const options = []
    item.options.map(option => {
      if (option.group.id == group_id) {
        options.push({
          label: option.name,
          value: option.id
        })
      }
    })
    return options
  }

  const getLabel = (id, items) => {
    let label = ''
    items.map((item) => {
      if (item.value == id) {
        label = item.label
      }
    })
    return label
  }

  const getCategories = async () => {
    try {
      const response = await axios.get(process.env.API_URL + `/categories/`)
      return response.data.map(category => ({
        value: category.id,
        label: category.name
      }))
    } catch(errors) {
      return []
    }
  }

  const getOptionGroups = async () => {
    try{
      const response = await axios.get(process.env.API_URL + `/option-groups/`)
      response.data.map((optionGroup) => {
        const options = optionGroup.options.map(option => ({
          value: option.id,
          label: option.name
        }))
        optionGroup.options = options
        optionGroup.selectedOptions = []
      })
      return response.data
    } catch(errors) {
      return []
    }
  }

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeDescription = (e) => {
    setDescription(e.target.value)
  }

  const changeSnippet = (e) => {
    setSnippet(e.target.value)
  }

  const changeKeywords = (e) => {
    setKeywords(e.target.value)
  }

  const changeMetaDesc = (e) => {
    setMetaDesc(e.target.value)
  }

  const changePrice = (e) => {
    setPrice(e.target.value)
  }

  const changeDiscount = (e) => {
    setDiscount(e.target.value)
  }

  const changeImages = (images) => {
    setImages(images)
  }

  const changeSelectedCategory = (value) => {
    if (!value) {
      value = []
    }
    setSelectedCategory(value)
  }

  const changeOptionGroup = (selected, i) => {
    if (!selected) {
      selected = []
    }
    const option_groups_list = Array.from(optionGroups)
    option_groups_list[i].selectedOptions = selected
    setOptionGroups(option_groups_list)
  }

  const save = () => {
    onSave({
      name, 
      description, 
      snippet, 
      meta_keywords: keywords, 
      meta_description: meta_desc, 
      price, 
      discount,
      images, 
      category: selectedCategory, 
      option_groups: optionGroups
    })
  }

  return(
    <>
      <InputField
        id="name"
        label="Название"
        value={name}
        onChange={changeName}
        margin="normal"
        variant="outlined"
      />
      {errors['title'] && errors['title'].map((error, i) => (
        <Error key={i}>{error}</Error>
      ))}
      <InputField
        id="description"
        label="Описание"
        value={description}
        onChange={changeDescription}
        margin="normal"
        variant="outlined"
        multiline
      />
      {errors['long_description'] && errors['long_description'].map((error, i) => (
        <Error key={i}>{error}</Error>
      ))}
      <InputField
        id="snippet"
        label="Сниппет"
        value={snippet}
        onChange={changeSnippet}
        margin="normal"
        variant="outlined"
        multiline
      />
      {errors['short_description'] && errors['short_description'].map((error, i) => (
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
        id="meta_description"
        label="Meta description"
        value={meta_desc}
        onChange={changeMetaDesc}
        margin="normal"
        variant="outlined"
        multiline
      />
      {errors['meta_description'] && errors['meta_description'].map((error, i) => (
        <Error key={i}>{error}</Error>
      ))}
      <Row>
        <Left>
          <InputField
            id="price"
            label="Цена"
            value={price}
            onChange={changePrice}
            margin="normal"
            variant="outlined"
          />
          {errors['price'] && errors['price'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
        </Left>
        <Right>
          <InputField
            id="discount"
            label="Скидка"
            value={discount}
            onChange={changeDiscount}
            margin="normal"
            variant="outlined"
          />
          {errors['discount'] && errors['discount'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
        </Right>
      </Row>
      <MutliSelect
        onChange={changeSelectedCategory} 
        items={categories}
        selectedItems={selectedCategory}
        label="Категории"
        placeholder="Выберите несколько категорий"
      />
      {optionGroups.map((optionGroup, i) => (
        <MutliSelect
          onChange={(value) => changeOptionGroup(value, i)} 
          items={optionGroup.options}
          selectedItems={optionGroup.selectedOptions}
          label={optionGroup.name}
          placeholder="Выберите несколько значений"
          key={optionGroup.id}
        />
      ))}
      <ImageTitle>Изображения</ImageTitle>
      <ImageList images={images} onChange={changeImages}/>
      <ButtonStyled variant="outlined" onClick={save}>
        {loading ? <Loader /> : 'Сохранить'}
      </ButtonStyled>
    </>
  )
}

export default memo(Form)
import React, {memo, useState, useEffect} from 'react'
import {InputField, ButtonStyled, Loader, Error, Row} from '../../../../../../Modal/style'
import {Left, Right, TitleSlider} from './style'
import ProductListWidget from '../../../../../../ProductListWidget'
import ProductItem from '../../../../../../ProductListWidget/components/ProductItem'

const SliderForm = ({onSave, loading, errors, item}) => {
  const [blockName, setBlockName] = useState('')
  const [title, setTitle] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (item) {
      const slider = item.slider[0]
      setBlockName(item.name)
      setTitle(slider.title)
      setProducts(slider.products)
    }
  }, [item])

  const changeBlockName = (e) => {
    setBlockName(e.target.value)
  }

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const addProduct = (product) => {
    const product_list = Array.from(products)
    product_list.push(product)
    setProducts(product_list)
  }

  const delProduct = (product) => {
    const product_list = []
    products.map(item => {
      if (item.id !== product.id) {
        product_list.push(item)
      }
    })
    setProducts(product_list)
  }

  const save = () => {
    onSave({
      blockName,
      title,
      products
    })
  }

  return(
    <>
      <Row>
        <Left>
          <InputField
            id="block_name"
            label="Название"
            value={blockName}
            onChange={changeBlockName}
            margin="normal"
            variant="outlined"
          />
          {errors['name'] && errors['name'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
          <InputField
            id="block_title"
            label="Заголовок"
            value={title}
            onChange={changeTitle}
            margin="normal"
            variant="outlined"
          />
          {errors['title'] && errors['title'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
          <TitleSlider>Товары</TitleSlider>
          {products.map(product => (
            <ProductItem key={product.id} data={product} add={false} onClick={delProduct}/>
          ))}
        </Left>
        <Right>
          <ProductListWidget onSelect={addProduct} products={products}/>
        </Right>
      </Row>
      <ButtonStyled variant="outlined" onClick={save}>
        {loading ? <Loader /> : 'Сохранить'}
      </ButtonStyled>
    </>
  )
}

export default memo(SliderForm)
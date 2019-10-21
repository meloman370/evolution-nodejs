import React, {memo, useEffect, useState} from 'react'
import axios from 'axios'
import {TabPanelTitle, TabPanelDescription, TabPanelContent} from '../../style'
import ProductList from './components/ProductList'

const ProductTabPanel = () => {
  return(
    <>
      <TabPanelTitle>Товары</TabPanelTitle>
      <TabPanelDescription>Редактирование товаров</TabPanelDescription>
      <TabPanelContent>
        <ProductList />
      </TabPanelContent>
    </>
  )
}

export default memo(ProductTabPanel)
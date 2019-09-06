import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import ProductList from './components/ProductList'
import FooterCart from './components/FooterCart'

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const Cart = ({ open = false, onOpen, onClose }) => {
  return(
    <SwipeableDrawer
      open={open}
      anchor="right"
      onOpen={onOpen}
      onClose={onClose}
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS}
    >
      <ProductList/>
      <FooterCart/>
    </SwipeableDrawer>
  )
}

export default Cart
import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProductList from './components/ProductList'
import FooterCart from './components/FooterCart'

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
const useStyles = makeStyles({
  drawerPaper: {
    height: 'auto'
  }
})

const Cart = ({ open = false, onOpen, onClose }) => {
  const classes = useStyles()
  return(
    <SwipeableDrawer
      open={open}
      anchor="right"
      onOpen={onOpen}
      onClose={onClose}
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <ProductList/>
      <FooterCart/>
    </SwipeableDrawer>
  )
}

export default Cart
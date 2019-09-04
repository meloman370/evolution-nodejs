import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

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
      cart content
    </SwipeableDrawer>
  )
}

export default Cart
import React, {memo, useState, useEffect} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Modal from '../../../Modal'
import {Title} from '../../../Modal/style'
import EditBanner from '../BlockList/components/BannerBlock/Edit'
import EditSlider from '../BlockList/components/SliderBlock/Edit'

const types = {
  SLIDER: 1,
  BANNER: 2
}

const EditModal = ({open, onClose, item}) => {
  const [type, setType] = useState(false)

  useEffect(() => {
    if (item.banner.length) {
      setType(types.BANNER)
    } else if(item.slider.length) {
      setType(types.SLIDER)
    }
  }, [item])

  return(
    <Modal open={open} onClose={onClose}>
      <Title>Редактировать блок</Title>
      {type == types.SLIDER &&
        <EditSlider onClose={onClose} item={item}/>
      }
      {type == types.BANNER &&
        <EditBanner onClose={onClose} item={item} />
      }
    </Modal>
  )
}

export default memo(EditModal)
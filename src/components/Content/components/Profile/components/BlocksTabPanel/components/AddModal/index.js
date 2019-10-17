import React, {memo, useState, useEffect} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Modal from '../../../Modal'
import {Title, InputField, ButtonStyled, Loader, Error} from '../../../Modal/style'
import SelectField from '../../../Modal/components/SelectField'
import AddBanner from '../BlockList/components/BannerBlock/Add'
import AddSlider from '../BlockList/components/SliderBlock/Add'

const types = {
  SLIDER: 1,
  BANNER: 2
}

const AddModal = ({open, onClose, weight}) => {
  const [type, setType] = useState(types.SLIDER)

  const handleChange = (e) => {
    setType(e.target.value)
  }

  return(
    <Modal open={open} onClose={onClose}>
      <Title>
        Добавить блок
        <SelectField onChange={handleChange} value={type}>
          <MenuItem value={types.SLIDER}>Слайдер</MenuItem>
          <MenuItem value={types.BANNER}>Банер</MenuItem>
        </SelectField>
      </Title>
      {type == types.SLIDER &&
        <AddSlider weight={weight} onClose={onClose}/>
      }
      {type == types.BANNER &&
        <AddBanner weight={weight} onClose={onClose}/>
      }
    </Modal>
  )
}

export default memo(AddModal)
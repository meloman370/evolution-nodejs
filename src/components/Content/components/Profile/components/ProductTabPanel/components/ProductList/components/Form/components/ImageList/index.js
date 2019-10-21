import React, {memo, useEffect, useState} from 'react'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem'
import Fab from '@material-ui/core/Fab'
import {ImageItem, ColorWrapper, ImageButton, DeleteButton} from './style'
import ImageUpload from '../../../../../../../../../ImageUpload'
import {Row, Left, Right, InputField} from '../../../../../../../Modal/style'
import SelectField from '../../../../../../../Modal/components/SelectField'

const ImageList = ({images, onChange}) => {
  const [colors, setColors] = useState([])

  useEffect(() => {
    getColors().then((colors) => {
      setColors(colors)
      console.log(colors)
    })
  }, [])

  const getColors = async () => {
    const params = {
      name: 'color'
    }
    try {
      const response = await axios.get(process.env.API_URL + `/option-groups/`, {params})
      if (response.data.length) {
        return response.data[0].options
      } else {
        return []
      }
    } catch(errors) {
      return []
    }
  }

  const addImage = () => {
    const image_list = Array.from(images)
    image_list.push({
      alt: '',
      origin: '',
      color: 0
    })
    onChange(image_list)
  }

  const deleteImage = (index) => {
    const image_list = []
    images.map((image, i) => {
      if (index !== i) {
        image_list.push(image)
      }
    })
    onChange(image_list)
  }

  const changeImage = (file, i) => {
    const image_list = Array.from(images)
    image_list[i].file = file
    onChange(image_list)
  }

  const changeAlt = (alt, i) => {
    const image_list = Array.from(images)
    image_list[i].alt = alt
    onChange(image_list)
  }

  const changeColor = (value, i) => {
    const image_list = Array.from(images)
    image_list[i].color = value
    onChange(image_list)
  }

  return(
    <>
      {images.map((image, i) => (
        <Row key={i}>
          <Left>
            <ImageItem>
              <ImageUpload onChange={(file) => changeImage(file, i)} src={image.origin}/>
            </ImageItem>
          </Left>
          <Right>
            <InputField
              id="alt"
              label="Alt"
              value={image.alt}
              onChange={(e) => changeAlt(e.target.value, i)}
              margin="normal"
              variant="outlined"
            />
            <ColorWrapper>
              <span>Цвет</span>
              <SelectField value={image.color} onChange={(e) => changeColor(e.target.value, i)}>
                <MenuItem value={0}>Нет</MenuItem>
                {colors.map(color => (
                  <MenuItem key={color.id} value={color.id}>{color.name}</MenuItem>
                ))}
              </SelectField>
            </ColorWrapper>
            <DeleteButton>
              <Fab size="medium" color="primary" aria-label="add" onClick={() => deleteImage(i)}>
                <DeleteIcon />
              </Fab>
            </DeleteButton>
          </Right>
        </Row>
      ))}
      <ImageButton>
        <Fab size="medium" color="primary" aria-label="add" onClick={addImage}>
          <AddIcon />
        </Fab>
      </ImageButton>
    </>
  )
}

export default memo(ImageList)
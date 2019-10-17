import React, {memo, useState, useEffect} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import {InputField, ButtonStyled, Loader, Error, Row, Left, Right} from '../../../../../../Modal/style'
import AlignWidget from '../../../../../../AlignWidget'
import ImageUpload from '../../../../../../../../ImageUpload'

const BannerForm = ({onSave, loading, errors, item}) => {
  const [blockName, setBlockName] = useState('')
  const [link, setLink] = useState('')
  const [buttonText, setButtonText] = useState('')
  const [textSize, setTextSize] = useState('')
  const [text, setText] = useState('')
  const [file, setFile] = useState({})
  const [imageSrc, setImageSrc] = useState('')
  const [textVertial, setTextVertical] = useState(1)
  const [textHorizontal, setTextHorizontal] = useState(1)
  const [buttonVertial, setButtonVertical] = useState(1)
  const [buttonHorizontal, setButtonHorizontal] = useState(1)
  const [full, setFull] = useState(false)

  useEffect(() => {
    if (item) {
      const banner = item.banner[0]
      setBlockName(item.name)
      setLink(banner.link)
      setButtonText(banner.button_text)
      setTextSize(banner.text_size)
      setText(banner.text)
      setTextVertical(banner.align_text_vertical)
      setTextHorizontal(banner.align_text_horisontal)
      setButtonVertical(banner.align_button_vertical)
      setButtonHorizontal(banner.align_button_horisontal)
      setFull(banner.is_full)
      setImageSrc(banner.image)
    }
  }, [item])

  const changeBlockName = (e) => {
    setBlockName(e.target.value)
  }

  const changeLink = (e) => {
    setLink(e.target.value)
  }

  const changeButtonText = (e) => {
    setButtonText(e.target.value)
  }

  const changeTextSize = (e) => {
    setTextSize(e.target.value)
  }

  const changeText = (e) => {
    setText(e.target.value)
  }

  const changeAlignText = (vertical, horizontal) => {
    setTextVertical(vertical)
    setTextHorizontal(horizontal)
  }

  const changeAlignButton = (vertical, horizontal) => {
    setButtonVertical(vertical)
    setButtonHorizontal(horizontal)
  }

  const changeFile = (file) => {
    setFile(file)
  }

  const changeFull = () => {
    setFull(!full)
  }

  const save = () => {
    onSave({
      blockName,
      link,
      buttonText,
      textSize,
      text,
      file,
      textVertial,
      textHorizontal,
      buttonVertial,
      buttonHorizontal,
      full
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
            id="link"
            label="Ссылка"
            value={link}
            onChange={changeLink}
            margin="normal"
            variant="outlined"
          />
          {errors['link'] && errors['link'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
          <InputField
            id="button_text"
            label="Текст кнопки"
            value={buttonText}
            onChange={changeButtonText}
            margin="normal"
            variant="outlined"
          />
          {errors['button_text'] && errors['button_text'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
          <InputField
            id="text_size"
            label="Размер текста"
            value={textSize}
            onChange={changeTextSize}
            margin="normal"
            variant="outlined"
          />
          {errors['text_size'] && errors['text_size'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
        </Left>
        <Right>
          <ImageUpload onChange={changeFile} src={imageSrc}/>
          {errors['image'] && errors['image'].map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
        </Right>
      </Row>
      <InputField
        id="text"
        label="Текст"
        value={text}
        onChange={changeText}
        margin="normal"
        variant="outlined"
        multiline
      />
      {errors['text'] && errors['text'].map((error, i) => (
        <Error key={i}>{error}</Error>
      ))}
      <FormControlLabel
        control={<Switch checked={full} onChange={changeFull}/>}
        label="На весь экран"
        labelPlacement="end"
      />
      <Row jc="space-around">
        <AlignWidget onChange={changeAlignText} title="Выравнивание текста" value={[textVertial, textHorizontal]}/>
        <AlignWidget onChange={changeAlignButton} title="Выравнивание кнопки" value={[buttonVertial, buttonHorizontal]}/>
      </Row>
      <ButtonStyled variant="outlined" onClick={save}>
        {loading ? <Loader /> : 'Сохранить'}
      </ButtonStyled>
    </>
  )
}

export default memo(BannerForm)
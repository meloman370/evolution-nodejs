import React, {memo, createRef, useState, useEffect} from 'react'
import SaveIcon from '@material-ui/icons/Save'
import {Button, UploadStyled, Image} from './style'

const ImageUpload = ({onChange, src}) => {
  const imageRef = createRef()
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(src)
  }, [src])

  const uploadFile = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0]
      onChange(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setUrl(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const onClickHandler = () => {
    imageRef.current.click()
  }

  return(
    <>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={uploadFile}
        ref={imageRef}
      />
      <UploadStyled>
        <Image url={url}/>
        <Button onClick={onClickHandler}>
          <SaveIcon/>
        </Button>
      </UploadStyled>
    </>
  )
}

export default memo(ImageUpload)
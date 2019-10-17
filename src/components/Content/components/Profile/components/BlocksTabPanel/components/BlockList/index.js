import React, {memo, useState, useEffect} from 'react'
import DraggableList from 'react-draggable-list'
import axios from 'axios'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import {userGetToken} from '../../../../../../../../helpers/user-helper'
import {ListStyled, CreateButton} from './style'
import BlockItem from '../BlockItem'
import AddModal from '../AddModal'

const BlockList = ({blocks}) => {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setItems(blocks)
  }, [blocks])

  const onCreate = () => {
    setOpen(true)
  }

  const onCloseModal = () => {
    setOpen(false)
  }

  const onUpdate = async (newList) => {
    setItems(newList)
    const bunch = []
    newList.map((item, i) => {
      bunch.push(updateBlockOrder(item.id, i))
    })
    try {
      await Promise.all(bunch)
    } catch(error) {
      console.log(error)
    }
  }

  const updateBlockOrder = async (id, weight) => {
    const token = userGetToken()
    const form = new FormData()
    form.append('weight', weight)
    return axios.patch(process.env.API_URL + `/block/` + id + '/edit', form, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  return(
    <ListStyled>
      <DraggableList
        itemKey="id"
        template={BlockItem}
        list={items}
        onMoveEnd={onUpdate}
        container={() => document.body}
      />
      <CreateButton>
        <Fab size="medium" color="primary" aria-label="add" onClick={onCreate}>
          <AddIcon />
        </Fab>
      </CreateButton>
      <AddModal open={open} onClose={onCloseModal} weight={items.length}/>
    </ListStyled>
  )
}

export default memo(BlockList)
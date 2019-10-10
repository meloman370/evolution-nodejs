import React, {memo, useState} from 'react'
import List from '../List'
import AddModal from './components/AddModal'
import EditModal from './components/EditModal'
import DeleteModal from './components/DeleteModal'

const CategoryList = ({items = [], onSelect, parent}) => {
  const [add, openAdd] = useState(false)
  const [edit, openEdit] = useState(false)
  const [del, openDel] = useState(false)
  const [activeItem, setActiveItem] = useState({})

  const createHandler = () => {
    openAdd(true)
  }

  const editHandler = (item) => {
    openEdit(true)
    setActiveItem(item)
  }

  const deleteHandler = (item) => {
    openDel(true)
    setActiveItem(item)
  }

  const onCloseModal = () => {
    openAdd(false)
    openEdit(false)
    openDel(false)
  }

  return(
    <>
      <List items={items} onSelect={onSelect} onCreate={createHandler} onEdit={editHandler} onDelete={deleteHandler}/>
      <AddModal open={add} onClose={onCloseModal} parent={parent}/>
      <EditModal open={edit} onClose={onCloseModal} item={activeItem}/>
      <DeleteModal open={del} onClose={onCloseModal} item={activeItem}/>
    </>
  )
}

export default memo(CategoryList)
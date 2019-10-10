import React, {memo, useState} from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Item from './components/Item'
import {ListStyled, CreateButton} from './style'

const List = ({items, onSelect, onCreate, onEdit, onDelete}) => {
  const [active, setActive] = useState(0)

  const onSelectItem = (item) => {
    setActive(item.id)
    onSelect(item)
  }

  const onEditItem = (item) => {
    onEdit(item)
  }

  const onDeleteItem = (item) => {
    onDelete(item)
  }

  return(
    <ListStyled>
      <div>
        {items.map(item => (
          <Item
            className={active == item.id ? 'active' : ''}
            key={item.id}
            onSelect={onSelectItem}
            onEdit={onEditItem}
            onDelete={onDeleteItem}
            data={item}
          />
        ))}
      </div> 
      <CreateButton>
        <Fab size="medium" color="primary" aria-label="add" onClick={onCreate}>
          <AddIcon />
        </Fab>
      </CreateButton>
    </ListStyled>
  )
}

export default memo(List)
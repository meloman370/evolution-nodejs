import React, {memo} from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import {ItemStyled} from '../../style'


const Item = ({data, onSelect, onEdit, onDelete, ...props}) => {
  const onClick = () => {
    onSelect(data)
  }

  const clickEdit = () => {
    onEdit(data)
  }

  const clickDelete = () => {
    onDelete(data)
  }

  return(
    <ItemStyled onClick={onClick} {...props}>
      {data.name}
      <div className="actions">
        <EditIcon className="edit" onClick={clickEdit}/>
        <DeleteIcon className="delete" onClick={clickDelete}/>
      </div>
    </ItemStyled>
  )
}

export default memo(Item)
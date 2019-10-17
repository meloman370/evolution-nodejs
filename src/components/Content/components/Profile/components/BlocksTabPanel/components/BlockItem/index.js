import React, {PureComponent} from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import {BlockItemStyled, Name} from './style'
import DeleteModal from '../DeleteModal'
import EditModal from '../EditModal'

class BlockItem extends PureComponent {
  state = {
    editModal: false,
    deleteModal: false
  }

  clickEdit = () => {
    this.setState({
      editModal: true
    })
  }

  clickDelete = () => {
    this.setState({
      deleteModal: true
    })
  }

  onClose = () => {
    this.setState({
      editModal: false,
      deleteModal: false
    })
  }

  render() {
    const {item, dragHandleProps} = this.props
    return(
      <BlockItemStyled>
        <Name>
          <DragIndicatorIcon {...dragHandleProps}/>
          {item.name}
        </Name>
        <div className="actions">
          <EditIcon className="edit" onClick={this.clickEdit}/>
          <DeleteIcon className="delete" onClick={this.clickDelete}/>
        </div>
        <DeleteModal open={this.state.deleteModal} onClose={this.onClose} item={item} />
        <EditModal open={this.state.editModal} onClose={this.onClose} item={item}/>
      </BlockItemStyled>
    )
  }
}

export default BlockItem
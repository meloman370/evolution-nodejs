import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchBlockIfNeeded} from '../../../../../../redux/actions/block'
import {TabPanelTitle, TabPanelDescription, TabPanelContent} from '../../style'
import {BlockTabStyled} from './style'
import BlockList from './components/BlockList'

class BlocksTabPanel extends PureComponent {
  
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchBlockIfNeeded())
  }
  
  render() {
    const {blocks} = this.props
    return(
      <BlockTabStyled>
        <TabPanelTitle>Блоки</TabPanelTitle>
        <TabPanelDescription>Настройка блоков на главной странице</TabPanelDescription>
        <TabPanelContent>
          <BlockList blocks={blocks}/>
        </TabPanelContent>
      </BlockTabStyled>
    )
  }
}

function mapStateToProps(state) {
  const { items } = state.block
  
  return {
    blocks: items
  }
}

export default connect(mapStateToProps)(BlocksTabPanel)
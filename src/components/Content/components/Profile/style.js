import styled from 'styled-components'
import Tab from '@material-ui/core/Tab'

export const Panel = styled.div`
  display: flex;
  padding: 50px 0;
  width: 100%;
`

export const Item = styled(Tab)`
  border: 1px solid #c6c6c6 !important;

  &:not(:last-child) {
    border-bottom: 0 !important;
  }
`

export const TabPanelTitle = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 100;
`

export const TabPanelDescription = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 100;
`

export const TabPanelContent = styled.div`
  margin-top: 15px;
`
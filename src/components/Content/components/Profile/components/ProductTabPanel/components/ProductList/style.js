import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export const ProductListStyled = styled.div`
  img {
    width: 40px;
  }

  .MuiTablePagination-caption {
    display: none;
  }

  .MuiTablePagination-input {
    display: none;
  }
`

export const PaginationStyled = styled.div`
  width: 260px;
`

export const Top = styled.div`
  display: inline-block;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const SearchField = styled(TextField)`
  margin-bottom: 15px !important;
`

export const CreateButton = styled.div`
  text-align: center;
  margin-left: 15px;

  .MuiFab-sizeMedium {
    background: rgba(134, 109, 34, 0.4);
    &:hover {
      background: rgba(134, 109, 34, 0.4);
    }
  }
`

import styled from 'styled-components'

export const ListStyled = styled.div`
  padding-right: 15px;

  &:not(:first-child) {
    padding-left: 15px;
    border-left: 1px solid #e3e3e3;
  }
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #c6c6c6;
  cursor: pointer;
  font-family: Roboto;
  text-transform: uppercase;
  font-size: 13px;

  &:not(:last-child) {
    border-bottom: 0;
  }

  &.active {
    background: rgba(198, 198, 198, 0.5);
  }

  .actions {
    margin-left: 15px;

    .edit {
      margin-right: 5px;
      color: #888888;
      width: 20px;
      height: 20px;
    }
    .delete {
      width: 20px;
      height: 20px;
      color: rgba(239, 0, 0, 0.51);
    }
  }
`

export const CreateButton = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 15px;
  min-width: 180px;

  .MuiFab-sizeMedium {
    background: rgba(134, 109, 34, 0.4);
    &:hover {
      background: rgba(134, 109, 34, 0.4);
    }
  }
`
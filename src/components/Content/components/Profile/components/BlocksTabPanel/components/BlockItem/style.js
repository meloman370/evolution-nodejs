import styled from 'styled-components'

export const BlockItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid rgb(198, 198, 198);
  cursor: pointer;
  font-family: Roboto;
  text-transform: uppercase;
  font-size: 13px;

  .actions {
    margin-left: 15px;

    .edit {
      margin-right: 5px;
      color: #888888;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .delete {
      width: 20px;
      height: 20px;
      color: rgba(239, 0, 0, 0.51);
      cursor: pointer;
    }
  }
`

export const Name = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`
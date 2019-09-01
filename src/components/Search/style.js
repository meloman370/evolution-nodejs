import styled from 'styled-components'

const SearchStyled = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    border: 1px solid #DFDFDF;
    border-radius: 4px;
    font-size: 19px;
    padding: 10px;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  label {
    display: none;
  }
`

export default SearchStyled
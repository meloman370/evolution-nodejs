import styled from 'styled-components'

const CounterStyled = styled.div`
  display: flex;
  width: 90px;
  border: 1px solid #969696;
  margin-bottom: 10px;

  div {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;

    &:first-child {
      border-right: 1px solid #969696;
    }

    &:last-child {
      border-left: 1px solid #969696;
    }
  }

  .input {
    font-family: Roboto;
    cursor: default;
    width: 40px;
    align-items: center;
    font-size: 18px;
    font-weight: 100;
  }
`

export default CounterStyled
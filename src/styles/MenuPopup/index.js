import styled from 'styled-components'

const MenuPopup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 35px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background: white;
  box-sizing: border-box;
  z-index: 9999;

  .blocks {
    display: flex;
    width: 100%;
  }
`

export default MenuPopup
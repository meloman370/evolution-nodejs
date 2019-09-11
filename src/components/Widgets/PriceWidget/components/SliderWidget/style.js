import styled from 'styled-components'
import Slider from '@material-ui/core/Slider';

const SliderStyled = styled(Slider)`
  margin-top: 15px;

  .MuiSlider-rail {
    height: 4px;
    border-radius: 5px;
    background: white;
    border: 2px solid #c6c6c6;
  }

  .MuiSlider-track {
    height: 5px;
    border: 1px solid rgb(198, 198, 198);
    background: rgb(198, 198, 198);
  }

  .MuiSlider-thumb {
    height: 16px;
    width: 6px;
    border-radius: 6px;
    background: white;
    border: 1px solid rgb(150, 150, 150);
    margin-left: 0px;

    &:hover {
      box-shadow: 0px 0px 0px 8px rgba(142, 142, 146, 0.16);
    }

    &.MuiSlider-active {
      box-shadow: 0px 0px 0px 14px rgba(154, 154, 158, 0.16);
    }
  }

  .MuiSlider-valueLabel {
    color: black;
    font-family: Roboto;
    font-weight: 300;
    top: 20px;
    left: auto;
    position: absolute;
    font-size: 16px;
    transform: none !important;
    z-index: 0;

    span {
      width: auto;
      height: auto;
      background-color: transparent;
      color: black;
    }
  }

  .MuiSlider-mark {
    height: 12px;
    margin-top: -2px;
    color: #eaeaea;

    &.MuiSlider-markActive {
      background: #c6c6c6;
    }
  }
`

export default SliderStyled
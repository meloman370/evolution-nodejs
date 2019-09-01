import React, { Component } from 'react'
import Banner from '../components/Content/components/Banner'
import HomePageBlock from '../styles/HomePageBlock'
import Slider from '../components/Content/components/Slider'

export default class Home extends Component {
  render() {
    return (
			<>
      	<HomePageBlock>
      	  <Banner 
      	    img="first.png" 
      	    link="/" 
      	    align="right"
						isFull={true}/>
      	</HomePageBlock>
				<HomePageBlock>
					<Slider title="Бестселлеры"/>
				</HomePageBlock>
			</>
    )
  }
}

import React, { Component } from 'react'
import Banner from '../components/Content/components/Banner'
import HomePageBlock from '../styles/HomePageBlock'
import Carousel from '../components/Content/components/Carousel'
import ProductTeaser from '../components/ProductTeaser'
import Container from '../styles/Container'
import Row from '../styles/Row'
import Map from '../components/Content/components/Map'

export default class Home extends Component {
	constructor(props) {
    super(props)
    this.product = {
      'title': 'Маша',
      'type': 'Анальный вибратор',
      'image': 'product.png',
      'price': '420',
      'currency': 'BYN',
      'discount': '120'
		}
		
		this.product2 = {
      'title': 'Мисс Марпл',
      'type': 'Двойной вибратор',
      'image': 'product2.png',
      'price': '420',
      'currency': 'BYN',
      'discount': '120'
    }
	}
	
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
					<Container>
						<Row>
							<Carousel title="Бестселлеры">
								<ProductTeaser data={this.product}/>
								<ProductTeaser data={this.product2}/>
								<ProductTeaser data={this.product}/>
								<ProductTeaser data={this.product}/>
								<ProductTeaser data={this.product}/>
								<ProductTeaser data={this.product}/>
								<ProductTeaser data={this.product}/>
								<ProductTeaser data={this.product}/>
							</Carousel>
						</Row>
					</Container>
				</HomePageBlock>

				<HomePageBlock>
      	  <Banner 
      	    img="second.png" 
      	    link="/" 
      	    align="center"
						isFull={false}/>
      	</HomePageBlock>

				<HomePageBlock>
      	  <Banner 
      	    img="third.png" 
      	    link="/" 
      	    align="center"
						isFull={false}/>
      	</HomePageBlock>

				<Map/>
			</>
    )
  }
}

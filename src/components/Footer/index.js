import React, { Component } from 'react'
import FooterStyled, { RowFooter } from './style'
import Container from '../../styles/Container'
import FooterBlock from './components/FooterBlock'
import Link from './components/Link'
import SocialIcon from './components/SocialIcon'

export default class Footer extends Component {
  render() {
    return (
      <FooterStyled>
        <Container>
          <RowFooter>
            <FooterBlock title="Обслуживание клиентов">
              <Link to="/">Как купить</Link>
              <Link to="/">Оффлайн магазин</Link>
              <Link to="/">Часто задаваемые вопросы</Link>
              <Link to="/">Обмен или возврат</Link>
            </FooterBlock>
						<FooterBlock title="О магазине Evolution">
              <Link to="/">Концепция</Link>
              <Link to="/">Политика конфеденциальности</Link>
              <Link to="/">Условия использования</Link>
            </FooterBlock>
						<FooterBlock title="Свяжитесь с нами">
              <Link to="http://telegram.com" external={true}>Telegram / Viber +375 (29) 578-96-98</Link>
              <Link to="/">evolution_sprosi@gmail.com</Link>
              <Link to="/">Обмен или возврат</Link>
              <SocialIcon name="instagram.png" alt="Instagram" to="https://instagram.com"/>
              <SocialIcon name="telegram.png" alt="Telegram" to="https://telegram.com"/>
            </FooterBlock>
          </RowFooter>
        </Container>
      </FooterStyled>
    )
  }
}

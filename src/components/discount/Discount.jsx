import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DISCOUNT_DATA } from './discountData/discountData';
import Cart from '../cart/Cart';
import board from './img/board.png'
import './discount.scss';

export default function Discount() {
  return (
    <section className="discount">
      <Container>
        <Row>
          <Col md={5}>
            <div className="discount__img"><img src={board} alt="board"/></div>
          </Col>
          <Col md={7}>
            <div className="discount__carts carts">
              <div className="carts__title title">
                Акции
              </div>
              {
                DISCOUNT_DATA.map(({title, text, url, transparent}, i) => (
                  <div className="carts__cart"  key={i} >
                    <Cart className="carts__cart" title={title} text={text} url={url} transparent={transparent}/>
                  </div>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )

}

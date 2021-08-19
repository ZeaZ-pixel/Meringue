import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import board from './img/board.png'
import './discount.scss';

export default function Discount() {
  return (
    <div className="discount">
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

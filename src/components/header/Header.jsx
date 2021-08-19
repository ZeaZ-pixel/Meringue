import React from "react";
import logo from './img/logo.svg'
import basket from './img/basket.svg';
import { Container, Row, Col } from "react-bootstrap";
import { HEADER_LINK, PHONE_NUMBER } from "./headerData/headreData";
import { Link } from "react-router-dom";
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <nav className="header__nav">
          <Row>
            <Col md={3}>
            <Link to="" className="header__logo"><img src={logo} alt="logo" /></Link>
            </Col>
            <Col md={6}>
              <ul className="header__list">
                {HEADER_LINK.map(({url, name}, i) => (
                  <li key={i}><Link to={url} className="header__item">{name}</Link></li>
                ))}
              </ul>
            </Col>
            <Col md={{span:2, offset:1}}>

              <div className="header__contacts">
                <Link to="" className="phone__call">{PHONE_NUMBER.phone}</Link>
                <Link to="" className="basket"><img src={basket} alt="basket" /></Link>
              </div>
            </Col>
          </Row>
        </nav>
      </Container>
    </header>
  );
}
import React from 'react'
import logo from './aboutData/img/logo.svg';
import { ABOUT_DATA } from './aboutData/aboutData';
import { Container ,Row, Col } from 'react-bootstrap';
import './about.scss';

export default function About() {
  return(
    <section className="about">
      <Container>
        <div className="about__title title">Почему именно</div>
        <div className="about__logo"><img src={logo} alt="logo"/></div>
        <ul className="about__couses couses">  
          <Row>
          {
            ABOUT_DATA.map(({url, title, text}, i) => (
              <Col  key={i} md={3}>
                <li className="couses__item">
                  <div className="couses__item-img">
                    <img src={url} alt={title} />
                  </div>
                  <div className="couses__item-title">
                    {title}
                  </div>
                  <div className="couses__item-text">
                    {text}
                  </div>
                </li>
              </Col>
            ))
          }
          </Row>
        </ul>
      </Container>
    </section>
  );
}
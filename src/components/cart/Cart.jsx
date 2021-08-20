import React from 'react';
import { Link } from 'react-router-dom';
import './cart.scss'
export default function Cart({title, text, url, transparent=true}) {
  return (
    <div className={transparent? "cart cart_transparent": "cart"}>
      <div className="cart__title">
        {title}
      </div>
      <div className="cart__text">
        {text}
      </div>
      <Link className={transparent? "cart__btn cart__btn_red": "cart__btn"} to={url}>
        Воспользоваться
      </Link>
    </div>
  )
}
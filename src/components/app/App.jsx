import React from "react";
import Header from "../header/Header";
import About from "../about/About";
import Discount from "../discount/Discount";
import './app.scss';

export default function App() {
  return (
    <>
      <Header/>
      <About/>
      <Discount/>
    </>
  );
}
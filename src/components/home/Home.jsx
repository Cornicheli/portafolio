import React from "react";
import Header from "../header/Header";
import Skills from "../skill/Skills";
import AboutMe from "../aboutMe/AboutMe";
import MyProyect from "../myproyect/MyProyect";
import Contact from "../contact/Contact";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Contact />
      <Skills />
      <MyProyect />
    </>
  );
}

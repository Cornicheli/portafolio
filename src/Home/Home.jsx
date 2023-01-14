import React from "react";
import Header from "../components/header/Header";
import Skills from "../components/skill/Skills";
import AboutMe from "../components/aboutMe/AboutMe";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
    </>
  );
}

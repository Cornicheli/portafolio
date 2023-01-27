import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="ctn-header">
        <div className="ctn-ancor-header">
          <a className="ancor-header" href="#home">
            About me
          </a>
        </div>

        <div className="ctn-ancor-header">
          <a className="ancor-header" href="#contact">
            Contact
          </a>
        </div>

        <div className="ctn-ancor-header">
          <a className="ancor-header" href="#skill">
            Skills
          </a>
        </div>

        <div className="ctn-ancor-header">
          <a className="ancor-header" href="#proyect">
            My Proyects
          </a>
        </div>
      </div>
    </>
  );
}

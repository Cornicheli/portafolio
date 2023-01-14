import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="ctn-header">
        <div className="ctn-ancor-header">
          <a className="ancor-header" href="#">
            Home
          </a>
        </div>
        <div className="ctn-ancor-header">
          <a className="ancor-header" href="#">
            About me
          </a>
        </div>
        <div className="ctn-ancor-header">
          <a className="ancor-header" href="#">
            Skills
          </a>
        </div>
        <div className="ctn-ancor-header">
          <a className="ancor-header" href="#">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

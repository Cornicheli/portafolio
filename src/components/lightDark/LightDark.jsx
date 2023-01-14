import React from "react";
import "./lightDark.css";
import "../skill/skills.css";
import Skills from "../skill/Skills";
import AboutMe from "../aboutMe/AboutMe";

export default function LightDark() {
  return (
    <>
      <div>
        <form>
          <div className="ctn-button-ligthdark">
            <input
              id="dark-mode"
              class="toggle"
              type="checkbox"
              name="Dark mode"
              role="switch"
              value="on"
            />
            <label for="dark-mode" class="sr">
              Dark Mode
            </label>
            <div class="curtain"></div>
          </div>
          <AboutMe />
          <Skills />
        </form>
      </div>
    </>
  );
}

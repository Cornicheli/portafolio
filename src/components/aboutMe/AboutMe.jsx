import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="ctn-aboutme" id="home">
        <div className="ctn-text-aboutme">
          <p className="text-aboutme">
            ¿ About Me ? I am Gabriel Cornide <br />
            Hello, Welcome to my profile, who am I? FullStack MERN developer, I
            am passionate about technology and programming languages, as well as
            the IT world. Along with the ability to develop scalable web
            projects individually and in groups. I went through an intensive
            bootcamp at MindHub with +800hs of coursework oriented to Full-Stack
            JavaScript development. <br />
            <a className="link-aboutme" href="#contact">
              → My Contact ←
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

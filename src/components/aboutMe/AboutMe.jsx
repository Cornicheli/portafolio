import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="ctn-aboutme">
        <div className="ctn-text1-aboutme">
          <h4 className="title-aboutme">¿ About Me ? I am Gabriel Cornide</h4>
          <div className="ctn-link-aboutme">
            <a
              className="link-aboutme"
              target="blank"
              href="https://github.com/Cornicheli"
            >
              GitHub
            </a>
            <a
              className="link-aboutme"
              target="blank"
              href="https://www.linkedin.com/in/gabriel-cornide-99624923b/"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="ctn-text2-aboutme">
          <p className="text-aboutme">
            Hello, Welcome to my profile, who am I? FullStack MERN developer, I
            am passionate about technology and programming languages, as well as
            the IT world. Along with the ability to develop scalable web
            projects individually and in groups. I went through an intensive
            bootcamp at MindHub with +800hs of coursework oriented to Full-Stack
            JavaScript development.
          </p>
        </div>
      </div>
    </>
  );
}

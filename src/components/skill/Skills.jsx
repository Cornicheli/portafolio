import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <>
      <div className="cnt-skills">
        <div className="ctn-title-skill">
          <h5 className="title-skill">My skills as a fullstack developer</h5>
        </div>
        <div className="ctn-skill-card">
          <ul class="wrapper">
            <li class="icon html">
              <span class="tooltip">HTML</span>
              <span>
                <i class="fab fa-html-f">H</i>
              </span>
            </li>
            <li class="icon css">
              <span class="tooltip">CSS</span>
              <span>
                <i class="fab fa-css">C</i>
              </span>
            </li>
            <li class="icon javascript">
              <span class="tooltip">JavaScript</span>
              <span>
                <i class="fab fa-javascript">J</i>
              </span>
            </li>
            <li class="icon bootstrap">
              <span class="tooltip">Bootstrap</span>
              <span>
                <i class="fab fa-bootstrap">B</i>
              </span>
            </li>
            <li class="icon mongodb">
              <span class="tooltip">Mongo DB</span>
              <span>
                <i class="fab fa-mongodb">M</i>
              </span>
            </li>
            <li class="icon express">
              <span class="tooltip">Express</span>
              <span>
                <i class="fab fa-express">E</i>
              </span>
            </li>
            <li class="icon react">
              <span class="tooltip">React</span>
              <span>
                <i class="fab fa-react">R</i>
              </span>
            </li>
            <li class="icon reactnative">
              <span class="tooltip">React Native</span>
              <span>
                <i class="fab fa-reactnative">R</i>
              </span>
            </li>
            <li class="icon nodejs">
              <span class="tooltip">Node JS</span>
              <span>
                <i class="fab fa-nodejs">N</i>
              </span>
            </li>
            <li class="icon redux">
              <span class="tooltip">Redux Toolkit</span>
              <span>
                <i class="fab fa-redux">R</i>
              </span>
            </li>
            <li class="icon typescript">
              <span class="tooltip">TypeScript</span>
              <span>
                <i class="fab fa-typescript">T</i>
              </span>
            </li>
            <li class="icon gitHub">
              <span class="tooltip">Git Hub</span>
              <span>
                <i class="fab fa-gitHub">G</i>
              </span>
            </li>
            <li class="icon postman">
              <span class="tooltip">Postman</span>
              <span>
                <i class="fab fa-postman">P</i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

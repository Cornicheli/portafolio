import React from "react";
import "./contact.css";

export default function contact() {
  return (
    <div className="ctn-contact" id="contact">
      <div className="ctn-title-contact">
        <h1 className="title-contact">My Social Networks</h1>
      </div>
      <div className="ctn-btn-contact">
        <div className="ctn-contact-redes">
          <div className="ctn-img-contact">
            <img
              className="img-contact"
              src="https://cdn.discordapp.com/attachments/1063530094053818398/1068373728297222184/rework.png"
              alt="figure contact"
            />
          </div>
          <button class="cta">
            <span class="hover-underline-animation">
              <a
                className="ancor-aboutme"
                href="https://www.linkedin.com/in/gabriel-cornide-99624923b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ←
              </a>
            </span>
          </button>
          <button class="cta">
            <span class="hover-underline-animation">
              <a
                target="_blank"
                rel="noreferrer"
                className="ancor-aboutme"
                href="https://github.com/Cornicheli"
              >
                Git Hub ←
              </a>
            </span>
          </button>
          <button class="cta">
            <span class="hover-underline-animation">
              <a
                className="ancor-aboutme"
                href="https://github.com/Cornicheli"
                target="_blank"
                rel="noreferrer"
              >
                Discord ←
              </a>
            </span>
          </button>
          {/* <button class="cta">
            <span class="hover-underline-animation">
              <a
                className="ancor-aboutme"
                href="https://www.facebook.com/gaabriicornideee/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook ←
              </a>
            </span>
          </button>
          <button class="cta">
            <span class="hover-underline-animation">
              <a
                className="ancor-aboutme"
                href="https://twitter.com/_Agusgabriel"
                target="_blank"
                rel="noreferrer"
              >
                Twitter ←
              </a>
            </span>
          </button> */}
          {/* <button class="download-button">
            <div class="docs">
              <svg
                class="css-i6dzq1"
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                height="20"
                width="20"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line y2="13" x2="8" y1="13" x1="16"></line>
                <line y2="17" x2="8" y1="17" x1="16"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>{" "}
              CV
            </div>
            <div class="download">
              <svg
                class="css-i6dzq1"
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line y2="3" x2="12" y1="15" x1="12"></line>
              </svg>
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
}

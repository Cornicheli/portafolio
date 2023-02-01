import React from "react";
import "./card.css";

export default function Card() {
  return (
    <>
      <div className="container">
        <div className="ctn-card">
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://cdn.discordapp.com/attachments/1063530094053818398/1068586251126571059/image.png"
                alt="proyect"
              />
            </div>
            <div class="details">
              <div class="center">
                <a
                  className="ancor-youtube"
                  href="https://youtu.be/uJ-Su6GDFis"
                  target="_blank"
                  rel="noreferrer"
                >
                  → GAME CENTER
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://cdn.discordapp.com/attachments/1063530094053818398/1068589271277117582/image.png"
                alt="proyect"
              />
            </div>
            <div class="details">
              <div class="center">
                <a
                  className="ancor-youtube"
                  target="_blank"
                  rel="noreferrer"
                  href="https://youtu.be/RnZTvk1Lq9g"
                >
                  → MY TINERARY
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card-native"
                src="https://cdn.discordapp.com/attachments/1063530094053818398/1070126258853261312/image.png"
                alt="proyect"
              />
            </div>
            <div class="details">
              <div class="center">
                <a
                  className="ancor-youtube"
                  target="_blank"
                  rel="noreferrer"
                  href="https://youtu.be/nnEdLvlspW0"
                >
                  → GAME CENTER NATIVE
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card-native"
                src="https://cdn.discordapp.com/attachments/1063530094053818398/1070125561772527688/image.png"
                alt="proyect"
              />
            </div>
            <div class="details">
              <div class="center">
                <a
                  className="ancor-youtube"
                  target="_blank"
                  rel="noreferrer"
                  href="https://youtu.be/y43jhsvLLv4"
                >
                  → MY TINERARY NATIVE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

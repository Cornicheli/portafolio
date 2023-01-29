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
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>Game Center</h1>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://cdn.discordapp.com/attachments/1063530094053818398/1068589271277117582/image.png"
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>My Tinerary</h1>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gabriel-cornide-99624923b/"
                >
                  view video
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://cdn.discordapp.com/attachments/1063530094053818398/1068591212463931392/image.png"
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>Pet Shop</h1>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg"
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>
                  Someone famous
                  <br />
                  <span>team leader</span>
                </h1>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg"
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>My Tinerary</h1>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg"
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>PetShop Mindy</h1>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg"
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>PetShop Mindy</h1>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg"
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>PetShop Mindy</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

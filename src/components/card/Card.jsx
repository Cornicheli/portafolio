import React from "react";
import "./card.css";
import ReactPlayer from "react-player";
import GameCenter from "./img/GameCenter.mp4";

export default function Card() {
  return (
    <>
      <div className="container">
        <ReactPlayer
          url={GameCenter}
          loop
          controls
          width="100%"
          height="100%"
        />
        <div className="ctn-card">
          <div class="card">
            <div class="image"></div>
            <div class="details">
              <div class="center">
                <h1>
                  Someone famous
                  <br />
                  <span>team leader</span>
                </h1>
                <p>
                  Lorem ipsum is simple dummy text on the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>
                  Someone famous
                  <br />
                  <span>team leader</span>
                </h1>
                <p>
                  Lorem ipsum is simple dummy text on the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img
                className="img-card"
                src="https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287142.jpg&fm=jpg"
              />
            </div>
            <div class="details">
              <div class="center">
                <h1>
                  Someone famous
                  <br />
                  <span>team leader</span>
                </h1>
                <p>
                  Lorem ipsum is simple dummy text on the printing and
                  typesetting industry.
                </p>
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
                <p>
                  Lorem ipsum is simple dummy text on the printing and
                  typesetting industry.
                </p>
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
                <p>
                  Lorem ipsum is simple dummy text on the printing and
                  typesetting industry.
                </p>
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
                <p>
                  Lorem ipsum is simple dummy text on the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <div className="card">
// <div className="face face1">
//   <div className="content">
//     <img
//       src="https://imgv3.fotor.com/images/homepage-feature-card/one-tap-photo-enhancer.jpg"
//       alt=""
//     />
//     <h3>desing</h3>
//   </div>
// </div>

// <div className="face face2">
//   <div className="content">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Consequatur quasi officia, natus blanditiis eaque in.
//     </p>
//     <a href="#">holi</a>
//   </div>
// </div>
// </div>

// <div className="card">
// <div className="content">
//   <img
//     src="https://imgv3.fotor.com/images/homepage-feature-card/one-tap-photo-enhancer.jpg"
//     alt=""
//   />
//   <a href="#">Read More</a>
// </div>
// </div>
// </div>
// <div className="card">
// <div className="face face1">
// <div content>
//   <img
//     src="https://imgv3.fotor.com/images/homepage-feature-card/one-tap-photo-enhancer.jpg"
//     alt=""
//   />
//   <h3>Code</h3>
// </div>
// </div>
// <div className="face face2">
// <div className="content">
//   <p>
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
//     sint veniam tempore, tenetur quis fuga.
//   </p>
//   <a href="-"></a>
// </div>
// </div>

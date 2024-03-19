import React from "react";

import images_01 from "../../images/banner_01.jpg";
import images_02 from "../../images/banner_02.jpg";
import images_03 from "../../images/banner_03.jpg";
import images_04 from "../../images/banner_04.jpg";
import images_05 from "../../images/banner_05.jpg";
import images_06 from "../../images/banner_06.jpg";
import images_07 from "../../images/banner_07.jpg";
import images_08 from "../../images/banner_08.jpg";
import images_09 from "../../images/banner_09.jpg";
import images_10 from "../../images/banner_10.jpg";
import images_11 from "../../images/banner_11.jpg";
import images_12 from "../../images/banner_12.jpg";
import images_13 from "../../images/banner_13.jpg";
import images_14 from "../../images/banner_14.jpg";

const Images = [
  images_02,
  images_03,
  images_04,
  images_05,
  images_06,
  images_07,
  images_08,
  images_09,
  images_10,
  images_11,
  images_12,
  images_13,
  images_14,
];

export default function BannerComponent() {
  return (
    <div >
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1500">
            <img src={images_01} style={{height:'15rem'}} className="d-block w-100" alt="..." />
          </div>
          {Images.map((item,index) => (
            <div key={index} className="carousel-item" data-bs-interval="1500">
              <img src={item} style={{height:'15rem'}} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

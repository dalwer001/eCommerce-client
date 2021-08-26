import React from 'react';
import fashion1 from '../../../../../Images/p1.jpg';
import fashion2 from '../../../../../Images/images2.jpg';
import fashion3 from '../../../../../Images/photo2.jpg';
import './Slider.css';
import BannerText from '../../BannerText/BannerText';
import video1 from "../../../../../Images/pexels-ron-lach-7353185.mp4";
const Slider = () => {
    return (
      <>
      <div className="video-section">
        <video src={video1} muted loop autoPlay></video>
        <div className="video-overly "></div>
        <div className="text container mt-5 animate__animated animate__fadeInLeft">
          <BannerText></BannerText>
        </div>
      </div>
    </>
    );
};

export default Slider;
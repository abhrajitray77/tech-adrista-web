import React from "react";
import girl from "../assets/img/elena-joy.png";
import plant1 from "../assets/img/plant1.png";
import plant2 from "../assets/img/plant2.png";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home-sec">
      
      <section class="about">
        <h1 class="about-head">Elena Joy Photography</h1>
        <p class="about-para">
          We have an excellent team to florish your Weddings, Parties,
          Birthdays, etc. by our excellent quality Photos. Click below to check
          our Gallery
        </p>
        <button class="gallery">Gallery</button>
      </section>
      <section class="girl-img">
      <div class='gray-bg'></div>
        <img class="girl" src={girl} />
        <img class="plant1" src={plant1} />
        <img class="plant2" src={plant2} />
      </section>
    </div>
  );
};

export default Home;

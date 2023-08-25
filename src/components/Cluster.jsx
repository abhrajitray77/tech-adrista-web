import img1 from "../assets/img/gallery-1.jpg";
import img2 from "../assets/img/gallery-2.jpg";
import img3 from "../assets/img/gallery-3.jpg";
import img4 from "../assets/img/gallery-4.jpg";
import "../styles/Cluster.css";
import React from "react";

const Cluster = () => {
  return (
    <div class="cluster">
      <div class="innercluster">
        <h1>Quality Photography</h1>
        <p>The new light to your wisdom</p>
      </div>
      <div class="images-bg">
        <div class="left">
          <img class="img1" src={img1} />
          <div class="pair">
            <img class="img4" src={img4} />
            <img class="img3" src={img3} />
          </div>
        </div>
        <div class="right">
          <img src={img2} />
        </div>
      </div>
    </div>
  );
};

export default Cluster;

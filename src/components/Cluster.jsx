import img1 from "../assets/img/gallery-1.jpg"
import img2 from "../assets/img/gallery-2.jpg"
import img3 from "../assets/img/gallery-3.jpg"
import img4 from "../assets/img/gallery-4.jpg"

import React from 'react'

const Cluster = () => {
  return (
    <div>
        <div class="leftbox">
        <img src={img1}/>
        <div class='innercluster'><h1>Quality Photography</h1>
        <p>The new light to your wisdom</p>
        </div>
        <img src={img2}/>
        <img src={img3}/>
        </div>
        <div class="rightbox"><img src={img4}/>
        </div>
    </div>
  )
}

export default Cluster
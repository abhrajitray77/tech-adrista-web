import img1 from "../assets/img/gallery-1.jpg"
import img2 from "../assets/img/gallery-2.jpg"
import img3 from "../assets/img/gallery-3.jpg"
import img4 from "../assets/img/gallery-4.jpg"

import React from 'react'

const Cluster = () => {
  return (
    <div>
        <div class="im1"><img src={img1}/></div>
        <div class="im2"><img src={img2}/></div>
        <div class="im3"><img src={img3}/></div>
        <div class="im4"><img src={img4}/></div>
    </div>
  )
}

export default Cluster
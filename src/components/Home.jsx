import React from 'react'
import girl from "../assets/img/elena-joy.png"
import plant1 from "./assets/img/plant1.png"
import plant2 from "./assets/img/plant2.png"
const Home = () => {
  return (
    <div>
        <div class='lefty'>
            <h1>Elena Joy Photography</h1>
            <p>We have an excellent team to florish your Weddings,
            Parties, Birthdays, etc. by our excellent quality Photos.
            Click below to check our Gallery</p>
            <br></br>

            <button>Gallery</button>
        </div>
        <div class='righty'>
            <div><img src={girl}/></div>
            <div><img src={plant1}/></div>
            <div><img src={plant2}/></div>
            
        </div>
    </div>
    
  )
}

export default Home
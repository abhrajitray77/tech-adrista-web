import React from 'react'
import girl from "../assets/img/elena-joy.png"
import plant1 from "../assets/img/plant1.png"
import plant2 from "../assets/img/plant2.png"
import '../styles/Home.css'
const Home = () => {
  return (
    <div>
        <section class='about'>
            <h1 class='about-head'>Elena Joy Photography</h1>
            <p class='about-para'>We have an excellent team to florish your Weddings,
            Parties, Birthdays, etc. by our excellent quality Photos.
            Click below to check our Gallery</p>
            <button class='gallery'>Gallery</button>
        </section>
        <div class='girl-img'>
            <div><img src={girl}/></div>
            <div><img src={plant1}/></div>
            <div><img src={plant2}/></div>
        </div>
    </div>
    
  )
}

export default Home
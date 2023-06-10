import React, { Component } from 'react';
import Navbar from "./Navbar"
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container flex flex-row" >
        <div class="text">
          <h1 className="text-7xl font-extrabold m-20">Quality fashion <br /> you can trust</h1>
          <p className="text-8md font-light mx-20">Our products are made of fiber and fabric of the highest caliber</p>
        </div>
        <div className='images flex flex-row'>
          <img  src={"https://img.freepik.com/free-photo/close-up-portrait-teenager-isolated_23-2149158184.jpg?size=626&ext=jpg"} alt="" />
          <img src={"https://img.freepik.com/free-photo/woman-with-curly-hair-poses-bridge-wears-blue-sweatshirt-trousers-listens-motivational-music-via-wireless-headphones-focused-into-distance-people-leisure-hobby-concept_273609-55980.jpg?size=626&ext=jpg"} alt="" />
           </div>
        </div>
      </div>
    
  )
}
export default Home;
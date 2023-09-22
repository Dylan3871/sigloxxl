import React from 'react'
import '../assets/css/Card.css';

function Card() {
  return (

    <body>

    <div>

    <div id='slider'>
      <input type="radio" name="slider" id='s1' checked/>
      <input type="radio" name="slider" id='s2'/>
      <input type="radio" name="slider" id='s3'/>
      <input type="radio" name="slider" id='s4'/>
      <input type="radio" name="slider" id='s5'/>

      <label for="s1" id="slider1">
        <img src='parejas.jpg' alt=''/>
      </label>
      <label for="s2" id="slider2">
        <img src='parejas2.jpg' alt=''/>
      </label>
      <label for="s3" id="slider3">
        <img src='parejas3.jpg' alt=''/>
      </label>
      <label for="s4" id="slider4">
        <img src='parejas4.jpg' alt=''/>
      </label>
      <label for="s5" id="slider5">
        <img src='parejas5.jpg' alt=''/>
      </label>
    </div>

    </div>
    </body>

    
  )
}

export default Card

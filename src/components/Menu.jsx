import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from "./Navbar";

export const Menu = () => {
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
  }
  return (
    
        <strong className="h3">
          <a onClick={handleClick} href="./Inicio">Redirige a pantalla princial</a>
        </strong>
  )
}
export default Menu;
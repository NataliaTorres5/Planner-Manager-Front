import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/HeroComponent.css"

function HeroComponent() {
  
  return (
    <>
    <div className="hero-box">
        <img  className="heroFlower" src="/flower1.png" alt="" />
        <div>
        <h4 className="cta">
            Create your own projects
        </h4>

        <Link className='linkHero' to="/proyects">Check it out!</Link>
        </div>

    </div>
    </>
  )
}

export default HeroComponent
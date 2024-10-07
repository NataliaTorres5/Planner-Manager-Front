import  { useState } from "react";
import {Link } from "react-router-dom";
import userActions from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Header.css"


function Header() {

  const[activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  
  
  const token =  useSelector(store => store.user.token);
 const dispatch = useDispatch();

 const handleClick = () => {
  dispatch(userActions.logout())
  localStorage.removeItem("token")
 } 


  return (
    <>
        <header className="header ">
          <div className="nav-icon" >
            <img src="/icon.png" alt="" />

            <h1 className="navh1"> Planner </h1>
          </div>
            <nav className="navElements nav nav-tabs">           
                <Link  className={`nav-link ${activeLink=== 'home'?'active':'' }`}  onClick={()=>handleLinkClick('home')}  id="home-tab" data-toggle="tab" to="/">Home</Link>
                <Link className={`nav-link ${activeLink=== 'proyect'?'active':'' }`}  onClick={()=>handleLinkClick('proyect')} id="home-tab" data-toggle="tab"  to="/proyects">Proyect</Link>
               
                {
                  !token ? (
                    <>
                    <Link  className={`nav-link ${activeLink=== 'log in'?'active':'' }`}  onClick={()=>handleLinkClick('log in')}  id="home-tab" data-toggle="tab" to="/login">Log In</Link>
                    <Link   className={`nav-link ${activeLink=== 'register'?'active':'' }`}  onClick={()=>handleLinkClick('register')}  id="home-tab" data-toggle="tab" to="/register">Register</Link>
                    </>
                  ): (
                    <>
                    <Link  className={`nav-link ${activeLink=== 'profile'?'active':'' }`}  onClick={()=>handleLinkClick('profile')} id="home-tab" data-toggle="tab"  to="/private/profile">Profile</Link>
                    <button className="navButton" onClick={handleClick} >logout</button>
                    </>

                  )
               
                }
                
            </nav>
        </header>
    </>
  )
}

export default Header
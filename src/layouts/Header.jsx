import {Link } from "react-router-dom";
import userActions from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";


function Header() {
  
  
  const token =  useSelector(store => store.user.token);
 const dispatch = useDispatch();

 const handleClick = () => {
  dispatch(userActions.logout())
  localStorage.removeItem("token")
 } 


  return (
    <div>
        <header>
            <h1> planner </h1>
            <nav>           
                <Link   to="/">Home</Link>
                <Link   to="/proyects">Proyect</Link>
               
                {
                  !token ? (
                    <>
                    <Link   to="/login">Log In</Link>
                    <Link   to="/register">Register</Link>
                    </>
                  ): (
                    <>
                    <Link   to="/private/profile">Profile</Link>
                    <button onClick={handleClick} >logout</button>
                    </>

                  )
               
                }
                
            </nav>
        </header>
    </div>
  )
}

export default Header
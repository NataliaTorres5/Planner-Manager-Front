import {Link } from "react-router-dom";


function Header() {
  return (
    <div>
        <header>
            <h1> planner </h1>
            <nav>           
                <Link   to="/">Home</Link>
                <Link   to="/proyects">Proyect</Link>
                <Link   to="/login">Log In</Link>
                <Link   to="/register">Register</Link>
            </nav>
        </header>
    </div>
  )
}

export default Header
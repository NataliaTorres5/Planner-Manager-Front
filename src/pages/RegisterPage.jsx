import authQueries from "../services/autheQueries";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogInPage.css"

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const aux = new FormData(event.target);
    const data = Object.fromEntries(aux.entries());
    authQueries.registroUsuario(data).then((response) => {
        console.log(response)
      if (response.token) {
        navigate("/login");
      } else {
         console.log(response.message);
      }
    
    })};

    return (
      <>

      <img className="highlighter high2" src="/highlighter3.png" alt="" />
      <section className="shadow p-3 mb-5 bg-white rounded   form-user register-form" >
        
        <form onSubmit={handleSubmit}>

          <div className="log-user">
          <span className="labelForm"> -First Name</span>
            <input className="form-user-box"
              type="text"
              name="firstName"
              placeholder="Your first name..."
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          
          <div className="log-user">
          <span className="labelForm"> - Last Name</span>
            <input className="form-user-box"
              type="text"
              name="lastName"
              placeholder="Your last name..."
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="log-user">
          <span className="labelForm"> - Email</span>
            <input className="form-user-box"
              type="email"
              name="email"
              placeholder="Your email..."
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="log-user">
          <span className="labelForm"> - Email</span>
            <input className="form-user-box"
              type="password"
              name="password"
              placeholder="Your password..."
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="linkHero" type="submit">Register</button>
        </form>
      </section>
      </>
    );
  };

export default RegisterPage;

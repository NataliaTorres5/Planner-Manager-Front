import authQueries from "../services/autheQueries";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userActions from "../store/actions/userActions";
import "../styles/LogInPage.css"

function LogInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(formData);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const aux = new FormData(event.target);
    const data = Object.fromEntries(aux.entries());
    authQueries.signInUser(data).then((response) => {
      console.log(response);
      if (response.token) {
        dispatch(userActions.login(response));
        navigate("/proyects");
      } else {
        console.log(response.message);
      }
    });
  };
  return (
    <>
    <img className="highlighter high1" src="/highlighter2.png" alt="" />
    <section className="shadow p-3 mb-5 bg-white rounded form-user log-In">
      <form onSubmit={handleSubmit} >
        <div className="log-user">
            <span className="labelForm"> - Email</span>
          <input className="form-user-box"
            type="email"
            name="email"
            placeholder="Your email address.."
            value={formData.email}
            onChange={handleChange}
          />      
        </div>

        <div className="log-user">
        <span className="labelForm"> - Password</span>
          <input className="form-user-box"
            type="password"
            name="password"
            placeholder="Your password.."
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="form-button" type="submit">Log In</button>
      </form>
    </section>
    </>
  );
}

export default LogInPage;

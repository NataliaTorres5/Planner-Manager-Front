import authQueries from "../services/autheQueries";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LogInPage() {
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
      console.log(response)
      if (response.token) {
        navigate("/proyects");
      } else {
        console.log(response.message);
      }
    });
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </section>
  );
}

export default LogInPage;

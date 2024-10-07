import ProyectsComponents from "../components/ProyectsComponents.jsx";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner/spinner.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/ProyectsOage.css";

import proyectQuery from "../services/proyectQuery.js";
function Proyects() {
  const params = useParams();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.userData);

  let token = localStorage.getItem("token");

  const [proyects, setProyects] = useState([]);
  const [loading, setLoading] = useState(true);
  /*console.log(proyects);*/

  useEffect(() => {
    if (user && token) {
      const userID = user.id;
      console.log(userID);
      proyectQuery.getByUserId(token, userID).then((proyects) => {
        console.log(proyects);
        setProyects(proyects);
        setLoading(false);
      });
    } else {
      navigate("/proyectsDisplay");
    }
  }, [user, token, navigate]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className=" shadow p-3 mb-5 bg-white rounded ProyectsMain">
      <div className="proyectTitle">
      <h2>Projects</h2>

      <section className="filter" id="filter">
        <input  className="barSearch" id="searchBar" type="text" placeholder="Search by text" />
      </section>

      </div>
      <div className="proyectscards">
       
        {user ? (
          proyects.length > 0 ? (
            proyects.map((proyects) => (
              <ProyectsComponents key={proyects._id} {...proyects} />
            ))
          ) : (
            <p>There are no proyects yet</p>
          )
        ) : (
          <p>Crea tu proyecto</p>
        )}
      </div>
    </div>
  );
}

export default Proyects;

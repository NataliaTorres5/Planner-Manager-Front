import ProyectsComponents from "../components/ProyectsComponents.jsx";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner/spinner.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";

import proyectQuery from "../services/proyectQuery.js";
function Proyects() {
  const params = useParams( )
  const navigate = useNavigate()

  const user = useSelector((store) => store.user.userData);
  
 
 let token = localStorage.getItem("token");
  
    const [proyects, setProyects] = useState([]);
    const [loading, setLoading] = useState(true)
    /*console.log(proyects);*/

    useEffect( () => {

      if ( user && token){
        const userID = user.id;
        console.log(userID)
        proyectQuery.getByUserId(token, userID).then(
          (proyects) => {
            console.log(proyects)
            setProyects(proyects);
            setLoading(false)
          }
        )

      } else {
        navigate("/fproyects")
      }

    }, [user, token, navigate])

    if(loading) {
    return (<Spinner/>)
    } 

    return (
      <main className="ProyectsMain">
        <h2>Proyects</h2>
        { user ? (proyects.length > 0 ? (
         
         proyects.map((proyects) => (<ProyectsComponents key={proyects._id} {...proyects} />
         ))
       ) : (
         <p>There are no proyects yet</p>
       ) ) : (

        <p>Crea tu proyecto</p>
       ) }
      </main>
    );
  
}

export default Proyects;

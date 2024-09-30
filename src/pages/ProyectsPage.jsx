import ProyectsComponents from "../components/ProyectsComponents.jsx";
import { useEffect, useState } from "react";

import proyectQuery from "../services/proyectQuery.js";
function Proyects() {
  
    const [proyects, setProyects] = useState([]);
    console.log(proyects);

    useEffect(() => {
        proyectQuery.getAll().then(setProyects);
      
    }, []);

    return (
      <main className="ProyectsMain">
        <h2>Proyects</h2>
        {proyects.length > 0 ? (
          proyects.map((proyects) => (<ProyectsComponents key={proyects._id} {...proyects} />
          ))
        ) : (
          <p>There are no proyects yet</p>
        )}
      </main>
    );
  
}

export default Proyects;

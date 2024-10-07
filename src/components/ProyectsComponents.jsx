import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import proyectQuery from "../services/proyectQuery";
import { useSelector } from "react-redux";
import "../styles/ProyectsOage.css"

function ProyectsComponents({
  _id,
  name,
  description,
  status,
  date,
  priority,
}) {
  const user = useSelector((store) => store.user.userData);
  const userID = user.id;
  const token = localStorage.getItem("token");
  const [openTab, setOpenTab] = useState(false);
  const proyectStatus =(status) => {
    if(status  === "in_progress")return "In progress"
    if(status  === "pending")return "Pending"
    if(status  === "completed")return "Completed"
  }

  const proyecPriority = (priority) => {
    if(priority === 'normal') return "Normal"
    if(priority === 'important') return "Important"
     if(priority === 'low') return "Low"
    

  }

  const handleDelete = () => {
    proyectQuery.deleteOneProyect(token, _id).then((res) => {
      console.log("se borro el proyecto", res);
    });
  };
  const handleClick = () => setOpenTab(!openTab);

  const handleUpdate = (event) => {
    event.preventDefault();
    const updateData = {
      name: event.target[0].value,
      description: event.target[1].value,
      status: event.target[2].value,
      priority: event.target[3].value,
      user: userID,
    };
    proyectQuery.updateOneProyect(token, _id, updateData).then((res) => {
      console.log("se actualizo el proyecto", res);
    });
  };

  return (
    <section>
      <div className=" card ProyectsComponents">
        <h3 className="proyectTitleh3">{name}</h3>
        <div>
          <p>{description}</p>
          <p>{proyectStatus(status)}</p>
          <p>{proyecPriority ( priority)} </p>
        </div>

        <Link to={`/proyects/${_id}`}>Ver más</Link>

        <div>
          <button onClick={handleDelete}>Delete Proyect</button>
        </div>

        <div>
          <button onClick={handleClick}>Edit Proyect</button>
          {openTab && (
            <div className="modal-dialog modal-dialog-scrollable">
              <form onSubmit={handleUpdate} className="form-label">
                <input type="text" placeholder="name" defaultValue={name} />
                <input
                  type="text"
                  placeholder="description"
                  defaultValue={description}
                />

                <select
                  name="status"
                  id=""
                  defaultValue={status}
                  placeholder="status"
                >
                  <option value="pending"> Pending </option>
                  <option value="in_progress"> In Progress</option>
                  <option value="completed"> Completed </option>
                </select>
                <select
                  name="priority"
                  id=""
                  defaultValue={priority}
                  placeholder="Priority"
                >
                  <option value="normal"> Normal</option>
                  <option value="important">Important </option>
                  <option value="low"> Low </option>
                </select>

                <div>
                  <button>Edit</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProyectsComponents;

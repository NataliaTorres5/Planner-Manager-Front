import {useState} from "react";
import taskQuery from "../services/taskQuery";
import { useParams } from "react-router-dom";
import {useSelector}from "react-redux"

function TasksComponent({  date, title, text, status, priority, _id }){

  const params= useParams()
  const user = useSelector((store) => store.user.userData)
  const userID = user.id

  let token= localStorage.getItem("token") 

  const [openTab, setOpenTab]= useState(false);

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

  const handleClick = () => setOpenTab(!openTab);

  const handleDelete = () =>{
 
    taskQuery.deleteOneTask(token, _id).then((res)=>{
      console.log(_id)
      console.log(res, "task was deleted")
    })
  }

  
  const handleUpdate = (event) => {
    event.preventDefault();
    const updateData ={
 
      title:  event.target[0].value,
      text: event.target[1].value,
      status: event.target[2].value,
      priority: event.target[3].value,
      user: userID,
      proyects: params.id,
    }
    console.log(updateData)
    taskQuery.updateOneTask(token, _id,updateData).then((res) => {
      console.log(res, "task was updated")
    })


  }


  return (
    
    
    <>
      <div className="taskCardContainer">
        <div className="taskCard">
          <h3>{title}</h3>
          <div>
            <p>{text}</p>
            <p>{date}</p>
          </div>
          <div>
            <p>{status}</p>
            <p>{priority}</p>
          </div>
        </div>
        <div className="buttonCancel"></div>
      </div>

      <div>
        <button onClick={handleDelete} > Delete</button>
        <div>
          <button onClick={handleClick}>Edit Proyect</button>
          {openTab && (
            <div className="">
              <form onSubmit={handleUpdate} className="form-label">
                <input type="text" placeholder="title" defaultValue={title} />
                <input
                  type="text"
                  placeholder="text"
                  defaultValue={text}
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
    </>
  );

}
export default TasksComponent;

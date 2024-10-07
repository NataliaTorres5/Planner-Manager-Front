import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import taskQuery from "../services/taskQuery";
import TasksComponent from "../components/TasksComponent";
import { useSelector } from "react-redux";

function OneProyectPage() {
  const params = useParams();
  /*console.log(params);*/
  //trae el toquen e info de usario
  const user = useSelector((store) => store.user.userData);
  const userID = user.id;
  /*console.log(userID);*/
  let token = localStorage.getItem("token");
  //asigna el id de usuario a una variable para ser usada

  const [tasks, setTasks] = useState([]);
  //designa tab

  const [openTab, setOpenTab] = useState(false);
  const handleClick = () => setOpenTab(!openTab); //si opentab es falso, cerrado, si open tab es verdadero abierto

  const [newTask, setNewTask] = useState({
    title: "",
    text: "",
    status: "",
    priority: "",
    user: userID,
    proyects: params.id,
  });

  const handleCreate = (event) => {
    const {name, value} = event.target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    /*console.log(newTask)*/
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data ={
 
      title:  event.target[0].value,
      text: event.target[1].value,
      status: event.target[2].value,
      priority: event.target[3].value,
      user: userID,
      proyects: params.id,
    }
    console.log(data)

    taskQuery.createOneTask(token, data). then((res) => {
      if(data){
        console.log(res, "task was created")
      }else{
        console.log("task was not created")
      }
    })
  }

  useEffect(() => {
    taskQuery.getByUserId(params.id).then(setTasks);
  }, [params.id]);

  /*console.log(tasks);*/

  return (
    <main>
      <h2>Task</h2>
      <div className="card">
        {tasks.length > 0 ? (
          tasks.map((tasks) => <TasksComponent key={tasks.id} {...tasks} />)
        ) : (
          <p>There are no tasks yet</p>
        )}
      </div>
      <button onClick={handleClick}> Create Task</button>
      {openTab && (
        <div className="taskCreateForm">
          <form className="taskForm"  onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" 
            onChange={handleCreate}/>
            <input type="text" placeholder="Text" onChange={handleCreate}/>
            <select name="status" placeholder="status"onChange={handleCreate}>
              <option value="pending"> Pending </option>
              <option value="in_progress"> In Progress</option>
              <option value="completed"> Completed </option>
            </select>

            <select name="priority" placeholder="Priority"onChange={handleCreate}>
              <option value="normal"> Normal</option>
              <option value="important">Important </option>
              <option value="low"> Low </option>
            </select>
            <button> Create </button>
            <button type="reset"> Cancel </button>
          </form>
        </div>
      )}
    </main>
  );
}

export default OneProyectPage;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import taskQuery from "../services/taskQuery";
import TasksComponent from "../components/TasksComponent";

function OneProyectPage() {
  const params = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskQuery.getByUserId(params.id).then(setTasks);
  }, [params.id]);

  console.log(tasks);

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
    </main>
  );
}

export default OneProyectPage;

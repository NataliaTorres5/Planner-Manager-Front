import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import proyectQuery from "../services/proyectQuery";
import autheQueries from "../services/autheQueries";
import userAction from "../store/actions/userActions";

function ProfilePage() {
  const user = useSelector((store) => store.user.userData);
  let token = localStorage.getItem("token");

  const userID = user.id;
  console.log(userID);


  const [userImage, setUserImage] = useState(" ");
  const imgDefault =
    " https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";

  const [openTab, setOpenTab] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  

  const [newProyect, setNewProyect] = useState({
    name: "",
    description: "",
    user: userID,
    status: "",
    priority: "",
  });
  
  /*const handleChange = (event) => {
    /*setNewProyect({ ...newProyect, [event.target.name]: event.target.value });
    console.log( setNewProyect)
  };*/

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProyect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(newProyect)
  };

  const handleClick = () => setOpenTab(!openTab);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target[0].value,
      description:  event.target[1].value,
      user: userID,
      status: event.target[2].value,
      priority: event.target[3].value,
    }
    console.log(data)

    
    /*
    const aux = new FormData(event.target);
    const data = Object.fromEntries(aux.entries());*/

    proyectQuery.createOneProyect(token,  data).then((res) => {
      if(data){
        console.log(res, "is created")
      }else (
        console.log("nothibg here")
      )

    })
   
  

  }
     

  return (
    <main className="profile">
      <section>
        <img src={imgDefault} alt="" />
        <h3 className="user"> {user.firstName} </h3>
      </section>

      <section>
        <h4>update user</h4>
      </section>

      <section>
        <div>
          <h4>Create new Proyect</h4>

          <button onClick={handleClick}>Create proyect</button>
          {openTab && (
            <div>
              <form className="proyectCreate" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={newProyect.newName}
                  onChange={handleChange}
                  
                />
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                 
                />
                <select
                  name="status"
                  id=""
                  value={newProyect.status}
                  onChange={handleChange}
                  
                  placeholder="status"
                >
                  <option value="pending"> Pending </option>
                  <option value="in_progress"> In Progress</option>
                  <option value="completed"> Completed </option>
                </select>
                <select
                  name="priority"
                  id=""
                  value={newProyect.priority}
                  onChange={handleChange}
                  
                  placeholder="status"
                >
                  <option value="normal"> Normal</option>
                  <option value="important">Important </option>
                  <option value="low"> Low </option>
                </select>
                <div className="button">
                  <button> Create </button>
                  <button type="reset"> Cancel </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <button>Go to your proyects</button>
      </section>
    </main>
  );
}

export default ProfilePage;

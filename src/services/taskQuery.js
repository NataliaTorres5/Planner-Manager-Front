import axios from "axios";

const taskQuery = {
  async getAllTasks() {
    try {
      const response = await axios("http://localhost:5000/api/tasks");

      /*console.log(response*/
      return response.data.response;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async getOneById (id) {
    try {
        const response = await axios(`http://localhost:5000/api/tasks/${id}`);
        return response.data.response
    } catch (error) {
        console.log(error)
    }
  },

  async getByUserId (id) {
    try {
        const response = await axios(`http://localhost:5000/api/tasks/one/${id}`);
        return response.data.response
    } catch (error) {
        console.log(error)
    }
  },

  async createOneTask (token, data){
    console.log(data, "query brings data for create one proyect")
    try {
      const response = await axios.post("http://localhost:5000/api/tasks", data, {
         
        headers:{
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json"
      },
      })
      console.log(response)
      return response.data.response
    } catch (error) {
      console.log(error)
            return ("No se creo Task", [])
      
    }
  },
   async deleteOneTask (token, id) {
   try{
    const response = await axios.delete(`http://localhost:5000/api/tasks/${id}`, {},{
      headers:{
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      }
    }
  )
  return response.data.response
    }catch(error) {
      console.error("task is not being deleted"
      )
      return error

   }
   },

    async updateOneTask(token, id, data) {
      try {
        const response = await axios.put(`http://localhost:5000/api/tasks/${id}`,data,{
          headers:{
            "Authorization": "Bearer "+ token,
            "Content-Type" : "application/json"
          },
        } )
        return response.data.response
      } catch (error) {
        
        console.error("is not updating ")
            return error
      }
    }


};
export default taskQuery;

import axios from "axios";

const proyectQuery =  {

    async getAll(){
        try {
            const response= await axios("http://localhost:5000/api/proyects");
            console.log(response)
            return response.data.response
        } catch (error) {
            console.log(error);
            return []
            
        }
    },

    async getOneById(id){
        try {
            const response = await axios(`http://localhost:5000/api/proyects/${id}`);
            return response.data.response
        } catch (error) {
            console.log(error);
            return 
            
        }
    }, 

    async createOneProyect(token, data){
        console.log(data, "query create one proyect")
        try {
            const response = await axios.post(`http://localhost:5000/api/proyects/`, data, {
               
                headers:{
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
            })
            console.log(response)
            return response.data.response;
        } catch (error) {
            console.log(error)
            return ("error de creacion", [])
            
        }
    },
    async getByUserId (token , id) {
        try {

            const response = await axios(`http://localhost:5000/api/proyects/two/${id}`,{}, {
  
        headers: {
          "Authorization": "Bearer " + token,
        }});
            return response.data.response
        } catch (error) {
            console.log(error)
        }
      },

      async deleteOneProyect (token, id) {
        try {
            const response = await axios.delete(`http://localhost:5000/api/proyects/${id}`, {}, {
                headers:{
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },

            })
            return response.data.response
        } catch (error) {
            console.error("is not deleting ")
            return error
            
        }
      },

      async updateOneProyect( token, id, data){
        try {
            const response = await axios.put(`http://localhost:5000/api/proyects/${id}`, data,  {
                headers:{
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },

            })
            return response.data.response
        } catch (error) {
            console.error("is not updating ")
            return error
            
        }

      }




}
export default proyectQuery
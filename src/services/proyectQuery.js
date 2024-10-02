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
    }



}
export default proyectQuery
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
  }
};
export default taskQuery;

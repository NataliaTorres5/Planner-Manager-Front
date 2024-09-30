import axios from "axios";

const authQueries = {
  async signInUser(data) {
    try {
      const response = await axios("http://localhost:5000/api/user/signin", {
        method: `POST`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data)
      });
      console.log(response);
      return response.data.response;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async registroUsuario(data) {
      try {
      const response = await axios("http://localhost:5000/api/user/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        }, 
        data: JSON.stringify(data)

      });
      console.log(response);
      return response.data.response;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};

export default authQueries;

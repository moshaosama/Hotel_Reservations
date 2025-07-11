import axios from "axios";

class UserService {
  async SignUp(user: any, thunkApi?: any) {
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/signup`,
        user
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async Login(user: any, thunkApi?: any) {
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/login`,
        user
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const userService = new UserService();

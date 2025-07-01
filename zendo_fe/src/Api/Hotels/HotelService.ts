import axios from "axios";
import { ParentService } from "../ParentService";

class HotelService extends ParentService {
  async getData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get(`${this.url}/hotels`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async getCities(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get(`http://localhost:3000/hotels/cities`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const hotelService = new HotelService();

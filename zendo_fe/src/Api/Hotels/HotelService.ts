import axios from "axios";
import { ParentService } from "../ParentService";

class HotelService extends ParentService {
  async getData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get(`http://localhost:3000/hotels`);
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

  async getHotelByCity(hotel_name: string, thunkApi?: any) {
    try {
      const response = await axios.get(
        `http://localhost:3000/hotels/hotelName?hotel_name=${
          hotel_name as string
        }`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async getHotelById(hotel_id: unknown, thunkApi?: any) {
    try {
      const response = await axios.get(
        `http://localhost:3000/hotels/${hotel_id as number}`
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const hotelService = new HotelService();

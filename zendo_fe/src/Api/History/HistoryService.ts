import axios from "axios";
import { ParentService } from "../ParentService";

interface DataBody {
  pathName: string;
  hotel_name: string;
  checkIn: string;
  checkOut: string;
}

class HistoryService extends ParentService {
  async getData(_?: any, thunkApi?: any): Promise<any> {
    try {
      const response = await axios.get("http://localhost:3000/history");
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async CreateHistory(data: DataBody, thunkApi?: any) {
    try {
      const response = await axios.post("http://localhost:3000/history", data);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const historyService = new HistoryService();

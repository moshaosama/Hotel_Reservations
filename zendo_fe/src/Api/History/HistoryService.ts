import axios from "axios";
import { ParentService } from "../ParentService";

class HistoryService extends ParentService {
  async getData(_?: any, thunkApi?: any): Promise<any> {
    try {
      const response = await axios.get("http://localhost:3000/history");
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const historyService = new HistoryService();

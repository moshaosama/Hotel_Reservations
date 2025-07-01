export abstract class ParentService {
  url = "http://localhost:3000";
  abstract getData(_?: any, thunkApi?: any): Promise<any>;
}

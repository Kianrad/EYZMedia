import axios from "axios";
import { ENDPOINT } from "../Config/Config";
import { IMedia } from "../Interfaces/IMedia";

export class DataFetchService {
  private apiClient = axios.create({
    baseURL: ENDPOINT,
    responseType: "json",
    headers: {
      "Content-Type": "application/json"
    }
  });

  /**
   * Get Media From URL
   */
  public async getMediaList(): Promise<IMedia[]> {
    return this.apiClient
      .get("nodejs_test.json")
      .then(response => {
        return response.data as IMedia[];
      })
      .catch(err => {
        return err;
      });
  }
}

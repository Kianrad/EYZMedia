import axios from "axios";
import { ENDPOINT } from "../Config/Config";
import { IMedia } from "../Interfaces/IMedia";
import { IUniqueValues } from "../Interfaces/IUniqueValues";
import { Media } from "../Schemas/Media";

export class MediaService {
  private apiClient = axios.create({
    baseURL: ENDPOINT,
    responseType: "json",
    headers: {
      "Content-Type": "application/json"
    }
  });

  /**
   * deleteAll
   */
  public async deleteAll(): Promise<number> {
    return Media.deleteMany({})
      .exec()
      .then(data => {
        if (data.deletedCount !== undefined) {
          return data.deletedCount;
        } else {
          return 0;
        }
      })
      .catch(() => {
        return 0;
      });
  }
  /**
   * saveAll
   */
  public async save(): Promise<number> {
    await this.deleteAll();
    const media: IMedia[] = await this.getMediaList();
    return this.saveMedia(media);
  }

  /**
   * saveMedia
   */
  public async saveMedia(media: IMedia[]): Promise<number> {
    return Media.create(media)
      .then(data => {
        return data.length;
      })
      .catch(() => {
        return 0;
      });
  }

  /**
   * identifyValues
   */
  public async identifyValues(): Promise<IUniqueValues> {
    const res: IUniqueValues = {
      Status: await Media.find({}).distinct("Status"),
      Archive_Status: await Media.find({}).distinct("Archive_Status"),
      ON_2020_01_01: await Media.find({
        start_date: { $lte: new Date(2020, 1, 1, 0, 0, 0, 0) },
        end_date: { $gte: new Date(2020, 1, 1, 23, 59, 59, 59) }
      }).count(),
      WithStreamID: await Media.find({ stream_id: { $ne: null } })
    };
    return res;
  }

  /**
   * update
   */
  public async update(): Promise<number> {
    return Media.updateMany(
      {
        Status: "New iTunes Pack",
        Archive_Status: "Encoded"
      },
      { Status: "Transferring to UC" },
      { new: false, multi: true }
    )
      .exec()
      .then(data => {
        return data.n;
      })
      .catch(err => {
        return err;
      });
  }

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

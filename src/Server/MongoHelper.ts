import * as mongoose from "mongoose";

export class MongoHelper {
  constructor() {}

  public disconnect(): void {
    mongoose.disconnect();
  }

  public connect(url: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 5000,
        connectTimeoutMS: 5000
      });
      mongoose.connection.once("open", () => {
        resolve("Connected to Mongo via Mongoose");
      });
      mongoose.connection.on("error", err => {
        reject(err);
      });
    });
  }
}

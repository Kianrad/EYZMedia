import { MONGODB_URI } from "../Config/Config";
import { MongoHelper } from "./MongoHelper";
import WebServer from "./WebServer";

export class Start {
  public StartServer() {
    const webServer = new WebServer();
    webServer.start(3003).then(res => {
      console.log(res);
    });
    const mongoHelper = new MongoHelper();
    mongoHelper
      .connect(MONGODB_URI)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Connection Error", err);
      });
  }
}

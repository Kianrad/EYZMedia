import { Server } from "@overnightjs/core";
import * as bodyParser from "body-parser";
import * as controllers from "../Controllers";

class WebServer extends Server {
  private readonly SERVER_STARTED = "EYZMedia server started on port: ";

  constructor() {
    super(true);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.setupControllers();
  }

  public start(port: number): Promise<string> {
    return new Promise<any>((resolve, reject) => {
      this.app.get("*", (req, res) => {
        res.send(this.SERVER_STARTED + port);
      });
      this.app.listen(port, () => {
        resolve(this.SERVER_STARTED + port);
      });
    });
  }

  public getAppInstance() {
    return this.app;
  }
  private setupControllers(): void {
    const ctlrInstances = [];
    for (const name in controllers) {
      if (controllers.hasOwnProperty(name)) {
        const controller = (controllers as any)[name];
        ctlrInstances.push(new controller());
      }
    }
    super.addControllers(ctlrInstances);
  }
}

export default WebServer;

import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { MONGODB_URI } from "../src/Config/Config";
import { MongoHelper } from "../src/Server/MongoHelper";
import { DataFetchService } from "../src/Services/DataFetchService";
import { MediaService } from "../src/Services/MediaService";

chai.use(chaiAsPromised);
const expect = chai.expect;

const mediaService = new MediaService();
const datafetchService = new DataFetchService();

describe("MediaService Test", () => {
  let connection = "";
  before(async () => {
    const mongoHelper = new MongoHelper();
    connection = await mongoHelper.connect(MONGODB_URI);
  });

  it("Check mongodb connection", () => {
    expect(connection).to.equal("Connected to Mongo via Mongoose");
  });

  it("Delete", async () => {
    const p = await mediaService.deleteAll();
    expect(p).to.gte(0);
  });

  it("Get Media List From URL And Save", async () => {
    const p = await datafetchService.getMediaList();
    expect(p).to.length(180);
    const s = await mediaService.saveMedia(p);
    expect(s).to.equal(180);
  });

  it("Update value", async () => {
    const p = await mediaService.update();
    expect(p).to.equal(1);
  });

  it("Identify Value", async () => {
    const p = await mediaService.identifyValues();
    expect(p).to.have.property("Status");
  });
});

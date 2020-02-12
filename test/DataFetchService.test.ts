import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { DataFetchService } from "../src/Services/DataFetchService";

chai.use(chaiAsPromised);
const expect = chai.expect;

const datafetchService = new DataFetchService();

describe("DataFetchService Test", () => {
  it("Get Media List From URL", async () => {
    const p = await datafetchService.getMediaList();
    expect(p).to.length(180);
  });
});

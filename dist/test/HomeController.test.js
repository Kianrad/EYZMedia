"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chaiHttp = require("chai-http");
require("mocha");
var MediaService_1 = require("../src/Services/MediaService");
chai.use(chaiHttp);
var expect = chai.expect;
var assert = chai.assert;
describe("Media Service tests", function () {
    var mediaService = new MediaService_1.MediaService();
    it("Check delete data", function () {
        expect(mediaService.deleteAll()).to.not.throw();
    });
});
//# sourceMappingURL=HomeController.test.js.map
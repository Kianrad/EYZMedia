"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config/Config");
var MongoHelper_1 = require("./MongoHelper");
var WebServer_1 = require("./WebServer");
var Start = /** @class */ (function () {
    function Start() {
    }
    Start.prototype.StartServer = function () {
        var webServer = new WebServer_1.default();
        webServer.start(3003).then(function (res) {
            console.log(res);
        });
        var mongoHelper = new MongoHelper_1.MongoHelper();
        mongoHelper
            .connect(Config_1.MONGODB_URI)
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) {
            console.log("Connection Error", err);
        });
    };
    return Start;
}());
exports.Start = Start;
//# sourceMappingURL=Start.js.map
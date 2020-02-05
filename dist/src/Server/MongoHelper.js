"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var MongoHelper = /** @class */ (function () {
    function MongoHelper() {
    }
    MongoHelper.prototype.disconnect = function () {
        mongoose.disconnect();
    };
    MongoHelper.prototype.connect = function (url) {
        return new Promise(function (resolve, reject) {
            mongoose.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                socketTimeoutMS: 5000,
                connectTimeoutMS: 5000
            });
            mongoose.connection.once("open", function () {
                resolve("Connected to Mongo via Mongoose");
            });
            mongoose.connection.on("error", function (err) {
                reject(err);
            });
        });
    };
    return MongoHelper;
}());
exports.MongoHelper = MongoHelper;
//# sourceMappingURL=MongoHelper.js.map
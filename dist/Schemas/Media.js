"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.MediaSchema = new mongoose_1.Schema({
    SKU: String,
    store: [{ type: String }],
    Name: String,
    Original_Title: String,
    Linzenzstart: Date,
    Linzenende: Date,
    stream_id: String,
    Status: String,
    Archive_Status: String,
    start_date: Date,
    end_date: Date,
    local_path: String,
    external_path: String
});
exports.MediaSchema.pre("save", function (next) {
    // let now = new Date();
    // if (!this.s) {
    //   this.createdAt = now;
    // }
    next();
});
exports.Media = mongoose_1.model("Media", exports.MediaSchema);
//# sourceMappingURL=Media.js.map
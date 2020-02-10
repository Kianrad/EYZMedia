"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Media_1 = require("../Schemas/Media");
var DataFetchService_1 = require("./DataFetchService");
var MediaService = /** @class */ (function () {
    function MediaService() {
        this.dataFetch = new DataFetchService_1.DataFetchService();
    }
    /**
     * deleteAll
     */
    MediaService.prototype.deleteAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Media_1.Media.deleteMany({})
                        .exec()
                        .then(function (data) {
                        if (data.deletedCount !== undefined) {
                            return data.deletedCount;
                        }
                        else {
                            return 0;
                        }
                    })
                        .catch(function () {
                        return 0;
                    })];
            });
        });
    };
    /**
     * saveAll
     */
    MediaService.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var media;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteAll()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dataFetch.getMediaList()];
                    case 2:
                        media = _a.sent();
                        return [2 /*return*/, this.saveMedia(media)];
                }
            });
        });
    };
    /**
     * saveMedia
     */
    MediaService.prototype.saveMedia = function (media) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Media_1.Media.create(media)
                        .then(function (data) {
                        return data.length;
                    })
                        .catch(function () {
                        return 0;
                    })];
            });
        });
    };
    /**
     * identifyValues
     */
    MediaService.prototype.identifyValues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, Media_1.Media.find({}).distinct("Status")];
                    case 1:
                        _a.Status = _b.sent();
                        return [4 /*yield*/, Media_1.Media.find({}).distinct("Archive_Status")];
                    case 2:
                        _a.Archive_Status = _b.sent();
                        return [4 /*yield*/, Media_1.Media.find({
                                start_date: { $lte: new Date(2020, 1, 1, 0, 0, 0, 0) },
                                end_date: { $gte: new Date(2020, 1, 1, 23, 59, 59, 59) }
                            }).count()];
                    case 3:
                        _a.ON_2020_01_01 = _b.sent();
                        return [4 /*yield*/, Media_1.Media.find({ stream_id: { $ne: null } })];
                    case 4:
                        res = (_a.WithStreamID = _b.sent(),
                            _a);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * update
     */
    MediaService.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Media_1.Media.updateMany({
                        Status: "New iTunes Pack",
                        Archive_Status: "Encoded"
                    }, { Status: "Transferring to UC" }, { new: false, multi: true })
                        .exec()
                        .then(function (data) {
                        return data.n;
                    })
                        .catch(function (err) {
                        return err;
                    })];
            });
        });
    };
    return MediaService;
}());
exports.MediaService = MediaService;
//# sourceMappingURL=MediaService.js.map
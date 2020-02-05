"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@overnightjs/core");
var bodyParser = require("body-parser");
var controllers = require("../Controllers");
var WebServer = /** @class */ (function (_super) {
    __extends(WebServer, _super);
    function WebServer() {
        var _this = _super.call(this, true) || this;
        _this.SERVER_STARTED = "EYZMedia server started on port: ";
        _this.app.use(bodyParser.json());
        _this.app.use(bodyParser.urlencoded({ extended: true }));
        _this.setupControllers();
        return _this;
    }
    WebServer.prototype.start = function (port) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.app.get("*", function (req, res) {
                res.send(_this.SERVER_STARTED + port);
            });
            _this.app.listen(port, function () {
                resolve(_this.SERVER_STARTED + port);
            });
        });
    };
    WebServer.prototype.getAppInstance = function () {
        return this.app;
    };
    WebServer.prototype.setupControllers = function () {
        var ctlrInstances = [];
        for (var name_1 in controllers) {
            if (controllers.hasOwnProperty(name_1)) {
                var controller = controllers[name_1];
                ctlrInstances.push(new controller());
            }
        }
        _super.prototype.addControllers.call(this, ctlrInstances);
    };
    return WebServer;
}(core_1.Server));
exports.default = WebServer;
//# sourceMappingURL=WebServer.js.map
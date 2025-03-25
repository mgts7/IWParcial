"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = handler;
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const serverless_express_1 = require("@vendia/serverless-express");
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    server = (0, serverless_express_1.default)({ app: expressApp });
    return server;
}
exports.config = {
    api: {
        bodyParser: false,
    },
};
async function handler(event, context, callback) {
    if (!server) {
        server = await bootstrap();
    }
    return server(event, context, callback);
}
//# sourceMappingURL=main.js.map
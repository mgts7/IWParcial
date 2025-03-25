"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsorsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sponsors_service_1 = require("./sponsors.service");
const sponsors_controller_1 = require("./sponsors.controller");
const sponsor_entity_1 = require("./entities/sponsor.entity");
const contestant_entity_1 = require("../contestants/entities/contestant.entity");
let SponsorsModule = class SponsorsModule {
};
exports.SponsorsModule = SponsorsModule;
exports.SponsorsModule = SponsorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sponsor_entity_1.Sponsors, contestant_entity_1.Contestant])],
        providers: [sponsors_service_1.SponsorsService],
        controllers: [sponsors_controller_1.SponsorsController],
        exports: [sponsors_service_1.SponsorsService],
    })
], SponsorsModule);
//# sourceMappingURL=sponsors.module.js.map
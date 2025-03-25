"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictatorsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dictators_service_1 = require("./dictators.service");
const dictators_controller_1 = require("./dictators.controller");
const dictator_entity_1 = require("./entities/dictator.entity");
let DictatorsModule = class DictatorsModule {
};
exports.DictatorsModule = DictatorsModule;
exports.DictatorsModule = DictatorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dictator_entity_1.Dictator])],
        controllers: [dictators_controller_1.DictatorsController],
        providers: [dictators_service_1.DictatorsService],
        exports: [dictators_service_1.DictatorsService],
    })
], DictatorsModule);
//# sourceMappingURL=dictators.module.js.map
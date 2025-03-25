"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictatorsController = void 0;
const common_1 = require("@nestjs/common");
const dictators_service_1 = require("./dictators.service");
const create_dictator_dto_1 = require("./dto/create-dictator.dto");
const update_dictator_dto_1 = require("./dto/update-dictator.dto");
let DictatorsController = class DictatorsController {
    dictatorsService;
    constructor(dictatorsService) {
        this.dictatorsService = dictatorsService;
    }
    create(createDictatorDto) {
        return this.dictatorsService.create(createDictatorDto);
    }
    findAll() {
        return this.dictatorsService.findAll();
    }
    findOne(id) {
        return this.dictatorsService.findOne(id);
    }
    update(id, updateDictatorDto) {
        return this.dictatorsService.update(id, updateDictatorDto);
    }
    remove(id) {
        return this.dictatorsService.remove(id);
    }
};
exports.DictatorsController = DictatorsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dictator_dto_1.CreateDictatorDto]),
    __metadata("design:returntype", void 0)
], DictatorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictatorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DictatorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dictator_dto_1.UpdateDictatorDto]),
    __metadata("design:returntype", void 0)
], DictatorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DictatorsController.prototype, "remove", null);
exports.DictatorsController = DictatorsController = __decorate([
    (0, common_1.Controller)('dictators'),
    __metadata("design:paramtypes", [dictators_service_1.DictatorsService])
], DictatorsController);
//# sourceMappingURL=dictators.controller.js.map
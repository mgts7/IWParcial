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
exports.SponsorsController = void 0;
const common_1 = require("@nestjs/common");
const sponsors_service_1 = require("./sponsors.service");
const create_sponsor_dto_1 = require("./dto/create-sponsor.dto");
const update_sponsor_dto_1 = require("./dto/update-sponsor.dto");
let SponsorsController = class SponsorsController {
    sponsorsService;
    constructor(sponsorsService) {
        this.sponsorsService = sponsorsService;
    }
    create(createSponsorDto) {
        return this.sponsorsService.create(createSponsorDto);
    }
    findAll() {
        return this.sponsorsService.findAll();
    }
    findOne(id) {
        return this.sponsorsService.findOne(id);
    }
    update(id, updateSponsorDto) {
        return this.sponsorsService.update(id, updateSponsorDto);
    }
    remove(id) {
        return this.sponsorsService.remove(id);
    }
};
exports.SponsorsController = SponsorsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sponsor_dto_1.CreateSponsorDto]),
    __metadata("design:returntype", void 0)
], SponsorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SponsorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SponsorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sponsor_dto_1.UpdateSponsorDto]),
    __metadata("design:returntype", void 0)
], SponsorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SponsorsController.prototype, "remove", null);
exports.SponsorsController = SponsorsController = __decorate([
    (0, common_1.Controller)('sponsors'),
    __metadata("design:paramtypes", [sponsors_service_1.SponsorsService])
], SponsorsController);
//# sourceMappingURL=sponsors.controller.js.map
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
exports.ContestantsController = void 0;
const common_1 = require("@nestjs/common");
const contestants_service_1 = require("./contestants.service");
const create_contestant_dto_1 = require("./dto/create-contestant.dto");
const update_contestant_dto_1 = require("./dto/update-contestant.dto");
let ContestantsController = class ContestantsController {
    contestantsService;
    constructor(contestantsService) {
        this.contestantsService = contestantsService;
    }
    create(createContestantDto) {
        return this.contestantsService.create(createContestantDto);
    }
    findAll() {
        return this.contestantsService.findAll();
    }
    findOne(id) {
        return this.contestantsService.findOne(id);
    }
    update(id, updateContestantDto) {
        return this.contestantsService.update(id, updateContestantDto);
    }
    remove(id) {
        return this.contestantsService.remove(id);
    }
    getRanking() {
        return this.contestantsService.getRanking();
    }
};
exports.ContestantsController = ContestantsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contestant_dto_1.CreateContestantDto]),
    __metadata("design:returntype", void 0)
], ContestantsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContestantsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContestantsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contestant_dto_1.UpdateContestantDto]),
    __metadata("design:returntype", void 0)
], ContestantsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContestantsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/ranking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContestantsController.prototype, "getRanking", null);
exports.ContestantsController = ContestantsController = __decorate([
    (0, common_1.Controller)('contestants'),
    __metadata("design:paramtypes", [contestants_service_1.ContestantsService])
], ContestantsController);
//# sourceMappingURL=contestants.controller.js.map
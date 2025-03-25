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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contestant = exports.ContestantStatus = void 0;
const typeorm_1 = require("typeorm");
var ContestantStatus;
(function (ContestantStatus) {
    ContestantStatus["ALIVE"] = "Alive";
    ContestantStatus["DEAD"] = "Dead";
    ContestantStatus["ESCAPED"] = "Escaped";
    ContestantStatus["FREE"] = "Free";
})(ContestantStatus || (exports.ContestantStatus = ContestantStatus = {}));
let Contestant = class Contestant {
    id;
    name;
    nickname;
    origin;
    strength;
    agility;
    health;
    wins;
    losses;
    status;
};
exports.Contestant = Contestant;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Contestant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contestant.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contestant.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contestant.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Contestant.prototype, "strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Contestant.prototype, "agility", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Contestant.prototype, "health", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Contestant.prototype, "wins", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Contestant.prototype, "losses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ContestantStatus, default: ContestantStatus.ALIVE }),
    __metadata("design:type", String)
], Contestant.prototype, "status", void 0);
exports.Contestant = Contestant = __decorate([
    (0, typeorm_1.Entity)()
], Contestant);
//# sourceMappingURL=contestant.entity.js.map
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
exports.ContestantsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const contestant_entity_1 = require("./entities/contestant.entity");
let ContestantsService = class ContestantsService {
    contestantRepository;
    constructor(contestantRepository) {
        this.contestantRepository = contestantRepository;
    }
    async create(createContestantDto) {
        const contestant = this.contestantRepository.create(createContestantDto);
        return this.contestantRepository.save(contestant);
    }
    async findAll() {
        return this.contestantRepository.find();
    }
    async findOne(id) {
        const contestant = await this.contestantRepository.findOne({ where: { id } });
        if (!contestant)
            throw new common_1.NotFoundException('Contestant not found');
        return contestant;
    }
    async update(id, updateContestantDto) {
        const contestant = await this.findOne(id);
        Object.assign(contestant, updateContestantDto);
        return this.contestantRepository.save(contestant);
    }
    async remove(id) {
        const contestant = await this.findOne(id);
        await this.contestantRepository.remove(contestant);
    }
    async getRanking() {
        const contestants = await this.findAll();
        return contestants.map((contestant) => {
            let rank = 'Coward';
            if (contestant.wins > 2)
                rank = 'Novice Warrior';
            if (contestant.wins > 5)
                rank = 'Mediocre Fighter';
            if (contestant.wins > 10)
                rank = 'Killing Machine';
            if (contestant.wins > 15)
                rank = 'Bloodthirsty Champion';
            if (contestant.wins > 20)
                rank = 'Legendary Gladiator';
            if (contestant.wins > 30)
                rank = 'God of the Arena';
            return { name: contestant.name, rank };
        });
    }
};
exports.ContestantsService = ContestantsService;
exports.ContestantsService = ContestantsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contestant_entity_1.Contestant)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContestantsService);
//# sourceMappingURL=contestants.service.js.map
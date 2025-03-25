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
exports.SponsorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sponsor_entity_1 = require("./entities/sponsor.entity");
const contestant_entity_1 = require("../contestants/entities/contestant.entity");
let SponsorsService = class SponsorsService {
    sponsorRepository;
    contestantRepository;
    constructor(sponsorRepository, contestantRepository) {
        this.sponsorRepository = sponsorRepository;
        this.contestantRepository = contestantRepository;
    }
    async create(createSponsorDto) {
        const sponsor = this.sponsorRepository.create(createSponsorDto);
        return await this.sponsorRepository.save(sponsor);
    }
    async findAll() {
        return await this.sponsorRepository.find();
    }
    async findOne(id) {
        const sponsor = await this.sponsorRepository.findOne({ where: { id } });
        if (!sponsor) {
            throw new common_1.NotFoundException(`Sponsor with ID ${id} not found`);
        }
        return sponsor;
    }
    async update(id, updateSponsorDto) {
        await this.sponsorRepository.update(id, updateSponsorDto);
        const updatedSponsor = await this.sponsorRepository.findOne({ where: { id } });
        if (!updatedSponsor) {
            throw new common_1.NotFoundException(`Sponsor with id ${id} not found`);
        }
        return updatedSponsor;
    }
    async remove(id) {
        await this.sponsorRepository.delete(id);
    }
    async sponsorContestant(sponsorId, contestantId, items) {
        const sponsor = await this.sponsorRepository.findOne({ where: { id: sponsorId } });
        const contestant = await this.contestantRepository.findOne({ where: { id: contestantId } });
        if (!sponsor || !contestant) {
            throw new Error('Sponsor or contestant not found');
        }
        sponsor.donated_items = items;
        sponsor.preferred_fighter = contestantId;
        await this.sponsorRepository.save(sponsor);
        return `${sponsor.company_name} has sponsored ${contestant.nickname} with ${items}`;
    }
};
exports.SponsorsService = SponsorsService;
exports.SponsorsService = SponsorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sponsor_entity_1.Sponsors)),
    __param(1, (0, typeorm_1.InjectRepository)(contestant_entity_1.Contestant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SponsorsService);
//# sourceMappingURL=sponsors.service.js.map
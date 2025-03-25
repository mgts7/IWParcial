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
exports.BattlesService = void 0;
const common_1 = require("@nestjs/common");
const readlineSync = require("readline-sync");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const battle_entity_1 = require("./entities/battle.entity");
let BattlesService = class BattlesService {
    battleRepository;
    constructor(battleRepository) {
        this.battleRepository = battleRepository;
    }
    async create(createBattleDto) {
        const battle = this.battleRepository.create(createBattleDto);
        return this.battleRepository.save(battle);
    }
    async findAll() {
        return this.battleRepository.find();
    }
    async findOne(id) {
        const battle = await this.battleRepository.findOne({ where: { id } });
        if (!battle)
            throw new common_1.NotFoundException('Battle not found');
        return battle;
    }
    async update(id, updateBattleDto) {
        const battle = await this.findOne(id);
        Object.assign(battle, updateBattleDto);
        return this.battleRepository.save(battle);
    }
    async remove(id) {
        const battle = await this.findOne(id);
        await this.battleRepository.remove(battle);
    }
    async getBattleResults() {
        const battles = await this.findAll();
        return battles.map((battle) => ({
            id: battle.id,
            winner: battle.winner.name,
            loser: battle.loser.name,
        }));
    }
    contestants = [];
    battles = [];
    dictators = [];
    bets = [];
    promptRegisterDictator() {
        const name = readlineSync.question('Ingrese su nombre: ');
        const territory = readlineSync.question('Ingrese su territorio: ');
        const plata = readlineSync.questionInt('Ingrese la cantidad de plata: ');
        const numberOfSlaves = readlineSync.questionInt('Ingrese el numero de esclavos: ');
        const loyaltyToCarolina = readlineSync.questionInt('Ingrese la lealtad a Carolina (0-100): ');
        const dictator = {
            id: crypto.randomUUID(),
            name,
            territory,
            plata,
            number_of_slaves: numberOfSlaves,
            loyalty_to_Carolina: loyaltyToCarolina,
        };
        this.registerDictator(dictator);
    }
    registerDictator(dictator) {
        this.dictators.push(dictator);
        console.log(`✅ Dictador registrado: ${dictator.name}, Territorio: ${dictator.territory}, Plata: ${dictator.plata}`);
    }
    placeBet(dictator, fight) {
        console.log(`📢 ${dictator.name}, debes apostar por uno de los dos combatientes.`);
        console.log(`1. ${fight.contestant1.nickname}`);
        console.log(`2. ${fight.contestant2.nickname}`);
        const choice = readlineSync.questionInt('Elige a quien apostar (1 o 2): ');
        const contestant = choice === 1 ? fight.contestant1 : fight.contestant2;
        const amount = readlineSync.questionInt(`💰 Cuanta plata deseas apostar por ${contestant.nickname}?: `);
        if (dictator.plata < amount) {
            console.log(`❌ ${dictator.name} no tiene suficiente plata para apostar ${amount}.`);
            return;
        }
        dictator.plata -= amount;
        this.bets.push({ dictator, contestant, amount });
        console.log(`💰 ${dictator.name} apuesta ${amount} por ${contestant.nickname}. Saldo actual: ${dictator.plata}`);
    }
    startBattle(fight, simulate) {
        let { contestant1, contestant2 } = fight;
        console.log(`🔥 Proxima batalla: ${contestant1.nickname} vs ${contestant2.nickname} 🔥`);
        this.dictators.forEach(dictator => {
            this.placeBet(dictator, fight);
        });
        let attacker = contestant1.agility >= contestant2.agility ? contestant1 : contestant2;
        let defender = attacker === contestant1 ? contestant2 : contestant1;
        console.log(`👉 ${attacker.nickname} ataca primero por mayor agilidad.`);
        while (contestant1.health > 0 && contestant2.health > 0) {
            console.log(`
⚔️ Turno de ${attacker.nickname}`);
            let damage = attacker.strength;
            defender.health -= damage;
            console.log(`💥 ${attacker.nickname} ataca a ${defender.nickname} causando ${damage} de dano.`);
            console.log(`❤️ ${contestant1.nickname}: ${contestant1.health} HP, ${contestant2.nickname}: ${contestant2.health} HP`);
            if (defender.health <= 0)
                break;
            [attacker, defender] = [defender, attacker];
        }
        let winner = contestant1.health > 0 ? contestant1 : contestant2;
        console.log(`🏆 El ganador es ${winner.nickname}!`);
        this.resolveBets(winner);
        console.log(`🎖️ Estado final: ${winner.nickname} tiene ${winner.health} HP restantes.`);
    }
    resolveBets(winner) {
        this.bets.forEach((bet) => {
            if (bet.contestant === winner) {
                let winnings = bet.amount * 2;
                bet.dictator.plata += winnings;
                console.log(`🎉 ${bet.dictator.name} gana la apuesta y obtiene ${winnings}! Saldo actual: ${bet.dictator.plata}`);
            }
            else {
                console.log(`❌ ${bet.dictator.name} pierde la apuesta de ${bet.amount}. Saldo actual: ${bet.dictator.plata}`);
            }
        });
        this.bets = [];
    }
};
exports.BattlesService = BattlesService;
exports.BattlesService = BattlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(battle_entity_1.Battles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BattlesService);
//# sourceMappingURL=battles.service.js.map
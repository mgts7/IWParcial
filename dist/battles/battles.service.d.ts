import { Contestant } from 'src/contestants/entities/contestant.entity';
import { Dictator } from 'src/dictators/entities/dictator.entity';
import { Repository } from 'typeorm';
import { CreateBattleDto } from './dto/create-battle.dto';
import { Battles } from './entities/battle.entity';
import { UpdateBattleDto } from './dto/update-battle.dto';
export declare class BattlesService {
    private readonly battleRepository;
    constructor(battleRepository: Repository<Battles>);
    create(createBattleDto: CreateBattleDto): Promise<Battles>;
    findAll(): Promise<Battles[]>;
    findOne(id: string): Promise<Battles>;
    update(id: string, updateBattleDto: UpdateBattleDto): Promise<Battles>;
    remove(id: string): Promise<void>;
    getBattleResults(): Promise<{
        id: string;
        winner: string;
        loser: string;
    }[]>;
    private contestants;
    private battles;
    private dictators;
    private bets;
    promptRegisterDictator(): void;
    registerDictator(dictator: Dictator): void;
    placeBet(dictator: Dictator, fight: {
        contestant1: Contestant;
        contestant2: Contestant;
    }): void;
    startBattle(fight: {
        contestant1: Contestant;
        contestant2: Contestant;
    }, simulate: boolean): void;
    private resolveBets;
}

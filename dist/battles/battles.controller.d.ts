import { BattlesService } from './battles.service';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
export declare class BattlesController {
    private readonly battlesService;
    constructor(battlesService: BattlesService);
    create(createBattleDto: CreateBattleDto): Promise<import("./entities/battle.entity").Battles>;
    findAll(): Promise<import("./entities/battle.entity").Battles[]>;
    findOne(id: string): Promise<import("./entities/battle.entity").Battles>;
    update(id: string, updateBattleDto: UpdateBattleDto): Promise<import("./entities/battle.entity").Battles>;
    remove(id: string): Promise<void>;
}

import { ContestantsService } from './contestants.service';
import { CreateContestantDto } from './dto/create-contestant.dto';
import { UpdateContestantDto } from './dto/update-contestant.dto';
export declare class ContestantsController {
    private readonly contestantsService;
    constructor(contestantsService: ContestantsService);
    create(createContestantDto: CreateContestantDto): Promise<import("./entities/contestant.entity").Contestant>;
    findAll(): Promise<import("./entities/contestant.entity").Contestant[]>;
    findOne(id: string): Promise<import("./entities/contestant.entity").Contestant>;
    update(id: string, updateContestantDto: UpdateContestantDto): Promise<import("./entities/contestant.entity").Contestant>;
    remove(id: string): Promise<void>;
    getRanking(): Promise<{
        name: string;
        rank: string;
    }[]>;
}

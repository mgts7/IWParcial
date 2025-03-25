import { Repository } from 'typeorm';
import { Contestant } from './entities/contestant.entity';
import { CreateContestantDto } from './dto/create-contestant.dto';
import { UpdateContestantDto } from './dto/update-contestant.dto';
export declare class ContestantsService {
    private readonly contestantRepository;
    constructor(contestantRepository: Repository<Contestant>);
    create(createContestantDto: CreateContestantDto): Promise<Contestant>;
    findAll(): Promise<Contestant[]>;
    findOne(id: string): Promise<Contestant>;
    update(id: string, updateContestantDto: UpdateContestantDto): Promise<Contestant>;
    remove(id: string): Promise<void>;
    getRanking(): Promise<{
        name: string;
        rank: string;
    }[]>;
}

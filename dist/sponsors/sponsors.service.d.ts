import { Repository } from 'typeorm';
import { Sponsors } from './entities/sponsor.entity';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { Contestant } from 'src/contestants/entities/contestant.entity';
export declare class SponsorsService {
    private readonly sponsorRepository;
    private readonly contestantRepository;
    constructor(sponsorRepository: Repository<Sponsors>, contestantRepository: Repository<Contestant>);
    create(createSponsorDto: CreateSponsorDto): Promise<Sponsors>;
    findAll(): Promise<Sponsors[]>;
    findOne(id: string): Promise<Sponsors | null>;
    update(id: string, updateSponsorDto: UpdateSponsorDto): Promise<Sponsors>;
    remove(id: string): Promise<void>;
    sponsorContestant(sponsorId: string, contestantId: string, items: string): Promise<string>;
}

import { SponsorsService } from './sponsors.service';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
export declare class SponsorsController {
    private readonly sponsorsService;
    constructor(sponsorsService: SponsorsService);
    create(createSponsorDto: CreateSponsorDto): Promise<import("./entities/sponsor.entity").Sponsors>;
    findAll(): Promise<import("./entities/sponsor.entity").Sponsors[]>;
    findOne(id: string): Promise<import("./entities/sponsor.entity").Sponsors | null>;
    update(id: string, updateSponsorDto: UpdateSponsorDto): Promise<import("./entities/sponsor.entity").Sponsors>;
    remove(id: string): Promise<void>;
}

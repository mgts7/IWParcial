import { DictatorsService } from './dictators.service';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';
export declare class DictatorsController {
    private readonly dictatorsService;
    constructor(dictatorsService: DictatorsService);
    create(createDictatorDto: CreateDictatorDto): Promise<import("./entities/dictator.entity").Dictator>;
    findAll(): Promise<import("./entities/dictator.entity").Dictator[]>;
    findOne(id: string): Promise<import("./entities/dictator.entity").Dictator | null>;
    update(id: string, updateDictatorDto: UpdateDictatorDto): Promise<import("./entities/dictator.entity").Dictator | null>;
    remove(id: string): Promise<{
        message: string;
    }>;
}

import { Repository } from 'typeorm';
import { Dictator } from './entities/dictator.entity';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';
export declare class DictatorsService {
    private readonly dictatorRepository;
    constructor(dictatorRepository: Repository<Dictator>);
    create(createDictatorDto: CreateDictatorDto): Promise<Dictator>;
    findAll(): Promise<Dictator[]>;
    findOne(id: string): Promise<Dictator | null>;
    update(id: string, updateDictatorDto: UpdateDictatorDto): Promise<Dictator | null>;
    remove(id: string): Promise<{
        message: string;
    }>;
}

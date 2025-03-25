import { Repository } from 'typeorm';
import { Transactions } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Dictator } from '../dictators/entities/dictator.entity';
export declare class TransactionsService {
    private readonly transactionsRepository;
    private readonly dictatorsRepository;
    constructor(transactionsRepository: Repository<Transactions>, dictatorsRepository: Repository<Dictator>);
    create(createTransactionDto: CreateTransactionDto): Promise<Transactions>;
    findAll(): Promise<Transactions[]>;
    findOne(id: string): Promise<Transactions | null>;
    update(id: string, updateTransactionDto: UpdateTransactionDto): Promise<Transactions | null>;
    remove(id: string): Promise<{
        message: string;
    }>;
}

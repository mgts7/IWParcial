import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    create(createTransactionDto: CreateTransactionDto): Promise<import("./entities/transaction.entity").Transactions>;
    findAll(): Promise<import("./entities/transaction.entity").Transactions[]>;
    findOne(id: string): Promise<import("./entities/transaction.entity").Transactions | null>;
    update(id: string, updateTransactionDto: UpdateTransactionDto): Promise<import("./entities/transaction.entity").Transactions | null>;
    remove(id: string): Promise<{
        message: string;
    }>;
}

export declare enum TransactionStatus {
    COMPLETED = "Completed",
    FAILED = "Failed",
    DISCOVERED = "Discovered"
}
export declare class Transactions {
    id: string;
    buyer_id: string;
    seller_id: string;
    item: string;
    amount: number;
    status: TransactionStatus;
}

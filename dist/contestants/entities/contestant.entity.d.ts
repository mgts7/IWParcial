export declare enum ContestantStatus {
    ALIVE = "Alive",
    DEAD = "Dead",
    ESCAPED = "Escaped",
    FREE = "Free"
}
export declare class Contestant {
    id: string;
    name: string;
    nickname: string;
    origin: string;
    strength: number;
    agility: number;
    health: number;
    wins: number;
    losses: number;
    status: ContestantStatus;
}

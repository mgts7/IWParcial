export declare enum ContestantStatus {
    ALIVE = "Alive",
    DEAD = "Dead",
    ESCAPED = "Escaped",
    FREE = "Free"
}
export declare class CreateContestantDto {
    name: string;
    nickname: string;
    origin: string;
    strength: number;
    agility: number;
    wins: number;
    losses: number;
    status: ContestantStatus;
}

export interface QualifyingResult {
    position: string;
    Driver: {
        code: string;
    }
    Q1: string;
    Q2: string;
    Q3: string;
};

export interface RaceResult {
    position: string;
    Driver: {
        code: string;
    }
};

export interface Race {
    season: string;
    round: string;
    raceName: string;
    Circuit: {
        circuitName: string;
    };
    date: string;
    time: string;
    Results?: RaceResult;
    QualifyingResults?: QualifyingResult;
}
import React from 'react';
import { Race } from '../../model/model';

export type QualyfingResultProps = {
    raceresult: Race;
}

export const QualyfingResult: React.FC<QualyfingResultProps> = ({raceresult}) => {
    return (
        <>
            <h1>QualyfingResult</h1>
            {raceresult.raceName}
        </>
    );
};




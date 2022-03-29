import React from 'react';
import { Race, QualifyingResult } from '../../model/model';
import { QualyfingResults } from '../QualyfingResults';
import './CircuitResult.css' 

export type CircuitResultProps = {
    raceresult: Race;
}

export const CircuitResult: React.FC<CircuitResultProps> = ({raceresult}) => {
    const circuitQualifyingResults = raceresult.QualifyingResults;
    
    return (
        <>
            {raceresult.raceName}
            <QualyfingResults raceresult={raceresult}/>
            <p>Prediction</p>
            <div className='race-position--prediction'>
                   
                    {circuitQualifyingResults?.slice(0, 10).map((qualifyResult: QualifyingResult, index: number) => {
                        return (
                            <div key={index} className='race-position-driver--prediction--container'>
                                <div className='race-position-driver--prediction'>
                                    {qualifyResult.Driver.code}
                                </div>
                            </div>
                        )
                    })}
                </div>
            
            
            
            
        </>
    );
};
import React from 'react';
import { Race, QualifyingResult } from '../../model/model';
import { Qualyfing } from '../Qualyfing';

export type QualyfingResultsProps = {
    raceresult: Race;
    
}

export const QualyfingResults: React.FC<QualyfingResultsProps> = ({raceresult}) => {
    const circuitQualifyingResults = raceresult.QualifyingResults;

    return (
        <>
            <div className='race-qualify'>
                <div className='race-position'>
                    <p>Q3</p>
                    {circuitQualifyingResults?.slice(0, 10).map((qualifyResult: QualifyingResult, index: number) => {
                        return <Qualyfing index={index} qualifyResult={qualifyResult.Q3}/>
                    })}
                </div>
                
                <div className='race-position'>
                    <p>Q2</p>
                    {circuitQualifyingResults?.slice(0, 10).map((qualifyResult: QualifyingResult, index: number) => {
                        return <Qualyfing index={index} qualifyResult={qualifyResult.Q2}/>
                    })}
                </div>

                <div className='race-position'>
                    <p>Q1</p>
                    {circuitQualifyingResults?.slice(0, 10).map((qualifyResult: QualifyingResult, index: number) => {
                        return <Qualyfing index={index} qualifyResult={qualifyResult.Q1}/>
                    })}
                </div>

                <div className='race-position'>
                    <p>POS</p>
                    {circuitQualifyingResults?.slice(0, 10).map((qualifyResult: QualifyingResult, index: number) => {
                        return <Qualyfing index={index} qualifyResult={qualifyResult.Driver.code}/>
                    })}
                </div>
            </div>
        </>
    );
};




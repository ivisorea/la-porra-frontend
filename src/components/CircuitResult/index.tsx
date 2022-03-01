import React from 'react';
import { Race, QualifyingResult } from '../../model/model';
import './CircuitResult.css' 

export type CircuitResultProps = {
    raceresult: Race;
    
}

export const CircuitResult: React.FC<CircuitResultProps> = ({raceresult}) => {
    const circuitQualifyingResults = raceresult.QualifyingResults;
    
    return (
        <>
            {raceresult.raceName}
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
            <div className='race-qualify'>
                <div className='race-position'>
                    <p>Q3</p>
                    {circuitQualifyingResults?.slice(0, 10).map((qualifyResult: QualifyingResult, index: number) => {
                        return (
                            <div key={index} className='race-position-driver'>
                                {qualifyResult.Q3}
                            </div>
                        )
                    })}
                </div>
                
                <div className='race-position'>
                    <p>Q2</p>
                    {circuitQualifyingResults?.slice(0, 10).map((qualifyResult: QualifyingResult, index: number) => {
                        return (
                            <div key={index} className='race-position-driver'>
                                {qualifyResult.Q2}
                            </div>
                        )
                    })}
                </div>

                <div className='race-position'>
                    <p>Q1</p>
                    {circuitQualifyingResults?.slice(0, 10).map((qualifyResult: QualifyingResult, index: number) => {
                        return (
                            <div key={index} className='race-position-driver'>
                                {qualifyResult.Q1}
                            </div>
                        )
                    })}
                </div>

                <div className='race-position'>
                    <p>POS</p>
                    {circuitQualifyingResults?.slice(0, 10).map((qualifyResult: QualifyingResult, index: number) => {
                        return (
                            <div key={index} className='race-position-driver'>
                                {qualifyResult.Driver.code}
                            </div>
                        )
                    })}
                </div>
            </div>
            

            
        </>
    );
};
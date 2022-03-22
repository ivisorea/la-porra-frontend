import React from 'react'
import { RoundResult } from '../../model/model';

export type FinalPositionProps = {
    index: number;
    roundResult: RoundResult;
}

export const FinalPosition:React.FC<FinalPositionProps> = ({index, roundResult}) => {
  return (
        <div key={index} className='round-final-position--container'>
            <div className='round-final-position--driver'>
                {/* {roundResult.Driver.code} */}
            </div>
            <div className='round-final-position--position'>
                {/* {roundResult.position} */}
            </div>
                        
        </div>
  )
}

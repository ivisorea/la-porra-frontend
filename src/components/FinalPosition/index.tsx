import React from 'react'
import { RoundResult } from '../../model/model';
import './FinalPosition.css'

export type FinalPositionProps = {
    roundResult: RoundResult;
}

export const FinalPosition:React.FC<FinalPositionProps> = ({roundResult}) => {
  return (
        <div className='round-final-position--container'>
            <h5>Final Position</h5>
            <div className='round-final-position--driver'>
                {/* {roundResult.Driver.code} */}
            </div>
            <div className='round-final-position--position'>
                {/* {roundResult.position} */}
            </div>
                        
        </div>
  )
}

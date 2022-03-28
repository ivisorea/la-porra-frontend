import React from 'react'

export type QualyfingProps = {
    index: number;
    qualifyResult: string;
}

export const Qualyfing: React.FC<QualyfingProps> = ({index, qualifyResult}) => {
  return (
    <div key={index} className='race-position-driver'>
        {qualifyResult}
    </div>
  )
}

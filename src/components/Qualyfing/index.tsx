import React from 'react'

export type QualyfingProps = {
    qualifyResult: string;
}

export const Qualyfing: React.FC<QualyfingProps> = ({ qualifyResult}) => {
  return (
    <div className='race-position-driver'>
        {qualifyResult}
    </div>
  )
}

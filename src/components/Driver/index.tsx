import React from 'react'
import './Driver.css'
export type DriverProps = {

}

export const Driver:React.FC<DriverProps> = () => {
  return (
    <>
        <div className='driver'>
            <img 
            src='https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg' 
            alt='driver'
            className='driver-image'
            />
        <label className='driver-label'>
            HAM
        </label>
        </div>
        
    </>
  )
}
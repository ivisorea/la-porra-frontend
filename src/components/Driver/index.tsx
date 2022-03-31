import React from 'react'
import { DriverInfo } from '../../model/model'
import './Driver.css'

export type DriverProps = {
    driver: DriverInfo
}

export const Driver:React.FC<DriverProps> = ({driver}) => {
    const [ driverInfo, setDriverInfo] = React.useState({});
    console.log('driverInfo: ', driverInfo);
    
  return (
    <>
        <button className='driver driver-card' onClick={e => setDriverInfo(e.target)}>
            <img 
                className='driver-image'
                src={driver.image} 
                alt={driver.name} />
            <label
                className='driver-label'
            >{driver.code}</label> 
        </button>
        
    </>
  )
}

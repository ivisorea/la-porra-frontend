import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { Driver } from '../Driver';
import { PredictionForm } from '../PredictionForm';
import './DriverList.css'
export type DriverListProps = {

}

export const DriverList:React.FC<DriverListProps> = () => {
  const { setOpenModal } = useContext(AppContext);

  const handleOpenModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <div className='driver-list-container'>
        <ul className='driver-list'>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          <li className='driver-list-item'>
            <Driver />
          </li>
          </ul>
      </div>
     
      <div className='driver-list--close'>
        <button
          type='button'
          className='driver-list--close--button'
          onClick={handleOpenModal}
          >
          X
        </button>
      </div>
    </>
  )
}

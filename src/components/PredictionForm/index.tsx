import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import './PredictionForm.css'

export type PredictionFormProps = {
 
}

export const PredictionForm: React.FC<PredictionFormProps> = () => {
    const { setOpenModal, openModal } = useContext(AppContext);
    

    const handleOpenModal = () => {
      setOpenModal(true);
      console.log('openModal: ', openModal);

    }

  return (
    <form className='prediction-form-container'>
        <div className='driver'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 1
        </label>
        </div>
        
        <div className='prediction-form-input-container'>
          <input 
            type={'text'} 
            className='prediction-form-position-input' 
            placeholder='position1'/>
        </div>
    </form>
  )
}
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
    <>
      <p className='form-title'>Enter your prediction:</p>
      <form className='prediction-form-container'>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 1
        </label>
        </div>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 2
        </label>
        </div>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 3
        </label>
        </div>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 4
        </label>
        </div>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 5
        </label>
        </div>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 6
        </label>
        </div>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 7
        </label>
        </div>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 8
        </label>
        </div>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className='driver-label'>
          Position 9
        </label>
        </div>
        <div className='driver driver-position'>
          <button
            type='button'
            onClick={(handleOpenModal)}
          > Add position</button>
        <label className=' driver-label '>
          Position 10
        </label>
        </div>

        {/* <div className='prediction-form-input-container'>
          <input 
            type={'text'} 
            className='prediction-form-position-input' 
            placeholder='position1'/>
        </div>
        <div className='prediction-form-input-container'>
          <input 
            type={'text'} 
            className='prediction-form-position-input' 
            placeholder='position2'/> */}
        {/* </div> */}
    </form>
    </>
    
  )
}
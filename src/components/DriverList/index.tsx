import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { Driver } from '../Driver';
import './DriverList.css'

export type DriverListProps = {

}

const listofdrivers = [
  {
    code: 'VER',
    name: 'Verstappen',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg'
  },{
    code: 'VET',
    name: 'Vettel',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg'
  },{
    code: 'VET',
    name: 'Vettel',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg'
  },{
    code: 'HAM',
    name: 'Lewis Hamilton',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'VET',
    name: 'Valtteri Bottas',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'SEL',
    name: 'Sebastian Vettel',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'RIC',
    name: 'Charles Leclerc',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'VER',
    name: 'Max Verstappen',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'ALO',
    name: 'Pierre Gasly', 
    image: 'https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'VAN',
    name: 'Carlos Sainz',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'KVY',
    name: 'Kimi Räikkönen',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'ROS',
    name: 'Romain Grosjean',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'VET',
    name: 'Valtteri Bottas',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'SEL',
    name: 'Sebastian Vettel',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'RIC',
    name: 'Charles Leclerc',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'VER',
    name: 'Max Verstappen',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'ALO',
    name: 'Pierre Gasly',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'VAN',
    name: 'Carlos Sainz',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'KVY',
    name: 'Kimi Räikkönen',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  },{
    code: 'VAN',
    name: 'Carlos Sainz',
    image: 'https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.640.medium.jpg/1647334259839.jpg',
  }
]

export const DriverList:React.FC<DriverListProps> = () => {
  const { setOpenModal } = useContext(AppContext);

  const handleOpenModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <div className='driver-list-container'>
        
          {listofdrivers.map((driver, index) => (
            <div key={index} className='driver-card-modal'>
              <Driver driver={driver}/>
            </div>
          ))}
       
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

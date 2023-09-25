import React from 'react'
import Sidebar from '../../AppComponents/Sidebar'
import Navbar from '../../AppComponents/Navbar'
import PatientInfoBox from '../../AppComponents/PatientInfoBox'
const PatientLivePass = () => {
  return (
    <>
      <Sidebar
      backgroundColor="white"
      // display="grid"
      // gridTemplateRows="0fr 0fr"
      position="fixed"
      padding="30px"
      color="white"    
      height="100vh" 
      width="15vw"
      />
      <Navbar/> 

      <PatientInfoBox/>
    </>
  )
}

export default PatientLivePass
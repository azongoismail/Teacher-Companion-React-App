import React from 'react'
import Background from '../assets/pexels-max-fischer-5212329.jpg';


const Hero = () => {
  return (
   <>
   <div className='bg-center bg-cover min-h-screen flex items-center justify-center bg-no-repeat opacity-75 sm:bg-center sm:bg-cover md:bg-cover md:bg-center lg:bg-cover lg:bg-center' style={ {backgroundImage : `url(${Background})`}} >
 
   </div>

   </>
   
  )
}

export default Hero;

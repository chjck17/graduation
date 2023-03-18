import React, { useEffect, useRef, useState } from 'react'
import Confetti from "react-confetti"
import nhi from '../../assets/mobile/showcasse/Nhi.png'
import test from '../../assets/mobile/showcasse/test2.png'
// import '../Team/Team.css'
import '../Team/Home.css'
const Team = (props) => {
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  const confettiRef = useRef(null)
  const {isMobile} = props
  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

  return (
    <section className='bg-sm-blue relative w-[100vw]  flex flex-col justify-center min-h-screen	' id='team' ref={confettiRef}> 
      <Confetti
        className='absolute w-[100%] xl:w-[100%] h-[100%] z-2'
        numberOfPieces={90}
        width={width}
        height={height}
      />
      <div className='flex h-[100%] w-[100%] justify-center text-center z-0'>
        <div className="w-[90%] xl:w-[70%] lg:w-[80%] md:w-[80%] h-[100%] absolute top-0 flex justify-center items-center">
          <img src={test} alt="background" className='bg-center bg-cover bg-no-repeat bg-gradient-to-r from-sky-500 to-indigo-500 shadow-opacity-50 shadow-2xl shadow-black'/>
        </div> 
        <div className='w-[70%] h-[100%] md:w-[50%] relative justify-center my-8 flex items-center flex-wrap z-10'>
          <div className='flex justify-between h-[100%] w-[100%]'> 
            <div className='w-[25%] flex items-center'>
              <div className='w-[50%] inline-block order-first'>
                <h1 className='text-white whitespace-pre-line font-bold text-sm md:text-sm lx:text-2xl lg:text-3xl  xl:text-4xl font-Oswald capitalize my-[1rem]'>
                  <h1 className='text-2xl md:text-4xl lx:text-6xl lg:text-7xl  xl:text-8xl '>21</h1>
                  Match
                </h1>
              </div> 
              <div className='w-[50%] flex justify-center order-last'>
                <div className="flex border-4 font-bold bg-lime-500 font-sans text-black text-[0.5rem] md:text-xs lx:text-sm lm:text-sm xs:text-[1rem]  xl:text-[1.5rem] py-1 px-2 lg:py-1 lg:px-4 lm:py-2 lm:px-5 xs:py-2 xs:px-4 xl:py-4 xl:px-5 rounded-full transform rotate-90">
                  <span>TUESDAY</span>
                </div>
              </div>
            </div>
            <img src={nhi} alt='debeak' className='flex w-[50%]'></img>
            <div className='w-[25%] flex items-center'>  
              <div className='w-[50%] flex justify-center'>
                <div class="flex border-4 font-bold bg-lime-500  font-sans text-black text-[0.5rem] md:text-xs lx:text-sm lm:text-sm xs:text-[1rem]   xl:text-[1.5rem] py-1 px-3 lg:py-1 lg:px-5 lm:py-2 lm:px-6 xs:py-2 xs:px-5 xl:py-4 xl:px-6 rounded-full transform rotate-90">
                  <span>IN_UEH</span>
                </div>
              </div>
              <div className='w-[50%] inline-block'>
                <h1 className='text-white whitespace-pre-line font-bold text-sm md:text-sm lx:text-2xl lg:text-3xl  xl:text-4xl font-Oswald capitalize my-[1rem]'>
                  <h1 className='text-2xl md:text-4xl lx:text-6xl lg:text-7xl  xl:text-8xl'>A</h1>
                  Base
                </h1>
              </div> 
            </div>
          </div>
          <div className='z-1 absolute  bottom-0  w-[80%] m-3'>
            <h1 className='  text-white text-xl md:text-2xl  ls:text-[2rem] lx:text-[3rem] lg:text-[3.2rem] xl:text-[4rem] font-Great capitalize'>
              End of university
              </h1>
              <p className='bg-gradient-to-t from-blue-500 to-blue-300 text-transparent bg-clip-text text-2xl  md:text-4xl  ls:text-[2rem] lx:text-[2.3rem] lg:text-[2.5rem] lm:text-[3rem] xl:text-[3.5rem] font-Climate z-0 py-0 md:py-1 lg:py-2 font-bold'>
                GRADUATION
              </p>
              <p className=' text-white text-xl md:text-2xl  ls:text-[2rem] lx:text-[3rem] lg:text-[3.2rem] xl:text-[4rem] font-Great capitalize'>party</p> 
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
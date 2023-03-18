import React from 'react'
import {  useTypewriter } from 'react-simple-typewriter'
import videoIntro from "../../assets/video/Nhi.mp4"
import logoBg from "../../assets/mobile/home.png"
import '../Home/Home.css'
import '../Team/Team.css'
export const Home = () => {

  return (
    <section className='bg-sm-blue	ticket min-h-[calc(100vh-5rem)] w-[100%] flex justify-center lg:w-[100%] lg:flex lg:justify-center relative' id='home'>
      <div class='ripple-background z-1  flex'>
        <div class='circle xxlarge shade1'></div>
        <div class='circle xlarge shade2'></div>
        <div class='circle large shade3'></div>
        <div class='circle mediun shade4'></div>
        <div class='circle small shade5'></div>
      </div>

      <div className="relative z-10; container w-[100%] lg:w-[80%] min-h-[80vh] lg:max-h-[40vh] flex flex-col-reverse lg:flex-row  justify-center items-center">
        <div className='w-[100%] mt-8 flex flex-col items-center '>
          <div className="w-[90%] flex flex-col text-center justify-center ">

<div className='text-[1.5rem] text-sm md:text-[1.5rem] lx:text-[2rem] lg:leading-8 lg:text-[2rem] xl:leading-10 xl:text-[2rem] h-[100%]'>
            <h3 className=' mb-4 font-Great'>" After 3.5 years that was neither long nor short as a UEH student with so many unforgettable memories, it was time for me to graduate. This is an important milestone to say "goodbye" to close the good student days and say "hello" to maturity when it comes to making decisions for your future career path.
Graduation is always the most memorable moment of my student days and i look forward to sharing that moment with my loved ones. And what could be happier than when everyone is there to preserve that good memory. I would like my friends and my family to spend some precious time attending my graduation ceremony. "</h3>
           
           </div> <div className="flex justify-center">
            </div>
          </div></div>
        <div className="w-[80%] lg:w-[70%] lm:w-[70%] h-[70%]  lg:h-[80%] lm:h-[80%] lm: flex justify-center ">
          <video src={videoIntro} autoPlay loop muted />
        </div>
        <div className='absolute rounded-[50%] border-solid border-[1px] border-black right-4 xl:left-4 xl:bottom-4
       h-16 w-16 bottom-[100%]'>
          <span className='absolute font-Sora text-xl flex justify-center items-center rounded-[50%]
        top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black w-8 h-8 text-white'>
            ↓
          </span>
          <img src={logoBg} alt="logohome" className='w-[100%] h-auto animate-spinSlow' />
        </div>
      </div>
    </section>
  )
}
export default Home;
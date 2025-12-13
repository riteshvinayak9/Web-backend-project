import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to our doctor appointment app — a simple way to find the right doctor, choose a convenient clinic, and book a time that works for you in just a few clicks. We built this platform to reduce waiting, remove scheduling friction, and make healthcare access faster and more organized.
          </p>
          <p>
            We focus on clarity and reliability: transparent doctor details, real-time slot availability, and a smooth booking experience from start to finish. Whether you’re scheduling a routine check-up or planning follow-up visits, everything you need stays in one place.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to make appointment booking effortless for everyone by connecting patients with verified doctors and clinics through a clean, trusted, and time-saving experience. We aim to help people get the care they need sooner, with fewer steps and more confidence.</p>
        </div>
      </div>

    </div>
  )
}

export default About
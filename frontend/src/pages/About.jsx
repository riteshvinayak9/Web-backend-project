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
<<<<<<< HEAD
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

=======
          <p>Welcome to Dr.Appointer, your trusted partner in managing your healthcare needs conveniently and efficiently. At DR.Appointer, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>DR.Appointer is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, DR.Appointer is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Dr.Appointer is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined Appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
>>>>>>> 051f6eb (updated page contents)
    </div>
  )
}

export default About
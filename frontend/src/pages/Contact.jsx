import React from 'react'
<<<<<<< HEAD

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-gray-800">Contact</h1>
      <p className="mt-2 text-gray-600">
        Questions about bookings, clinics, or your account? Reach out:
      </p>

      <div className="mt-8 space-y-5">
        <div className="rounded-lg border border-gray-200 p-5">
          <div className="text-sm text-gray-500">Email</div>
          <a
            className="text-lg font-medium text-primary hover:underline"
            href="mailto:csufstudent@gmail.com"
          >
            csufstudent@gmail.com
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 p-5">
          <div className="text-sm text-gray-500">Phone</div>
          <a
            className="text-lg font-medium text-primary hover:underline"
            href="tel:11111111"
          >
            11111111
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 p-5">
          <div className="text-sm text-gray-500">Hours</div>
          <div className="text-gray-700">Mon–Sat, 9:00 AM – 6:00 PM</div>
        </div>
      </div>
=======
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>58709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555 0132 <br /> Email: riteshvinayak9@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at DR.Appointer</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

>>>>>>> 051f6eb (updated page contents)
    </div>
  )
}

export default Contact
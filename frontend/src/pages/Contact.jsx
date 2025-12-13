import React from 'react'

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
    </div>
  )
}

export default Contact
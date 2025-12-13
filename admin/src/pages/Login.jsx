import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {

  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setAToken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (state === 'Admin') {
<<<<<<< HEAD
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
=======
        const { data } = await axios.post('http://localhost:4000/api/admin/login', { email, password })
>>>>>>> 051f6eb (updated page contents)
        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
<<<<<<< HEAD

      }

    } catch (error) {

=======
      const { data } = await axios.post('http://localhost:4000/api/doctor/login', { email, password })
      if (data.success) {
        localStorage.setItem('dToken', data.token);
      } else {
        toast.error(data.message);
      }
      }

    } catch (error) {
      console.error(error);
    toast.error('Login failed. Please try again.');
>>>>>>> 051f6eb (updated page contents)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-primary'> {state}</span> Login</p>

        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#dadada] rounded w-full p-2 mt-1' type="email" required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#dadada] rounded w-full p-2 mt-1' type="password" required />
        </div>

        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>

        {
          state === 'Admin'
            ? <p>Doctor Login? <span className='text-primary underline cursor-pointer text-xs' onClick={() => setState('Doctor')}>Click Here</span></p>
            : <p>Admin Login? <span className='text-primary underline cursor-pointer text-xs' onClick={() => setState('Admin')}>Click Here</span></p>
        }

      </div>
    </form>
  )
}

export default Login
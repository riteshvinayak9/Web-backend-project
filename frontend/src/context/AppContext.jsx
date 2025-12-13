import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify'
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = '$'
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [doctors, setDoctors] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
  const [userData, setUserData] = useState(false)

  const getDoctorsData = async () => {

    try {

<<<<<<< HEAD
      const { data } = await axios.get(backendUrl + '/api/doctor/list')
=======
      const { data } = await axios.get('http://localhost:4000/api/doctor/list')
>>>>>>> 051f6eb (updated page contents)
      if (data.success) {
        setDoctors(data.doctors)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  const loadUserProfileData = async () => {

    try {

<<<<<<< HEAD
      const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
=======
      const { data } = await axios.get('http://localhost:4000/api/user/get-profile', { headers: { token } })
>>>>>>> 051f6eb (updated page contents)

      if (data.success) {
        setUserData(data.userData)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  const value = {
    doctors, getDoctorsData,
    currencySymbol,
    token, setToken,
    backendUrl,
    userData, setUserData,
    loadUserProfileData
  }

  useEffect(() => {
    getDoctorsData()
  }, [])

  useEffect(() => {
    if (token) {
      loadUserProfileData()
    } else {
      setUserData(false)
    }
  }, [token])

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}

export default AppContextProvider
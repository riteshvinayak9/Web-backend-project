import express from 'express'
import { doctorList } from '../controllers/doctorController.js'

const doctorRouter = express.Router()

<<<<<<< HEAD
=======

>>>>>>> 051f6eb (updated page contents)
doctorRouter.get('/list', doctorList)

export default doctorRouter
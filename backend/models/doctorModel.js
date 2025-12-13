import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
<<<<<<< HEAD
  image: { type: String, required: false },
  speciality: { type: String, required: true },
  degree: { type: String, required: false },
  experience: { type: String, required: true },
  about: { type: String, required: false },
  available: { type: Boolean, default: true },
  fees: { type: Number, required: false },
  
  date: { type: Number, required: true },
  slots_booked: { type: Object, default: {} },
  gender: {
    type: String,
    required: true,
  },
    phone: {
    type: String,
    trim: true,
  },
  locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'location' }

=======
  image: { type: String, required: true },
  speciality: { type: String, required: true },
  degree: { type: String, required: true },
  experience: { type: String, required: true },
  about: { type: String, required: true },
  available: { type: Boolean, default: true },
  fees: { type: Number, required: true },
  address: { type: Object, required: true },
  date: { type: Number, required: true },
  slots_booked: { type: Object, default: {} }
>>>>>>> 051f6eb (updated page contents)
}, { minimize: false })

const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)

<<<<<<< HEAD
export default doctorModel

=======
export default doctorModel
>>>>>>> 051f6eb (updated page contents)

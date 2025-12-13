import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
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

}, { minimize: false })

const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)

export default doctorModel


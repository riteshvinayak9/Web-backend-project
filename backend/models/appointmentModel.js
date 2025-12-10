import mongoose, { mongo } from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  docId: { type: mongoose.Schema.Types.ObjectId, ref: 'doctor', required: true },
  locationId: { type: mongoose.Schemea.Types.ObjectId, ref: 'location', required: true },
  slotDate: { type: String, required: true },
  slotTime: { type: String, required: true },
  userData: { type: Object,},
  docData: { type: Object, required: true },
  amount: { type: Number},
  date: { type: Number, required: true },
  cancelled: { type: Boolean, default: false },
  payment: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  
})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema)

export default appointmentModel
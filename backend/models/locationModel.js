import mongoose, { mongo } from "mongoose";

const locationSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  
})
const locationModel = mongoose.models.location || mongoose.model('location', locationSchema)


export default locationModel
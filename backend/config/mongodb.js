import mongoose from "mongoose";

const connectDB = async () => {
<<<<<<< HEAD
  try{
  mongoose.connection.on('connected', () => console.log('Database Connected'))
  await mongoose.connect(`${process.env.MONGODB_URI}/WebBackendProject`)
  }
  catch(error){
    console.log('Error connecting to database: ', error.message)
    process.exit(1)
  }
=======
  console.log("MONGODB_URI at runtime:", process.env.MONGODB_URI);
  mongoose.connection.on('connected', () => console.log('Database Connected'))
  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
>>>>>>> 051f6eb (updated page contents)
}

export default connectDB
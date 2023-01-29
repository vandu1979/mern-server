import mongoose from "mongoose";
import mongooseLog from './log.js'

const visitorSchema = mongoose.Schema({
       name: String,
       email: String,
       phone: Number,
       time: Number,
       Date: {
              type: Date,
              default: Date.now
          }
      
})
const visitor = mongoose.model('visitor', visitorSchema)
export default visitor;
import mongoose from "mongoose";
import mongooseLog from './log.js'

const visitorSchema = mongoose.Schema({
       name: String,
       email: String,
       phone: Number,
       Date: Date,
       intime: Number,
       outtime: Number,
})
const visitor = mongoose.model('visitor', visitorSchema)
export default visitor;
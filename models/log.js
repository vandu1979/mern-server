import mongoose from "mongoose";
const logSchema = mongoose.Schema({
    name: String,
    phone: Number,
    time: Number,
    
    
})
const log = mongoose.model('log', logSchema)
export default log;
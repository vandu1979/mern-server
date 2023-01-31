import mongoose from 'mongoose';

const visitorSchema = mongoose.Schema({
       name: String,
       phone: Number,
       email: String     
});
const Visitor = mongoose.model('Visitor', visitorSchema);
export default Visitor;
// export { Visitor };
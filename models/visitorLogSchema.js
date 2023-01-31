import mongoose from 'mongoose';
const visitorLogSchema = mongoose.Schema({
    visitorID: { type: mongoose.Schema.Types.ObjectId, ref: 'Visitor' },
    inTime: Date,
    outTime: Date,
    contactPerson: String
    });
const VisitorLog = mongoose.model('VisitorLog', visitorLogSchema)
export default VisitorLog;
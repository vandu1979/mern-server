//import  Visitor  from '../models/visitorSchema.js'
// import  Visitor  from '../models/visitorSchema.js';
import mongoose from "mongoose";
import Visitor from '../models/visitorSchema.js'
// import  VisitorLog  from '../models/visitorLogSchema.js'


// Visitor: Search a visitor existing
export const getAllVisitor = async (req,res) => {
  try  {
       const visitor = await Visitor.find()
      //  console.log(Visitor);
       res.status(200).json(visitor);
      } catch (error) {
          res.status(404).json({ message: error.message });
      }
    }
     

// this route is for Check-In
export const getVisitor = async (req, res) => {
    try {
        const visitor = await Visitor.findOne({
            // $or is a condition  checking if either name, phone, or email of a document in the Visitor
            $or: [{ email: req.body.email }, { phone: req.body.phone }]
          });
          if (!visitor) {
            return res.status(404).json({ error: 'Visitor not found' });
          }
          res.json({ visitor });
          //res.json({ name: visitor.name, email: visitor.email, phone: visitor.phone });
        } catch (error) {
          res.status(500).json({ error });
        }
      };
// export const getVisitor = async (req, res) => {
//   try {
//    const Visitor = await Visitor.find()
//    console.log(Visitor);
//    res.status(200).json(Visitor);
//   } catch (error) {
//       res.status(404).json({ message: error.message });
//   }
 
// };
// Visitor: Add a new visitor
export const createVisitor =  async (req, res) => {
    const post = req.body;
    console.log(post);
const newVisitor = new Visitor(post);
    try {
        await newVisitor.save();

        res.status(201).json(newVisitor);
    } catch (error) {
    res.status(409).json({ message: error.message})
}
}
// Visitor: update visitor data in case changed
export const updateVisitor = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No visitor with that id');
     const updatedVisitor = 
    await Visitor.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedVisitor);
    console.log(updateVisitor)
  }
  // Admin: delete visitor, this may be required by law ( retention period)
export const deleteVisitor = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No visitor with that id');
  await Visitor.findByIdAndDelete({_id: id});
  console.log('DELETE');
  res.json({ message: 'Visitor deleted successfully' });
}

// Visitor: Get visitor last log to be used for checkout/logout
export const getVisitorLastLog = async (req, res) => {
// Find visitor by matching phone, email, or name
Visitor.findOne({
  phone: searchPhone,
  name: searchName,
  email: searchEmail
}).then(async visitor => {
  // If visitor found, search the log using visitorID
  if (visitor) {
    const visitorLog = await VisitorLog.find({ visitorID: visitor._id }).sort({ _id: -1 }).limit(1) ;
    if (!visitorLog) {
      return res.status(404).json({ error: 'Visitor log not found' });
    }
    res.json({ visitorLog });
  }

});
}
// updateVisitorLog : This section will be used when a user logs out
export const updateVisitorLog = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No visitor log with that id');
  const updatedVisitorLog = 
  await VisitorLog.findByIdAndUpdate(_id, post, { new: true });
  res.json(updatedVisitorLog);
}
// Visitor : add a new visitor log when user cheks in
export const createVisitorLog =  async (req, res) => {
  const post = req.body;
  console.log(post);
const newVisitorLog = new VisitorLog(post);
  try {
      await newVisitorLog.save();

      res.status(201).json(newVisitorLog);
  } catch (error) {
  res.status(409).json({ message: error.message})
}
}
// Admin: Get log for a given date range
export const getVisitorLogByDate = async (req, res) => {
  // Find visitor by matching phone, email, or name
  Visitor.findOne({
    phone: searchPhone,
    name: searchName,
    email: searchEmail
  }).then(async visitor => {
    // If visitor found, search the log using visitorID
    if (visitor) {
      const visitorLog = await VisitorLog.find({ visitorID: visitor._id }).sort({ _id: -1 }).limit(1) ;
      if (!visitorLog) {
        return res.status(404).json({ error: 'Visitor log not found' });
      }
      res.json({ visitorLog });
    }
  
  });
  }   
  // Admin: Get log for a given visitor
  //   // Search visitor logs
// router.get('/VisitorLog', async (req, res) => {
//     try {
//       const visitorLogs = await VisitorLog.find({
//         // $in is a operator in a MongoDB query to find documents in the Visitor collection that match the $or condition. 
//         visitorID: { $in: (await Visitor.find({
//           $or: [{ name: req.query.query }, { phone: req.query.query }, { email: req.query.query }]
//         })).map(visitor => visitor._id) }
//       });
//       res.json({ visitorLogs });
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   });
export const getVisitorLogByVisitor = async (req, res) => {
  // Find visitor by matching phone, email, or name
  Visitor.findOne({
    phone: searchPhone,
    name: searchName,
    email: searchEmail
  }).then(async visitor => {
    // If visitor found, search the log using visitorID
    if (visitor) {
      const visitorLog = await VisitorLog.find({ visitorID: visitor._id }).sort({ _id: -1 }) ;
      if (!visitorLog) {
        return res.status(404).json({ error: 'Visitor log not found' });
      }
      res.json({ visitorLog });
    }
  
  });
  }   
// Admin: deleteVisitorLog : delete visitor log, Admin will use this section to delete logs after 30/60/90 days 
export const deleteVisitorLog = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No visitor log with that id');
  await VisitorLog.findByIdAndRemove(id);
  console.log('DELETE');
  res.json({ message: 'Visitor log deleted successfully' });
}



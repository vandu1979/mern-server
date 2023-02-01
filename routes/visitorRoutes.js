import  express from 'express';
import { getVisitor, createVisitor, updateVisitor, deleteVisitor,getVisitorLastLog, createVisitorLog, updateVisitorLog, deleteVisitorLog, getVisitorLogByDate, getVisitorLogByVisitor, getAllVisitor } from '../controllers/controls.js';
const router = express.Router();
// start adding our routes
router.get('/allVisitor', getAllVisitor);
// this route is for Check-In 
router.post('/getVisitor', getVisitor);

router.post('/createVisitor', createVisitor);
//put is for updating route
router.put('/updateVisitor/:id', updateVisitor);
//============== Visitor Log related routes
// start adding our routes
router.get('/getVisitorLastLog', getVisitorLastLog);
router.post('/createVisitorLog', createVisitorLog);
//patch is for updating route
router.patch('/updateVisitorLog:id', updateVisitorLog);
// ============ Admin related work
router.delete('/deleteVisitor/:id', deleteVisitor);
router.get('/getVisitorLogByDate', getVisitorLogByDate);
router.get('/getVisitorLogByVisitor', getVisitorLogByVisitor);
router.delete('/deleteVisitorLog:id', deleteVisitorLog);
export default router;
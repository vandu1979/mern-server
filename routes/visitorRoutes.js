import  express from 'express';
import { getVisitor, createVisitor, updateVisitor, deleteVisitor,getVisitorLastLog, createVisitorLog, updateVisitorLog, deleteVisitorLog, getVisitorLogByDate, getVisitorLogByVisitor } from '../controllers/controls.js';
const router = express.Router();
// start adding our routes
router.get('/getVisitor', getVisitor);
router.post('/createVisitor', createVisitor);
//patch is for updating route
router.patch('/updateVisitor:id', updateVisitor);
//============== Visitor Log related routes
// start adding our routes
router.get('/getVisitorLastLog', getVisitorLastLog);
router.post('/createVisitorLog', createVisitorLog);
//patch is for updating route
router.patch('/updateVisitorLog:id', updateVisitorLog);
// ============ Admin related work
router.delete('/deleteVisitor:id', deleteVisitor);
router.get('/getVisitorLogByDate', getVisitorLogByDate);
router.get('/getVisitorLogByVisitor', getVisitorLogByVisitor);
router.delete('/deleteVisitorLog:id', deleteVisitorLog);
export default router;
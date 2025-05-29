import express from 'express';
import { addTanaman } from '../controllers/tanamanController.js';
import { getTanaman } from '../controllers/tanamanController.js';


const router = express.Router();

// Route to add a new tanaman
router.post('/add', addTanaman);
router.get('/get/:nama_tanaman', getTanaman);

// Export the router
export default router;
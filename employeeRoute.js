import { Router } from 'express';
import {
	getAllEmployee,
	getSingleEmployee,
	addEmployee,
	deleteEmployee,
} from './employeeController.js';

const router = Router();

// GET all employees
router.get('/', getAllEmployee);

//GET a single employee
router.get('/:id', getSingleEmployee);

//POST a new employee
router.post('/', addEmployee);

// DELETE an employee
router.delete('/:id', deleteEmployee);

export default router;

import { readFileSync, writeFileSync } from 'fs';

const data = readFileSync('./data.json');

// get all employee controller
const getAllEmployee = (req, res) => {
	const employees = JSON.parse(data);
	res.status(200).json(employees);
};

// get a single employee controller
const getSingleEmployee = (req, res) => {
	const { id } = req.params;
	const employees = JSON.parse(data);

	const foundEmployee = employees.find(
		(employee) => employee._id === parseInt(id)
	);
	if (!foundEmployee)
		return res.status(400).json(`no employee found with the id ${id}`);
	res.status(200).json(foundEmployee);
};

//post a new employee controller
const addEmployee = (req, res) => {
	const employeeData = req.body;
	const employees = JSON.parse(data);

	//append the employee data
	employees.push(employeeData);

	//save the new employee data
	const newEmployee = JSON.stringify(employees);
	writeFileSync('./data.json', newEmployee);

	res.status(201).json({
		message: 'Employee added successfully',
		employees,
	});
};

//delete an employee controller
const deleteEmployee = (req, res) => {
	const { id } = req.params;
	const employees = JSON.parse(data);

	//find a specific employee by id
	const foundEmployee = employees.find(
		(employee) => employee._id === parseInt(id)
	);
	if (!foundEmployee)
		return res.status(400).json(`no employee found with the id ${id}`);

	//delete a specific employee by id
	const deletedEmployee = employees.filter(
		(employee) => employee._id !== foundEmployee._id
	);

	// save the filtered employee
	const newEmployees = JSON.stringify(deletedEmployee);
	writeFileSync('./data.json', newEmployees);

	res.status(200).json({
		message: 'Employee deleted successfully',
	});
};

export { getAllEmployee, getSingleEmployee, addEmployee, deleteEmployee };

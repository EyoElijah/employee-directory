import express, { json, urlencoded } from 'express';
import employeeRoute from './employeeRoute.js';

const app = express();

// middleware
app.use(json());
app.use(urlencoded({ extended: false }));

// employee Route
app.use('/api/v1/employee', employeeRoute);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

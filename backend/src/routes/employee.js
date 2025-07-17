const express = require("express");
const employeeRouter = express.Router();
const { ValidateEmployee } = require("../utils/validation");

const {
    createEmployee,
    getAllEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

employeeRouter.post("/", ValidateEmployee, createEmployee);
employeeRouter.get("/", getAllEmployees);
employeeRouter.get("/:id", getEmployee);
employeeRouter.patch("/:id", ValidateEmployee, updateEmployee);
employeeRouter.delete("/:id", deleteEmployee);

module.exports = employeeRouter;
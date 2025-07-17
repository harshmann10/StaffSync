const Employee = require("../models/employee");

// create
exports.createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// get all
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().sort({ createdAt: -1 });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// get one
exports.getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ error: "Not found" });
        res.json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update
exports.updateEmployee = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'designation', 'department', 'salary', 'lastDay'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ error: "Not found" });
        }

        updates.forEach((update) => (employee[update] = req.body[update]));
        await employee.save();

        res.json(employee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) return res.status(404).json({ error: "Not found" });
        res.json({ message: "Employee deleted", employee});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

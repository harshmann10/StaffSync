const validator = require("validator");

exports.ValidateEmployee = (req, res, next) => {
    const errors = [];
    const { name, email, designation, department, salary, lastDay } = req.body;

    if (!name || validator.isEmpty(name, { ignore_whitespace: true })) {
        errors.push({ msg: "Name is required.", path: "name", value: name });
    }

    if (!email || !validator.isEmail(email)) {
        errors.push({ msg: "Must be a valid email address.", path: "email", value: email });
    } else {
        req.body.email = validator.normalizeEmail(email);
    }

    if (!designation || validator.isEmpty(designation, { ignore_whitespace: true })) {
        errors.push({ msg: "Designation is required.", path: "designation", value: designation });
    }

    if (!department || validator.isEmpty(department, { ignore_whitespace: true })) {
        errors.push({ msg: "Department is required.", path: "department", value: department });
    }

    if (!salary || !validator.isFloat(String(salary), { gt: 0 })) {
        errors.push({ msg: "Salary must be a positive number.", path: "salary", value: salary });
    }

    if (lastDay && !validator.isISO8601(String(lastDay))) {
        errors.push({ msg: "Last day must be a valid date in YYYY-MM-DD format.", path: "lastDay", value: lastDay });
    }

    if (errors.length > 0) {
        return res.status(422).json({ errors });
    }

    next();
};

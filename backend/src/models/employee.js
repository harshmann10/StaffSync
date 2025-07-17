const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Please provide a valid email address."]
    },
    designation: {
        type: String,
    },
    department: {
        type: String,
    },
    salary: {
        type: Number,
        required: [true, "Salary is required."],
        min: [0, "Salary cannot be negative."]
    },
    dateOfJoining: {
        type: Date,
        default: Date.now,
    },
    lastDay: {
        type: Date,
        validate: {
            validator: function (value) {
                return value > this.dateOfJoining;
            },
            message: props => `Last day (${props.value.toDateString()}) must be after the date of joining.`
        }
    },
},
{
    timestamps: true
});

module.exports = mongoose.model("Employee", employeeSchema);

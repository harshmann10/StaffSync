const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();

const app = express();

const port = process.env.PORT;
const allowedOrigin = process.env.ALLOWED_ORIGIN;

app.use(
    cors({
        origin: allowedOrigin,
        credentials: true,
    })
);

app.use(express.json());

const employeeRouter = require("./routes/employee");
const InsightRouter = require("./routes/insightRoute");

app.use("/api/employees", employeeRouter);
app.use("/api/insights", InsightRouter);

connectDB()
    .then(() => {
        console.log("Database connection established");
        app.listen(port, () => {
            console.log(`project starting on port ${port}....`);
        });
    })
    .catch((err) => {
        console.log("Database cannot be connected : " + err);
    });

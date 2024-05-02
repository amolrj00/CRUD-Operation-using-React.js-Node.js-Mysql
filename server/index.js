const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");


// Middleware
app.use(express.json());
app.use(cors());

// Routers

// StudentModel router
const studentModelRouter = require('./Routes/StudentRoutes');
app.use("/student", studentModelRouter);


// Sync database and start server
db.sequelize.sync().then(() => {
    app.listen(3030, () => {
        console.log("Server is running on port 3030");
    });
});

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("../config/db/setUp");
const { PORT } = require("../config/app-config");
const { apiLimiter, apiSpeedLimiter } = require('./middlewares/apiRateThrottler');
const authRoutes = require("./routes/auth/auth");
const notesRoutes = require("./routes/notes/notes");

const app = express();
const port = PORT;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(apiLimiter); // Apply rate limiting middleware to all routes or specific routes as needed
app.use(apiSpeedLimiter); // Apply request throttling middleware to all routes or specific routes as needed
app.use(authRoutes);
app.use(notesRoutes);

app.get("/", (req, res) => {
    res.send("ok")
})

app.listen(port, () => console.log(`server is running at http://127.0.0.1:${port}`));
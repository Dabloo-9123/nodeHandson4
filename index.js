const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");

const app = express()
const { register, login, profie, dashboard } = require('./controller/userController');
const authMiddlerware = require('./middleware/authMiddleware')
dotenv.config();
const port = process.env.port1;

app.use(express.json())
app.use(cors({
    origin: "*"

}))

app.get("/", (req, res) => {
    res.send("Hello Dabloo How are You Today")
})
app.post("/register", register)
app.post("/login", login)
app.get("/profile", authMiddlerware, profie)
app.get("/dashboard", authMiddlerware, dashboard)


app.listen(port, () => {
    console.log(`server is live on ${port}`);
})
const express = require("express")
const app = express()//instance of expressjs app

//request handler
app.use("/", (req, res) => {
    res.send("Hello!!")
})
app.use("/test", (req, res) => {
    res.send("Hello from test")
})
//on which port ur application running
app.listen(3000, () => {
    console.log("server running perfectly on port 3000");
})
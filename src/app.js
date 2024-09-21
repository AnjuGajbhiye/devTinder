const express = require("express")
const app = express()//instance of expressjs app
const { authAdmin, userAuth } = require("./middlewares/auth")
//request handler

app.use("/admin", authAdmin)

app.get("/admin/getAllData", (req, res) => {
    res.send("getAllData")
})
app.get("/admin/deleteData", (req, res) => {
    res.send("delete")
})

// app.get("/user", (req, res, next) => {
//     next();
//     res.send("request 1")
// },
//     (req, res) => {
//         res.send("request 2")
//     })



app.get("/user/data",userAuth, (req, res, next) => {
    console.log("request1")
    res.send("user data sent")
})

app.post("/user/login", (req, res) => {
    console.log("request2")
    res.send("user logged in successfully ")
})
app.get("/user/:userid/:name", (req, res) => {
    console.log(req.params)
    // console.log(req.query)
    res.send({ name: "Anju" })
})
app.post("/user", (req, res) => {
    res.send("data saved successfully")
})
//this will mach all methods
app.use("/test", (req, res) => {
    res.send("Hello from test")
})

//on which port ur application running
app.listen(3000, () => {
    console.log("server running perfectly on port 3000");
})
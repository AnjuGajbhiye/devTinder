const express = require("express")
const {
    dbConnection
} = require("./config/database")
const app = express() //instance of expressjs app
const {
    authAdmin,
    userAuth
} = require("./middlewares/auth")
const User = require("./models/users")
dbConnection().then(() => {
    console.log("DB connection Successfully established")
    app.listen(777, () => {
        console.log("server successfully listening to port 777")
    })
}).catch((err) => {
    console.log("DB connection fail")
})

app.use(express.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.post("/signup", async (req, res) => {
    //creating a new instance of User model
    const user = new User(req.body);

    try {
        await user.save()
        res.send("user added successfully");
    } catch (err) {
        res.status(400).send("Error saving the user:", err.message)
    }
})
//delete user by id
app.delete("/user", async (req, res) => {
    try {
        const userId = req.body.userId;
        // const user = await User.findByIdAndDelete(
        //     userId
        // )
        const user = await User.findByIdAndDelete({
            _id: userId
        })
        res.send("user deleted successfully");

    } catch (err) {
        res.status(400).send("user not found:", err.message)
    }
})
//get user by emailid
app.get("/user", async (req, res) => {
    try {
        // const userEmaidId = req.body.emailId;
        const users = await User.find({
            // emailId: userEmaidId
        })
        res.send(users)
        // if (users.length === 0) {
        //     res.status(400).send("user not found:")
        // } else {
        //     res.send(users)
        // }
    } catch (err) {
        res.status(400).send("user not found:", err.message)
    }
})
//get all from db
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({})
        if (users.length === 0) {
            res.status(400).send("user not found:")
        } else {
            res.send(users)
        }
    } catch (err) {
        res.status(400).send("user not found:", err.message)
    }
})

//user update
app.patch("/user", async (req, res) => {
    try {
        const userId = req.body.userId;
        const data = req.body
        const users = await User.findByIdAndUpdate({
            _id: userId
        }, data)
        res.send("data updated successfully")

    } catch (err) {
        res.status(400).send("user not found:", err.message)
    }
})





















//////////////////////////////////////////////////////////////////////////////////////////////////
//request handler

// //midleware
// app.use("/admin", authAdmin)

// app.get("/admin/getAllData", (req, res) => {
//     res.send("getAllData")
// })
// app.get("/admin/deleteData", (req, res) => {
//     res.send("delete")
// })

// app.get("/user", (req, res, next) => {
//     next();
//     res.send("request 1")
// },
//     (req, res) => {
//         res.send("request 2")
//     })

// app.get("/user/data", userAuth, (req, res, next) => {
//     console.log("request1")
//     res.send("user data sent")
// })

// app.post("/user/login", (req, res) => {
//     console.log("request2")
//     res.send("user logged in successfully ")
// })
// app.get("/user/:userid/:name", (req, res) => {
//     console.log(req.params)
//     // console.log(req.query)
//     res.send({ name: "Anju" })
// })
// app.post("/user", (req, res) => {
//     res.send("data saved successfully")
// })
// //this will mach all methods
// app.use("/test", (req, res) => {
//     res.send("Hello from test")
// })

//error handling

// app.get("/testError", (req, res) => {
//     try{
//         throw new Error("")
//         res.send("hdbfsjbf")
//     }catch{
//         res.status(500).send("Something went wrong");

//     }

// })

// app.use("/", (err, req, res, next) => {
//     if (err) {
//         //log your err
//         res.status(500).send("Internal server error");
//     }
// })

// app.listen(3000,()=>{
//     console.log("server successfully listening to port 3000")
// })
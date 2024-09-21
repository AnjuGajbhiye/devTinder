const authAdmin = (req, res, next) => {
    const token = "xyz";
    const isAuthorized = token === "xyz"
    console.log("checking auth")
    if (!isAuthorized) {
        res.status(401).send("unauthorized user")
    }
    else {
        next()
    }

}
const userAuth = (req, res, next) => {
    const token = "xyz1";
    const isAuthorized = token === "xyz"
    console.log("checking auth")
    if (!isAuthorized) {
        res.status(401).send("unauthorized user")
    }
    else {
        next()
    }

}

module.exports = {
    authAdmin,
    userAuth
}
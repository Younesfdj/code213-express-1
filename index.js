const express = require('express')
const app = express()
const { users, addUser, removeUser, updateUser } = require('./utils')

app.use(express.json())

app.get("/users", (req, res) => {
    // send users list
    res.status(200).json(users)
})
app.post("/user", (req, res, next) => {
    console.log("bonjour");
    console.log(req.body);
    next();
}, (req, res) => {
    // add user to users list
    const newUser = req.body
    addUser(newUser)
    res.status(201).send("user created")
})
app.put("/user/:userId", (req, res) => {
    // update user in users list
    const id = req.params.userId
    const givenUser = req.body


})
app.delete("/user", (req, res) => {
    // remove user from users list
})


app.get("*", (req, res) => {
    res.send("<h1>404 Page not found</h1>")
})

app.listen(4000, () => {
    console.log('Server is running')
})

let {users} = require("../Data/user")

exports.registerUser = function(req, res) {
    let data = req.body
    let {userName, password, workout, residence} = data

    if(!userName) {
        return res.status(400).send({error : "userName is missing"})
    }

    if(!password) {
        return res.status(400).send({error : "password is missing"})
    }

    if(!workout) {
        return res.status(400).send({error : "workout is missing"})
    }

    if(!residence) {
        return res.status(400).send({error : 'residence is required'})
    }

    for(let el of users) {
        if(el.userName === userName) {
            return res.status(400).send({error : "userName Already exists try logging in "})
        }
    }
    
    let newUser = {
        id : users.length + 1,
        userName,
        password,
        workout,
        residence,
    }

    users.push(newUser)
    console.log(users)
    return res.status(201).send({message : 'registered successfully', data : newUser })
}
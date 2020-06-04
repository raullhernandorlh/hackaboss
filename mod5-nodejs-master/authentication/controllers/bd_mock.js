/**
 * This file is just a double to use instead of real database.
 * 
 */

let users = [];

let id = 1;

const getUser = (email) => {
    return users.find(user => user.email === email);
}

const saveUser = (email, password) => {
    users.push({
        id: id++,
        email,
        password,
        role: 'normal'
    })
}


module.exports = {
    getUser,
    saveUser
}
import users from '../data/user.data'

/**
 * Find all users
 * @returns []
 */
const findUsers = () => users;

/**
 * Find user by id
 * @param {integer} userId 
 * @returns {object}
 */
const findUserById = (userId) => users.find(user => user.id === userId);

/***
 * Insert a new user to database
 * @param {object} details 
 * @returns {object}
 */
const insert = (details) => {
    const newUser = {...details, id: users.length+1}
    users.push(newUser)
    return newUser
}

/**
 * Updates the user details
 * @param {integer} userId 
 * @param {object} newDetails 
 * @returns {object}
 */
const update = (userId, newDetails)=>{
    let updatedUser = null;
    let index = users.findIndex((user) => user.id === userId);
    if(index === -1) {
        console.log(`User with ID ${userId} not found`);
        return updatedUser;
    }
    updatedUser = {...users[index], ...newDetails};
    users.splice(index, 1, updatedUser);
    return updatedUser;
}

/**
 * Removes the user from the database
 * @param {integer} userId 
 * @returns {object}
 */
const remove = (userId)=>{
    let removedUser = null;
    const index = users.findIndex((user) => user.id === userId);
    if(index === -1) {
        console.log(`User with ID ${userId} not found`);
        return removedUser;
    }
    removedUser = users.splice(index,1);
    return removedUser;
}

export default {
    insert,
    findUserById,
    findUsers,
    update,
    remove
}
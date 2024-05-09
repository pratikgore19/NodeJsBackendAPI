import userDao from '../models/persistence/user.dao'

/**
 * Get all users
 * @returns []
 */
const getUsers = () => userDao.findUsers();

/**
 * Get user by id
 * @param {string} id 
 * @returns {object}
 */
const getUserById = (id) => userDao.findUserById(id);

/**
 * Add user
 * @param {object} details 
 * @returns {object}
 */
const addUser = (details) => userDao.insert(details);

/**
 * Update user
 * @param {integer} id 
 * @param {object} details 
 * @returns {object}
 */
const updateUser = (id, details) => userDao.update(id, details);

/**
 * Delete user
 * @param {integer} id 
 * @returns {object}
 */
const deleteUser = (id) => userDao.remove(id);

export default {
    getUserById,
    getUsers,
    addUser,
    updateUser,
    deleteUser
}
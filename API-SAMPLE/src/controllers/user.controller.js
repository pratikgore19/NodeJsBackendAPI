import StatusCode from 'http-status-codes'
import pino from 'pino'

import userService from '../services/user.service'

const logger = pino();

/**
 * Retrieves all users
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUsers = (req, res) => {
    const users = userService.getUsers();
    if (!users.length) {
        return res.status(StatusCode.NOT_FOUND).send({
            status: true,
            message: 'No users found'
        });
    }
    return res.status(StatusCode.OK).send({
        status: true,
        users,
        message: 'Data recieved successfully'
    });
}

/**
 * Retrieve the user with the given id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUserById = (req, res) => {
    const { params: { id } } = req;
    const user = userService.getUserById(parseInt(id));
    if (!user) {
        return res.status(StatusCode.OK).send({
            status: false,
            message: `User with id ${id} does not exist`
        });
    }
    logger.info(`Retrieving user ${id}`)
    return res.status(StatusCode.OK).send({
        status: true,
        user,
        message: 'Data recieved successfully'
    });
}

/**
 * Adds a new user to the database
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const addUser = (req, res) => {
    const { body: user } = req;

    const addedUser = userService.addUser(user);
    logger.info('User added successfully!')
    return res.status(StatusCode.ACCEPTED).send({
        status: true,
        user: addedUser,
        message: 'Data recieved successfully'
    });
}

/**
 * Updates the user details user in the database
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updateUser = (req, res) => {
    const { body: user } = req;
    const { id } = req.params;
    const updatedUser = userService.updateUser(parseInt(id), user);
    if (updatedUser) {
        logger.info(`User ${id} updated successfully!`)
        return res.status(StatusCode.ACCEPTED).send({
            status: true,
            user: updatedUser,
            message: 'Data updated successfully'
        });
    }
    else {
        return res.status(StatusCode.NOT_FOUND).send({
            status: false,
            message: `User with ID ${id} not found`
        });
    }
}

/**
 * Deletes the user from the database
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const deleteUser = (req, res) => {
    const { id } = req.params;
    const deletedUser = userService.deleteUser(parseInt(id));
    if (deletedUser) {
        logger.info(`User ${id} deleted successfully`)
        return res.status(StatusCode.OK).send({
            status: true,
            message: `User-${id} has been removed successfully`
        });
    }
    else {
        return res.status(StatusCode.NOT_FOUND).send({
            status: false,
            message: `User with ID ${id} not found`
        });
    }
}

export default {
    getUserById,
    getUsers,
    addUser,
    updateUser,
    deleteUser
}
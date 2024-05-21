import express from 'express'
import { expressYupMiddleware } from 'express-yup-middleware'
import StatusCode from 'http-status-codes'

import { addUserSchema, updateUserSchema } from '../schemas/user.schemas'
import userController from '../controllers/user.controller'

const userRoute = express.Router();

userRoute.use(express.json());
userRoute.use(express.urlencoded({ extended: true }));


userRoute.get('/all', userController.getUsers)

userRoute.get('/:id', userController.getUserById)

userRoute.post('/',
    expressYupMiddleware({
        schemaValidator: addUserSchema,
        expectedStatusCode: StatusCode.BAD_REQUEST
    }),
    userController.addUser
    )

userRoute.put('/:id',
    expressYupMiddleware({
        schemaValidator: updateUserSchema,
        expectedStatusCode: StatusCode.BAD_REQUEST
    }),
    userController.updateUser
    )

userRoute.delete('/delete/:id', userController.deleteUser)

export default userRoute;
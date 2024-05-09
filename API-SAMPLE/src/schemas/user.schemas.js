import * as yup from 'yup';

export const addUserSchema = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().required(),
                email: yup.string().email().required(),
                age: yup.number().required().positive().integer(),
                city: yup.string()
            })
        }
    }
}

export const updateUserSchema = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().required(),
                email: yup.string().email().required(),
                age: yup.number().required().positive().integer(),
                city: yup.string()
            })
        }
    }
}
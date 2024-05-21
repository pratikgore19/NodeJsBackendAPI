import * as yup from 'yup';

export const addUserSchema = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                userName: yup.string().required(),
                userEmail: yup.string().email().required(),
                userAge: yup.number().required().positive().integer(),
                userCity: yup.string()
            })
        }
    }
}

export const updateUserSchema = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                userName: yup.string().required(),
                userEmail: yup.string().email().required(),
                userAge: yup.number().required().positive().integer(),
                userCity: yup.string()
            })
        }
    }
}
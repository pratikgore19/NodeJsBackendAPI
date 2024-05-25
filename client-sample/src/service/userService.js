import axios from 'axios';

const baseUrlEndpoint = 'http://localhost:4000/v1';

export const createUser = async (payLoad) => {
    const {data : apiResponse} = await axios.post(`${baseUrlEndpoint}/user`, payLoad);
    console.log(apiResponse);
    return apiResponse;
}

export const getAllUsers = async () => {
    const { data: apiResponse} = await axios.get(`${baseUrlEndpoint}/user/all`);
    return apiResponse
}

export const getUserById = async (id) => {
    const { data: apiResponse} = await axios.get(`${baseUrlEndpoint}/user/${id}`);
    return apiResponse;
}

export const deleteUser = async (id) => {
    const {data : apiResponse} = await axios.delete(`${baseUrlEndpoint}/user/delete/${id}`);
    return apiResponse;
}
import axios from "axios";

const API_URL  =  "https://webx-production-4ed2.up.railway.app/api/users" 
export const getUsers = () => axios.get(API_URL);
export const createUser = (data) => axios.post(API_URL, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
export const getUserById = (id) => axios.get(`${API_URL}/${id}`);

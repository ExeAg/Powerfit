import axios from "./axios";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify");

export const getUsersRequest = (user) => axios.get(`/users`, user);

export const getUserRequest = (id) => axios.get(`/users/${id}`, user);

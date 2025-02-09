import axios from "./axios";

export const getCompositionsRequest = () => axios.get("/compositions");

export const getCompositionRequest = (id) => axios.get(`/compositions/${id}`);

export const createCompositionRequest = (composition) => axios.post("/compositions", composition);

export const updateCompositionRequest = (id, composition) => axios.put(`/compositions/${id}`, composition);

export const deleteCompositionRequest = (id) => axios.delete(`/compositions/${id}`);
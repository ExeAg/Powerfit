import axios from "./axios";

export const getCompsRequest = () => axios.get("/comps");

export const getCompRequest = (id) => axios.get(`/comps/${id}`);

export const createCompRequest = (comp) => axios.post("/comps", comp);

export const updateCompRequest = (comp) =>
    axios.put(`/comps/${comp._id}`, comp);

export const deleteCompRequest = (id) => axios.delete(`/comps/${id}`);


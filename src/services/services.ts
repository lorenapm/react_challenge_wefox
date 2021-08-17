import http from "../http-common";
import dataTypes from "../types/types";

const getAll = () => {
    return http.get("/posts");
};

const get = (id:any) => {
    return http.get(`/posts/${id}`);
};

const create = (data: dataTypes) => {
    return http.post("/posts", data);
};

const update = (id: any, data: dataTypes) => {
    return http.put(`/posts/${id}`, data);
};

const remove = (id: any) => {
    return http.delete(`posts/${id}`);
};

const removeAll = () => {
    return http.delete(`/posts`);
};

const findByTitle = (title:string) => {
    return http.get(`/posts?title=${title}`);
};

const DataService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};

export default DataService;


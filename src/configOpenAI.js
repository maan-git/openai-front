import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";
const api = axios.create({baseURL: baseURL});

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export {api};
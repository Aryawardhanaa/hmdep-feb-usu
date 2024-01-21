import axios from "axios";

export const baseURL = "https://script.google.com/macros/s/AKfycbxldsVFogAaBOtUNg2kTMsayrK7Xnede76NPKMab56uHd1OpQeJ4Ee0v3juWHxuzkSy";
// export const baseURL = "https://script.google.com/macros/s/AKfycbxldsVFogAaBOtUNg2kTMsayrK7Xnede76NPKMab56uHd1OpQeJ4Ee0v3juWHxuzkSy";
// export const baseURL = 'http://localhost:5000'
export const apiURL = 'https://be-hmd.vercel.app'
const API = axios.create({
    baseURL,
});
export const APIBase = axios.create({
    apiURL,
});

export const getBerita = () =>
    API.get("/exec").then(({ data }) => data);
export const sendContact = () =>
    APIBase.post("/kritik").then(({ data }) => data);
export const getAllProduct = () =>
    API.get("/exec?action=all-product").then(({ data }) => data);
export const getVisiMisiBPH = () =>
    API.get("/exec?action=visi-misi-bph").then(({ data }) => data);
export const getAllBidang = () =>
    API.get("/exec?action=all-program").then(({ data }) => data);
export const getProductBySlug = (slug) =>
    API.get(`/exec?action=find-product&q=${slug}`).then(({ data }) => data);
export const getBeritaBySlug = (slug) =>
    API.get(`/exec?action=find&q=${slug}`).then(({ data }) => data);
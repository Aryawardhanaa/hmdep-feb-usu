import axios from "axios";

export const baseURL = "https://script.google.com/macros/s/AKfycbxldsVFogAaBOtUNg2kTMsayrK7Xnede76NPKMab56uHd1OpQeJ4Ee0v3juWHxuzkSy";

const API = axios.create({
    baseURL,
});

export const getBerita = () =>
    API.get("/exec").then(({ data }) => data);
export const getBeritaBySlug = (slug) =>
    API.get(`/exec?action=find&q=${slug}`).then(({ data }) => data);
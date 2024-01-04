import axios from "axios";

// export const baseURL = "https://script.google.com/macros/s/AKfycbxldsVFogAaBOtUNg2kTMsayrK7Xnede76NPKMab56uHd1OpQeJ4Ee0v3juWHxuzkSy";
// export const baseURL = 'http://localhost:5000'
export const baseURL = 'https://be-hmd.vercel.app'
const API = axios.create({
    baseURL,
});

export const getBerita = () =>
    API.get("/berita").then(({ data }) => data);


export const getBeritaBySlug = (slug) =>
    API.get(`/berita-by-slug?q=${slug}`).then(({ data }) => data);